import DemoSection from './components/DemoSection'
import FAQSection from './components/FAQSection'
import FeaturesSection from './components/FeaturesSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorksSection from './components/HowItWorksSection'
import PricingSection from './components/PricingSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="page-noise pointer-events-none fixed inset-0" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
