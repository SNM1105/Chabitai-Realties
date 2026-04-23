import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "solid" | "outline";

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  const className =
    variant === "solid"
      ? "inline-flex h-11 items-center justify-center rounded-none border px-6 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:opacity-90"
      : "inline-flex h-11 items-center justify-center rounded-none border px-6 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-white/5";

  const style =
    variant === "solid"
      ? { background: "var(--gold)", color: "#0f0f0f", borderColor: "var(--gold)" }
      : { background: "transparent", color: "var(--foreground)", borderColor: "rgba(184,151,90,0.35)" };

  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  );
}
