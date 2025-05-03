import ProblemSolutionCard from "./cards/ProblemSolutionCard"

export default function ProblemSolutionSection(){
    const cards = [
        {
            sign: '✗',
            color: 'text-red-500',
            title: 'The Problem',
            description: 'Tired of manually explaining your project structure or onboarding devs with long READMEs?',
            list: [
                'Complex folder structures are hard to document',
                'Team members need time to understand project organization',
                'READMEs become outdated as projects evolve'
            ]
        },
        {
            sign: '✓',
            color: 'text-green-500',
            title: 'Our Solution',
            description: 'Our tool lets you design folder hierarchies visually and share them instantly.',
            list: [
                'Visual representation that\'s easy to understand',
                'Add context with notes and descriptions',
                'Share with a simple link - public or private'
            ]

        }
    ]
    
    return (
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">Problem & Solution</h2>
            
            <div className="flex flex-col md:flex-row gap-8 text-left">
              <ProblemSolutionCard {...cards[0]}/>
              <ProblemSolutionCard {...cards[1]}/>
            </div>
          </div>
        </div>
      </section>
    );
}