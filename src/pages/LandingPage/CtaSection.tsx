import Button from "../../components/global/Button"
import { ArrowRight } from "lucide-react"

export default function CtaSection(){
    return(
        <section className="py-20 bg-linear-to-r from-brand-blue to-brand-purple">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Improve Your Project Documentation?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Start building your first structure in minutes and see how it transforms your workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" className="inline-flex"
            >
              <span>Start Building Your First Structure</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-white/60">
            No credit card required for the free plan
          </p>
        </div>
      </div>
    </section>
    )
}