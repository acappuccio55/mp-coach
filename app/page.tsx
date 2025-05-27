import { Header } from "../src/components/header"
import { HeroSection } from "../src/components/hero-section"
import { ProcessSteps } from "../src/components/steps"
import { StatsSection } from "../src/components/stats"
import { ReviewsSection } from "../src/components/reviews"
import { CTASection } from "../src/components/cta-section"
import { Footer } from "../src/components/footer"

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
