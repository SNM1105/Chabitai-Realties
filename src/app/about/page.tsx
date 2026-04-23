import Image from "next/image";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
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
                About Us
              </div>
              <h1
                className="text-4xl font-semibold tracking-tight leading-tight md:text-5xl"
                style={{ color: "#f0ede8" }}
              >
                Montréal&apos;s Trusted
                <br />
                <span style={{ color: "#b8975a" }}>Real Estate Broker</span>
              </h1>
              <p className="text-base leading-8" style={{ color: "rgba(240,237,232,0.65)" }}>
                Chabitai Realties is a full-service brokerage rooted in Montréal,
                specializing in residential and commercial real estate. We combine
                deep local knowledge with honest, personalized service — in both
                French and English.
              </p>
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
            </div>

            <div className="relative overflow-hidden" style={{ height: 500 }}>
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
                alt="About Chabitai Realties"
                fill
                className="object-cover object-center"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(15,15,15,0.2)" }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section
        className="py-20 border-t"
        style={{ borderColor: "rgba(184,151,90,0.15)" }}
      >
        <Container>
          <div className="grid gap-px md:grid-cols-3" style={{ background: "rgba(184,151,90,0.15)" }}>
            {[
              {
                title: "Who We Are",
                body: "A Montreal-based brokerage built on trust, transparency, and local expertise. We work with buyers, sellers, landlords, tenants, and businesses across the island and surrounding regions.",
              },
              {
                title: "What We Do",
                body: "From single-family homes to commercial leases and revenue properties — we handle every type of real estate transaction with the same level of care and professionalism.",
              },
              {
                title: "How We Work",
                body: "Every client gets personalized attention, honest advice, and a clear strategy. We don't rush transactions — we make sure you make the right move at the right time.",
              },
            ].map((v) => (
              <div key={v.title} className="p-8" style={{ background: "#161616" }}>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#b8975a", letterSpacing: "0.18em" }}
                >
                  {v.title}
                </div>
                <p className="text-sm leading-7" style={{ color: "rgba(240,237,232,0.6)" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience strip */}
      <section
        className="border-t"
        style={{ borderColor: "rgba(184,151,90,0.15)" }}
      >
        <div className="grid md:grid-cols-2">
          <div className="relative" style={{ minHeight: 420 }}>
            <Image
              src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=900&q=80"
              alt="Montreal properties"
              fill
              className="object-cover object-center"
            />
          </div>
          <div
            className="flex flex-col justify-center p-12 md:p-16"
            style={{ background: "#141414" }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#b8975a", letterSpacing: "0.2em" }}
            >
              Our Expertise
            </div>
            <h2
              className="text-3xl font-semibold tracking-tight mb-5"
              style={{ color: "#f0ede8" }}
            >
              Residential &amp; Commercial,
              <br />Under One Roof
            </h2>
            <p className="text-sm leading-8 mb-6" style={{ color: "rgba(240,237,232,0.6)" }}>
              Most brokers specialize in one or the other. At Chabitai Realties, we
              cover both residential and commercial real estate — giving clients a
              single trusted partner whether they&apos;re buying a condo or leasing
              an office space.
            </p>
            <ButtonLink href="/contact" variant="outline">
              Get in Touch
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
