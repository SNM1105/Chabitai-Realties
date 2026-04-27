import Link from "next/link";

import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(184,151,90,0.2)", background: "#111111" }}
    >
      <Container>
        <div className="flex flex-col gap-4 py-10 text-sm md:flex-row md:items-center md:justify-between">
          <div className="text-white/65">
            © {new Date().getFullYear()} Chabitai Realties · Montreal, Quebec
          </div>
          <div className="flex items-center gap-5">
            <Link href="https://www.instagram.com/chabitai_realties?igsh=MWs4MGdudW1wNHBtOA==" className="text-white/60">
              Instagram
            </Link>
            <Link href="https://www.linkedin.com/company/chabitairealties/" className="text-white/60">
              LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
