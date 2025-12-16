import { CTA } from "@/components/fusion/cta";
import { FAQ } from "@/components/fusion/faq";
import { Features } from "@/components/fusion/features";
import { Footer } from "@/components/fusion/footer";
import { Hero } from "@/components/fusion/hero";
import { Logos } from "@/components/fusion/logos";
import { StickyShowcase } from "@/components/fusion/sticky-showcase";
import { Testimonials } from "@/components/fusion/testimonials";

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <div className="fusion-bg" />

      <div className="mx-auto w-full max-w-6xl px-5">
        <Hero />
        <Logos />
        <Features />
        <StickyShowcase />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
