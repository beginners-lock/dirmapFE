import { Link } from "react-router-dom"
import { FolderTree, Lock, Globe, ArrowRight } from "lucide-react"
import Footer from "./Footer"
import CtaSection from "./CtaSection"
import PricingSection from "./PricingSection"
import { TestimonialSection } from "./TestimonialSection"

export default function LandingPage(){
    return(
        <div className="pt-16 w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <TestimonialSection/>
            <PricingSection/>
            <CtaSection/>
            <Footer/>
        </div>
    )
}