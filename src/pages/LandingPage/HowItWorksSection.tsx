import { FolderTree, PencilRuler, Share2 } from 'lucide-react';
import HowItWorksCard from './cards/HowItWorksCard';

export default function HowItWorksSection(){
  const steps = [
    {
      Icon: FolderTree,
      title: "Create Your Structure",
      description: "Design your folder hierarchy using our visual drag-and-drop builder",
      color: "blue"
    },
    {
      Icon: PencilRuler,
      title: "Add Context",
      description: "Include notes or code hints to any folder or file for better understanding",
      color: "purple"
    },
    {
      Icon: Share2,
      title: "Share Instantly",
      description: "Share via link — control visibility with public/private settings",
      color: "indigo"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to better project documentation and collaboration
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <HowItWorksCard index={index} {...step } length={steps.length}/>
          ))}
        </div>
      </div>
    </section>
  );
}