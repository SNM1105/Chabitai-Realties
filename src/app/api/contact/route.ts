import { NextResponse } from "next/server";

export const runtime = "nodejs";

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

function getEnvValue(keys: string[]): string | undefined {
  for (const key of keys) {
    const value = process.env[key];
    if (value && value.trim().length > 0) {
      return value.trim();
    }
  }
  return undefined;
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

    const serviceId = getEnvValue(["EMAILJS_SERVICE_ID", "NEXT_PUBLIC_EMAILJS_SERVICE_ID"]);
    const templateId = getEnvValue(["EMAILJS_TEMPLATE_ID", "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID"]);
    const publicKey = getEnvValue(["EMAILJS_PUBLIC_KEY", "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", "EMAILJS_USER_ID"]);
    const privateKey = getEnvValue(["EMAILJS_PRIVATE_KEY", "EMAILJS_ACCESS_TOKEN"]);

    const missingVars: string[] = [];
    if (!serviceId) {
      missingVars.push("EMAILJS_SERVICE_ID (or NEXT_PUBLIC_EMAILJS_SERVICE_ID)");
    }
    if (!templateId) {
      missingVars.push("EMAILJS_TEMPLATE_ID (or NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)");
    }
    if (!publicKey) {
      missingVars.push("EMAILJS_PUBLIC_KEY (or NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)");
    }
    if (!privateKey) {
      missingVars.push("EMAILJS_PRIVATE_KEY (or EMAILJS_ACCESS_TOKEN)");
    }

    if (missingVars.length > 0) {
      return NextResponse.json(
        {
          message: "Email service is not fully configured.",
          missing: missingVars,
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
          email: body.email,
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
