import Button from '../../components/global/Button';
import { ArrowRight, Code } from 'lucide-react';
import HeroCard from './cards/HeroCard';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              Visualize & Share Folder Structures Effortlessly
            </h1>
            <p className="mt-6 text-xl text-gray-600 md:w-5/6">
              Create, customize, and share your project blueprints — public or private.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button className="inline-flex text-lg py-6 px-8 flex items-center gap-2">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="inline-flex text-lg py-6 px-8 flex items-center gap-2">
                <Code className="h-5 w-5" />
                See Demo
              </Button>
            </div>
          </div>
          
          <HeroCard/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
