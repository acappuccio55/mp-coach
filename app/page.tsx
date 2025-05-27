import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProcessSteps } from "@/components/steps"
import { StatsSection } from "@/components/stats"
import { ReviewsSection } from "@/components/reviews"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function FitnessCoachLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProcessSteps />
        <StatsSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
