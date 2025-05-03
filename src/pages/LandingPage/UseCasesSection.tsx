import Button from "../../components/global/Button";
import UseCaseCard from "./cards/UseCaseCard";

export default function UseCasesSection () {
    const useCases = [
      {
        title: "Developers",
        description: "Quickly document your project structure for your portfolio or GitHub repos",
        bg: "bg-brand-blue"
      },
      {
        title: "Tech Leads",
        description: "Onboard new team members faster with visual project structures",
        bg: "bg-brand-purple"
      },
      {
        title: "Open Source Maintainers",
        description: "Make your projects more accessible to new contributors",
        bg: "bg-brand-violet"
      },
      {
        title: "Bootcamp Students",
        description: "Share project blueprints with peers and instructors",
        bg: "bg-brand-green"
      }
    ];
  
    return (
      <section id="use-cases" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Ideal For</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our tool helps various professionals document and share project structures
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={`usecase${index}`} {...useCase}/>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <Button>
              Start Building Today
            </Button>
          </div>
        </div>
      </section>
    );
}