import Header from "../layout/header/Header"
import { HeroSection } from "../components/banner/HeroSection"
import { Integrations } from "../components/services/Service"
import { Features } from "../components/features/Feature"
import { StreamerTestimonials } from "../components/streamer-testimonial/Testimonial"
import { Pricing } from "../components/pricing/Pricing"
import { HowToGetStarted } from "../components/how-to-get-started/HowToGetStarted"
import { CallToAction } from "../components/cta/CallToAction"
import { Footer } from "../layout/footer/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#040021] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <Header />
      <HeroSection />
      <Integrations />
      <Features />
      <StreamerTestimonials />
      <Pricing />
      <HowToGetStarted />
      <CallToAction />
      <Footer />
    </div>
  )
}
