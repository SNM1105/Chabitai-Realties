"use client";

import { useMemo, useState } from "react";

type TabKey = "buy" | "sell" | "leasing";

const tabs: Array<{ key: TabKey; label: string; title: string; text: string; points: string[] }> = [
  {
    key: "buy",
    label: "Buy",
    title: "Find the Right Property in Montreal",
    text: "From first-time condos to family homes and multi-unit properties, we guide buyers through every step with local market insight and clear strategy.",
    points: [
      "Neighbourhood-first property search",
      "Offer strategy and negotiation support",
      "Financing and closing guidance",
    ],
  },
  {
    key: "sell",
    label: "Sell",
    title: "Sell with Confidence and Clarity",
    text: "We position your property with professional marketing, pricing analysis, and strong negotiation to maximize value in Montreal's competitive market.",
    points: [
      "Comparative market pricing",
      "Professional listing presentation",
      "Buyer screening and offer management",
    ],
  },
  {
    key: "leasing",
    label: "Leasing",
    title: "Lease the Right Space with Confidence",
    text: "From office and retail units to mixed-use spaces, we help you secure the right lease terms, location, and long-term fit for your goals.",
    points: [
      "Commercial leasing strategy",
      "Landlord and tenant representation",
      "Lease negotiation and renewal support",
    ],
  },
];

function getTabFromQuery(): TabKey {
  if (typeof window === "undefined") {
    return "buy";
  }

  const value = new URLSearchParams(window.location.search).get("tab");
  if (value === "sell" || value === "leasing" || value === "buy") {
    return value;
  }

  return "buy";
}

export function HomeTabs({ initialTab }: { initialTab?: string }) {
  const [active, setActive] = useState<TabKey>(() => {
    if (typeof window !== "undefined") {
      return getTabFromQuery();
    }

    if (initialTab === "sell" || initialTab === "leasing" || initialTab === "buy") {
      return initialTab;
    }

    return "buy";
  });

  const current = useMemo(() => tabs.find((t) => t.key === active) ?? tabs[0], [active]);

  return (
    <div
      className="p-7"
      style={{
        background: "rgba(20,20,20,0.88)",
        border: "1px solid rgba(184,151,90,0.25)",
      }}
    >
      <div className="mb-6 grid grid-cols-3 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className="h-10 text-xs font-semibold uppercase tracking-[0.14em] transition-colors"
            style={
              active === tab.key
                ? { background: "var(--gold)", color: "#0f0f0f" }
                : {
                    background: "#1a1a1a",
                    color: "rgba(240,237,232,0.75)",
                    border: "1px solid rgba(184,151,90,0.25)",
                  }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <h3 className="text-2xl font-semibold leading-snug text-white">{current.title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/65">{current.text}</p>

      <ul className="mt-6 space-y-2 text-sm text-white/70">
        {current.points.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
