import Image from "next/image";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

export const metadata = {
  title: "Leasing",
};

export default function LeasingPage() {
  return (
    <div style={{ background: "#0f0f0f" }}>
      {/* Hero */}
      <section className="pt-40 pb-20">
        <Container>
          <div className="grid gap-14 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div
                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#b8975a", letterSpacing: "0.2em" }}
              >
                <span className="inline-block h-px w-8" style={{ background: "#b8975a" }} />
                Lease with Confidence
              </div>
              <h1
                className="text-4xl font-semibold tracking-tight leading-tight md:text-5xl"
                style={{ color: "#f0ede8" }}
              >
                Commercial
                <br />
                <span style={{ color: "#b8975a" }}>Leasing Services</span>
              </h1>
              <p className="text-base leading-8" style={{ color: "rgba(240,237,232,0.65)" }}>
                Whether you are leasing your first storefront or negotiating space for a growing
                business, we help you secure the right location and terms for long-term success.
              </p>
              <ButtonLink href="/contact">Discuss Your Leasing Needs</ButtonLink>
            </div>

            <div className="relative overflow-hidden" style={{ height: 500 }}>
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                alt="Commercial leasing"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-24">
        <Container>
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-semibold" style={{ color: "#f0ede8" }}>
                Leasing Services
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Tenant Representation",
                  text: "We help business owners find spaces that match their operations, customer flow, and growth plans while protecting their interests throughout the lease process.",
                },
                {
                  title: "Landlord Representation",
                  text: "From marketing vacant units to qualifying tenants, we support landlords with positioning, showings, and lease structuring to reduce vacancy risk.",
                },
                {
                  title: "Lease Negotiation & Renewals",
                  text: "We negotiate rent, term, options, and key clauses so your lease supports your goals today and gives flexibility for the future.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "#b8975a" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(240,237,232,0.65)" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <div
            className="text-center p-12"
            style={{
              background: "rgba(20,20,20,0.88)",
              border: "1px solid rgba(184,151,90,0.25)",
            }}
          >
            <h2 className="text-3xl font-semibold mb-6" style={{ color: "#f0ede8" }}>
              Ready to Secure the Right Space?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: "rgba(240,237,232,0.65)" }}>
              Let&apos;s review your timeline, budget, and location priorities. We&apos;ll guide you
              through the leasing process and negotiate terms that work for you.
            </p>
            <ButtonLink href="/contact">Book a Leasing Consultation</ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
