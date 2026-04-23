import Image from "next/image";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

export const metadata = {
  title: "Buy",
};

export default function BuyPage() {
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
                Find the Right Property
              </div>
              <h1
                className="text-4xl font-semibold tracking-tight leading-tight md:text-5xl"
                style={{ color: "#f0ede8" }}
              >
                Buy in<br />
                <span style={{ color: "#b8975a" }}>Montreal</span>
              </h1>
              <p className="text-base leading-8" style={{ color: "rgba(240,237,232,0.65)" }}>
                From first-time condos to family homes and multi-unit properties, we guide buyers through every step with local market insight and clear strategy.
              </p>
              <ButtonLink href="/contact">Start Your Search</ButtonLink>
            </div>

            <div className="relative overflow-hidden" style={{ height: 500 }}>
              <Image
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80"
                alt="Buy a property in Montreal"
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
                What We Do For Buyers
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Neighbourhood-First Search",
                  text: "We start by understanding what matters to you — walkability, schools, community vibe, and long-term value — and match you with properties and neighbourhoods that fit your lifestyle and goals.",
                },
                {
                  title: "Offer Strategy & Negotiation",
                  text: "When you find the right property, we handle the strategy. Market analysis, competitive positioning, and strong negotiation to help you win at the right price.",
                },
                {
                  title: "Financing & Closing Guidance",
                  text: "We guide you through financing, inspections, appraisals, and closing. You'll know exactly what to expect at every stage.",
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
              Ready to Find Your Next Home?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: "rgba(240,237,232,0.65)" }}>
              Let&apos;s start a conversation about your needs, timeline, and goals. We&apos;ll help you navigate Montreal&apos;s market with confidence.
            </p>
            <ButtonLink href="/contact">Get Started</ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
