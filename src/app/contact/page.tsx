import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div style={{ background: "#0f0f0f" }}>
      <section className="pt-40 pb-24">
        <Container>
          <div className="grid gap-14 md:grid-cols-2">
            {/* Left */}
            <div className="space-y-6">
              <div
                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#b8975a", letterSpacing: "0.2em" }}
              >
                <span className="inline-block h-px w-8" style={{ background: "#b8975a" }} />
                Contact Us
              </div>
              <h1
                className="text-4xl font-semibold tracking-tight md:text-5xl leading-tight"
                style={{ color: "#f0ede8" }}
              >
                Ready to Make
                <br />Your Next Move?
              </h1>
              <p
                className="text-base leading-8"
                style={{ color: "rgba(240,237,232,0.65)" }}
              >
                Whether you&apos;re buying, selling, or leasing — reach out for a
                free, no-pressure consultation. We&apos;re here to help you navigate
                Montreal&apos;s real estate market with confidence.
              </p>

              <div
                className="grid gap-5 p-7 border"
                style={{
                  borderColor: "rgba(184,151,90,0.2)",
                  background: "#161616",
                }}
              >
                {[
                  ["Email", "info@chabitairealties.ca"],
                  ["Phone", "+1 (514) 618-5629"],
                  ["Location", "Montréal, Québec"],
                  ["Languages", "English · Français"],
                  ["License", "Licensed Broker · Québec"],
                ].map(([label, val]) => (
                  <div key={label}>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: "#b8975a", letterSpacing: "0.15em" }}
                    >
                      {label}
                    </div>
                    <div className="text-sm" style={{ color: "#f0ede8" }}>
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <ContactForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
