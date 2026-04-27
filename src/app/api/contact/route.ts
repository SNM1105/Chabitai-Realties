import { NextResponse } from "next/server";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    if (
      !isNonEmptyString(body.firstName) ||
      !isNonEmptyString(body.lastName) ||
      !isNonEmptyString(body.email) ||
      !isNonEmptyString(body.interest) ||
      !isNonEmptyString(body.message)
    ) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      return NextResponse.json(
        {
          message:
            "Email service is not fully configured. Missing one or more EmailJS environment variables.",
        },
        { status: 500 }
      );
    }

    const emailJsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          first_name: body.firstName,
          last_name: body.lastName,
          from_email: body.email,
          phone: body.phone ?? "",
          interest: body.interest,
          message: body.message,
          reply_to: body.email,
        },
      }),
    });

    if (!emailJsResponse.ok) {
      const details = await emailJsResponse.text();

      if (
        emailJsResponse.status === 403 &&
        details.toLowerCase().includes("non-browser environments")
      ) {
        return NextResponse.json(
          {
            message:
              "EmailJS is blocking server requests. In EmailJS Dashboard > Account > Security, enable API access from non-browser environments.",
            details,
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          message:
            "Message could not be sent right now. Please verify EmailJS template fields and key permissions.",
          details,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        message: "Unexpected server error while sending message.",
      },
      { status: 500 }
    );
  }
}
