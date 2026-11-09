import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nur Argata — Designer & Developer" },
      {
        name: "description",
        content: "Nur Argata crafts thoughtful digital experiences. Explore selected projects.",
      },
      { property: "og:title", content: "Nur Argata — Designer & Developer" },
      {
        property: "og:description",
        content: "Nur Argata crafts thoughtful digital experiences. Explore selected projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="hero-orb pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
      />

      <section className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="rise-in mb-8 inline-flex items-center gap-3 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Portfolio
        </p>

        <h1
          className="rise-in font-display text-7xl leading-[0.9] tracking-tight text-foreground sm:text-8xl md:text-[9rem]"
          style={{ animationDelay: "120ms" }}
        >
          Nur <em className="text-gradient-primary">Argata</em>
        </h1>

        <p
          className="rise-in mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          style={{ animationDelay: "240ms" }}
        >
          Designer &amp; developer crafting thoughtful, human-centered digital experiences.
        </p>

        <div className="rise-in mt-12" style={{ animationDelay: "360ms" }}>
          <Button variant="hero" size="xl" asChild>
            <a href="#projects">
              View My Projects
              <ArrowRight />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
