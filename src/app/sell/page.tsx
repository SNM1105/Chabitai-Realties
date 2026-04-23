import Image from "next/image";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

export const metadata = {
  title: "Sell",
};

export default function SellPage() {
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
                Maximize Your Value
              </div>
              <h1
                className="text-4xl font-semibold tracking-tight leading-tight md:text-5xl"
                style={{ color: "#f0ede8" }}
              >
                Sell with<br />
                <span style={{ color: "#b8975a" }}>Confidence</span>
              </h1>
              <p className="text-base leading-8" style={{ color: "rgba(240,237,232,0.65)" }}>
                We position your property with professional marketing, pricing analysis, and strong negotiation to maximize value in Montreal&apos;s competitive market.
              </p>
              <ButtonLink href="/contact">List Your Property</ButtonLink>
            </div>

            <div className="relative overflow-hidden" style={{ height: 500 }}>
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
                alt="Sell your property"
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
                How We Maximize Your Sale
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Comparative Market Pricing",
                  text: "We analyze recent sales, current listings, and market trends to price your property competitively. The right price attracts serious buyers and creates urgency.",
                },
                {
                  title: "Professional Listing Presentation",
                  text: "High-quality photos, compelling copy, strategic positioning. Your property gets seen by the right buyers across all major platforms.",
                },
                {
                  title: "Buyer Screening & Offer Management",
                  text: "We handle inquiries, showings, and negotiations. You get qualified offers presented clearly so you can make informed decisions.",
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
              Let&apos;s Sell Your Property Right
            </h2>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: "rgba(240,237,232,0.65)" }}>
              Whether you&apos;re selling your first home or a multi-unit property, we bring market expertise and a proven process to get you the best result.
            </p>
            <ButtonLink href="/contact">Book a Listing Consultation</ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
