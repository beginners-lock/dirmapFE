import { Link } from "react-router-dom"
import { FolderTree, Lock, Globe, ArrowRight } from "lucide-react"
import Footer from "./Footer"
import CtaSection from "./CtaSection"
import PricingSection from "./PricingSection"
import { TestimonialSection } from "./TestimonialSection"
import UseCasesSection from "./UseCasesSection"
import DemoSection from "./DemoSection"
import FeaturesSection from "./FeaturesSections"
import HowItWorksSection from "./HowItWorksSection"
import ProblemSolutionSection from "./ProblemSolutionSection"

export default function LandingPage(){
    return(
        <div className="pt-16 w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <ProblemSolutionSection/>
            <HowItWorksSection/>
            <FeaturesSection/>
            <DemoSection/>
            <UseCasesSection/>
            <TestimonialSection/>
            <PricingSection/>
            <CtaSection/>
            <Footer/>
        </div>
    )
}