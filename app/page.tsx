import { Hero } from "@/components/fusion/hero";
import { Logos } from "@/components/fusion/logos";
import { Features } from "@/components/fusion/features";
import { StickyShowcase } from "@/components/fusion/sticky-showcase";
import { Testimonials } from "@/components/fusion/testimonials";
import { FAQ } from "@/components/fusion/faq";
import { CTA } from "@/components/fusion/cta";
import { Footer } from "@/components/fusion/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#05060A] text-white">  
      <div className="fusion-bg" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-[-160px] top-[140px] h-[520px] w-[520px] rounded-full bg-orange-500/15 blur-[130px]" />
        <div className="absolute left-[-160px] top-[520px] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

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
