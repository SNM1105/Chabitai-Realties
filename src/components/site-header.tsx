import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";

const navItems: Array<{ href: string; label: string }> = [
  { href: "/about", label: "About" },
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/leasing", label: "Leasing" },
];

export function SiteHeader() {
  return (
    <header
      className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/70"
      style={{ borderColor: "rgba(184,151,90,0.2)" }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/cr-logo.png"
              alt="Chabitai Realties"
              width={64}
              height={64}
              className="h-14 w-14 shrink-0 md:h-16 md:w-16"
              priority
            />
            <div className="hidden sm:block">
              <div
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--gold)" }}
              >
                Chabitai Realties
              </div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-white/45">
                Montreal Real Estate
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-semibold uppercase tracking-[0.14em] text-white/80 hover:text-(--gold)"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex items-center gap-4 text-xs md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-semibold uppercase tracking-[0.12em] text-white/75 hover:text-(--gold)"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
