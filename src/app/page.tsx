import Image from "next/image";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { HomeTabs } from "@/components/home-tabs";

// All images: Unsplash (free for commercial use, no attribution required)
const HERO_IMG = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80";
const ABOUT_IMG = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80";

const services = [
  {
    title: "Residential",
    text: "Single-family homes, condos, plexes — we know every neighbourhood in Montreal and help you find the right fit.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80",
  },
  {
    title: "Commercial",
    text: "Office, retail, industrial — expert guidance for businesses and property owners navigating Montreal's commercial market.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
  },
  {
    title: "Leasing",
    text: "Office, retail, and mixed-use leasing support. We help businesses and landlords secure the right terms with confidence.",
    img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&q=80",
  },
];

const projects = [
  {
    label: "Residential",
    title: "Plateau-Mont-Royal",
    sub: "4-plex · Sold over asking",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
  },
  {
    label: "Commercial",
    title: "Mile-Ex Office Space",
    sub: "Commercial lease · 3,400 sq ft",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    label: "Leasing",
    title: "Downtown Retail Space",
    sub: "Lease advisory · Multi-year agreement",
    img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80",
  },
];

export default function Home() {
  return (
    <div style={{ background: "#0f0f0f" }}>

      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={HERO_IMG}
            alt="Luxury Montreal Real Estate"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(15,15,15,0.88) 0%, rgba(15,15,15,0.65) 60%, rgba(15,15,15,0.82) 100%)" }}
          />
          {/* Gold accent line bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #b8975a, transparent)" }}
          />
        </div>

        <Container>
          <div className="relative z-10 pt-32 pb-24 grid gap-16 md:grid-cols-2 md:items-center">
            {/* Left: headline */}
            <div className="space-y-7">
              {/* Eyebrow */}
              <div
                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#b8975a", letterSpacing: "0.22em" }}
              >
                <span
                  className="inline-block h-px w-8"
                  style={{ background: "#b8975a" }}
                />
                Courtier Immobilier · Montréal
              </div>

              <h1
                className="text-5xl font-semibold tracking-tight leading-tight md:text-6xl"
                style={{ color: "#f0ede8", lineHeight: "1.08" }}
              >
                Residential &amp; Commercial
                <br />
                <span style={{ color: "#b8975a" }}>Real Estate Broker</span>
              </h1>

              <p
                className="text-base leading-8 max-w-md"
                style={{ color: "rgba(240,237,232,0.65)" }}
              >
                Whether you&apos;re buying your first home, selling a property, or leasing
                your next space — Chabitai Realties brings local expertise and
                personalized service to every transaction in Greater Montréal.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <ButtonLink href="/?tab=buy">Start your Search</ButtonLink>
                <ButtonLink href="/contact" variant="outline">
                  Book a Consultation
                </ButtonLink>
              </div>

              {/* Trust badges */}
              <div
                className="flex flex-wrap gap-6 pt-4 text-xs font-medium uppercase tracking-widest border-t"
                style={{
                  color: "rgba(240,237,232,0.35)",
                  borderColor: "rgba(184,151,90,0.15)",
                  paddingTop: "1.25rem",
                  letterSpacing: "0.12em",
                }}
              >
                <span>Licensed Broker · Québec</span>
                <span>·</span>
                <span>Residential &amp; Commercial</span>
                <span>·</span>
                <span>Bilingual Service</span>
              </div>
            </div>

            {/* Right: Buy/Sell/Leasing tabs */}
            <div>
              <HomeTabs />
            </div>
          </div>
        </Container>
      </section>

      {/* ── SERVICES ── */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "rgba(184,151,90,0.15)" }}
      >
        <Container>
          <div className="mb-14">
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#b8975a", letterSpacing: "0.2em" }}
            >
              What We Do
            </div>
            <h2
              className="text-3xl font-semibold tracking-tight"
              style={{ color: "#f0ede8" }}
            >
              Full-Service Real Estate Brokerage
            </h2>
          </div>

          <div className="grid gap-px md:grid-cols-3" style={{ background: "rgba(184,151,90,0.15)" }}>
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-8 transition-colors hover:bg-[#1c1c1c]"
                style={{ background: "#161616" }}
              >
                <div className="mb-6 overflow-hidden" style={{ height: 200 }}>
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#b8975a", letterSpacing: "0.18em" }}
                >
                  {s.title}
                </div>
                <p className="text-sm leading-7" style={{ color: "rgba(240,237,232,0.6)" }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section
        className="border-t border-b"
        style={{ borderColor: "rgba(184,151,90,0.15)" }}
      >
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative" style={{ minHeight: 480 }}>
            <Image
              src={ABOUT_IMG}
              alt="Montreal real estate broker"
              fill
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(15,15,15,0.3)" }}
            />
          </div>

          {/* Text */}
          <div
            className="flex flex-col justify-center p-12 md:p-16"
            style={{ background: "#141414" }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#b8975a", letterSpacing: "0.2em" }}
            >
              About Us
            </div>
            <h2
              className="text-3xl font-semibold tracking-tight mb-5 leading-snug"
              style={{ color: "#f0ede8" }}
            >
              Your Trusted Broker
              <br />
              in Greater Montréal
            </h2>
            <p className="text-sm leading-8 mb-6" style={{ color: "rgba(240,237,232,0.6)" }}>
              Chabitai Realties is a Montreal-based real estate brokerage specializing
              in both residential and commercial transactions. We combine market expertise,
              honest advice, and personalized attention to help clients buy, sell, and
              lease with confidence — in French and English.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                ["Residential Sales", "Homes, condos & plexes"],
                ["Commercial", "Office, retail & industrial"],
                ["Leasing", "Office, retail & mixed-use"],
                ["Bilingual", "Service in French & English"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="p-4"
                  style={{ border: "1px solid rgba(184,151,90,0.2)" }}
                >
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#b8975a" }}
                  >
                    {title}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(240,237,232,0.45)" }}>
                    {desc}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <ButtonLink href="/about">Learn More About Us</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-24">
        <Container>
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#b8975a", letterSpacing: "0.2em" }}
              >
                Recent Transactions
              </div>
              <h2
                className="text-3xl font-semibold tracking-tight"
                style={{ color: "#f0ede8" }}
              >
                Featured Properties
              </h2>
            </div>
            <div className="hidden md:block">
              <ButtonLink href="/contact" variant="outline">
                Start a Conversation
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-px md:grid-cols-3" style={{ background: "rgba(184,151,90,0.15)" }}>
            {projects.map((p) => (
              <div
                key={p.title}
                className="group overflow-hidden"
                style={{ background: "#0f0f0f" }}
              >
                <div className="relative overflow-hidden" style={{ height: 240 }}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(15,15,15,0.8) 0%, transparent 50%)" }}
                  />
                  <div
                    className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest px-3 py-1"
                    style={{
                      background: "#b8975a",
                      color: "#0f0f0f",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {p.label}
                  </div>
                </div>
                <div className="p-7">
                  <div
                    className="text-lg font-semibold mb-1"
                    style={{ color: "#f0ede8" }}
                  >
                    {p.title}
                  </div>
                  <div
                    className="text-xs mb-5"
                    style={{ color: "rgba(240,237,232,0.45)" }}
                  >
                    {p.sub}
                  </div>
                  <a
                    href="#"
                    className="text-xs font-semibold uppercase tracking-widest border-b pb-0.5 transition-colors hover:text-[#b8975a]"
                    style={{
                      color: "rgba(240,237,232,0.5)",
                      borderColor: "rgba(240,237,232,0.2)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <ButtonLink href="/contact" variant="outline">
              Start a Conversation
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* ── CONTACT CTA ── */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "rgba(184,151,90,0.15)", background: "#141414" }}
      >
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left */}
            <div className="space-y-5">
              <div
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#b8975a", letterSpacing: "0.2em" }}
              >
                Get in Touch
              </div>
              <h2
                className="text-3xl font-semibold tracking-tight leading-snug"
                style={{ color: "#f0ede8" }}
              >
                Ready to Make Your
                <br />
                Next Move?
              </h2>
              <p className="text-sm leading-8" style={{ color: "rgba(240,237,232,0.6)" }}>
                Whether you&apos;re buying, selling, or exploring leasing — we&apos;re here
                to help. Reach out for a free, no-pressure consultation.
              </p>
              <div
                className="flex flex-col gap-2 pt-4 text-sm border-t"
                style={{ borderColor: "rgba(184,151,90,0.15)" }}
              >
                {[
                  ["Email", "info@chabitairealties.ca"],
                  ["Phone", "+1 (514) 618-5629"],
                  ["Location", "Montréal, Québec"],
                ].map(([label, val]) => (
                  <div key={label} className="flex gap-3">
                    <span
                      className="text-xs font-semibold uppercase w-20 pt-0.5"
                      style={{ color: "#b8975a", letterSpacing: "0.1em" }}
                    >
                      {label}
                    </span>
                    <span style={{ color: "rgba(240,237,232,0.6)" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div
              className="p-8"
              style={{ border: "1px solid rgba(184,151,90,0.2)", background: "#161616" }}
            >
              <div className="grid gap-4">
                <input
                  className="h-11 w-full px-4 text-sm outline-none transition-colors"
                  placeholder="Name"
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(184,151,90,0.2)",
                    color: "#f0ede8",
                  }}
                />
                <input
                  className="h-11 w-full px-4 text-sm outline-none"
                  placeholder="Email Address"
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(184,151,90,0.2)",
                    color: "#f0ede8",
                  }}
                />
                <select
                  className="h-11 w-full px-4 text-sm outline-none"
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(184,151,90,0.2)",
                    color: "rgba(240,237,232,0.6)",
                    appearance: "none",
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>I&apos;m interested in…</option>
                  <option>Buying a property</option>
                  <option>Selling a property</option>
                  <option>Leasing</option>
                  <option>Commercial real estate</option>
                  <option>Other</option>
                </select>
                <textarea
                  className="w-full px-4 py-3 text-sm outline-none resize-none"
                  placeholder="Message"
                  rows={5}
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(184,151,90,0.2)",
                    color: "#f0ede8",
                  }}
                />
                <button
                  type="button"
                  className="h-11 w-full text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-80"
                  style={{
                    background: "#b8975a",
                    color: "#0f0f0f",
                    letterSpacing: "0.15em",
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
