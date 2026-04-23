"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not configured");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          from_email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          reply_to: formData.email,
        },
        { publicKey }
      );

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="p-8 border"
      style={{ borderColor: "rgba(184,151,90,0.2)", background: "#161616" }}
    >
      <div
        className="text-xs font-semibold uppercase tracking-widest mb-6"
        style={{ color: "#b8975a", letterSpacing: "0.2em" }}
      >
        Send a Message
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="h-11 w-full px-4 text-sm outline-none"
          placeholder="First Name"
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(184,151,90,0.2)",
            color: "#f0ede8",
          }}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="h-11 w-full px-4 text-sm outline-none"
          placeholder="Last Name"
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(184,151,90,0.2)",
            color: "#f0ede8",
          }}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="md:col-span-2 h-11 w-full px-4 text-sm outline-none"
          placeholder="Email Address"
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(184,151,90,0.2)",
            color: "#f0ede8",
          }}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="md:col-span-2 h-11 w-full px-4 text-sm outline-none"
          placeholder="Phone Number"
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(184,151,90,0.2)",
            color: "#f0ede8",
          }}
        />
        <select
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          required
          className="md:col-span-2 h-11 w-full px-4 text-sm outline-none"
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(184,151,90,0.2)",
            color: "rgba(240,237,232,0.55)",
            appearance: "none",
          }}
        >
          <option value="" disabled>I&apos;m interested in…</option>
          <option value="Buying a property">Buying a property</option>
          <option value="Selling a property">Selling a property</option>
          <option value="Leasing services">Leasing services</option>
          <option value="Commercial real estate">Commercial real estate</option>
          <option value="Property valuation">Property valuation</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="md:col-span-2 w-full px-4 py-3 text-sm outline-none resize-none"
          placeholder="Message"
          rows={5}
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(184,151,90,0.2)",
            color: "#f0ede8",
          }}
        />
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="h-11 w-full text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-80 disabled:opacity-60"
            style={{
              background: "#b8975a",
              color: "#0f0f0f",
              letterSpacing: "0.15em",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status === "success" && (
          <div className="md:col-span-2 p-3 text-sm text-green-400 bg-green-950/20 border border-green-500/30 rounded">
            ✓ Message sent! We&apos;ll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className="md:col-span-2 p-3 text-sm text-red-400 bg-red-950/20 border border-red-500/30 rounded">
            ✗ Error sending message. Please try again or email us directly.
          </div>
        )}
      </form>
    </div>
  );
}
