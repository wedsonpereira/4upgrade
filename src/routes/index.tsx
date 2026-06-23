import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { JourneyTimeline } from "@/components/site/JourneyTimeline";
import { Footer } from "@/components/site/Footer";
import { Psychometric } from "@/components/site/Psychometric";
import { Contact } from "@/components/site/Contact";
import {
  WhyExists, WhatIs, HowWeSupport, Readiness, Workshops,
  ForParents, Journeys, Institutions, FinalCTA,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4UPGRADE — From Career Confusion to Future Readiness" },
      { name: "description", content: "4UPGRADE helps students make better education decisions, build real-world readiness, and prepare for future opportunities." },
      { property: "og:title", content: "4UPGRADE — Student Readiness & Career Transition Platform" },
      { property: "og:description", content: "From education to readiness to opportunity. A modern platform guiding students through every stage of their journey." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-dvh bg-background">
      <Nav />
      <Hero />
      <WhyExists />
      <WhatIs />
      <JourneyTimeline />
      <HowWeSupport />
      <Readiness />
      <Workshops />
      <ForParents />
      <Journeys />
      <Psychometric />
      <Institutions />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
