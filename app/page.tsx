import { Suspense } from "react";
import { MotionEffects } from "@/components/interactive/motion-effects";
import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { WorkSection } from "@/components/portfolio/work-section";
import {
  FieldNotes,
  FieldNotesSkeleton,
} from "@/components/portfolio/field-notes";
import { SecuritySection } from "@/components/portfolio/security-section";
import { PaperShelf } from "@/components/portfolio/paper-shelf";
import { AuthorsNote } from "@/components/portfolio/authors-note";
import { ContactSection } from "@/components/portfolio/contact-section";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <MotionEffects />
      <Navbar />
      <main id="top" className="relative">
        <HeroSection />
        <WorkSection />
        <Suspense fallback={<FieldNotesSkeleton />}>
          <FieldNotes />
        </Suspense>
        <SecuritySection />
        <PaperShelf />
        <AuthorsNote />
        <ContactSection />
      </main>
    </>
  );
}
