import React from 'react';
import PricingCard from './cards/PricingCard';

const PricingSection: React.FC = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for personal projects",
      features: [
        "Limited to 5 structures",
        "Public sharing only",
        "Basic project templates",
        "Community support"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "For developers who need more",
      features: [
        "Unlimited structures",
        "Private & public sharing",
        "All project templates",
        "Export to JSON/YAML",
        "Priority support",
        "Advanced customization"
      ],
      cta: "Go Pro",
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Simple Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingCard key={`pricing${index}`} {...tier}/>
          ))}
        </div>

        <div className="text-center mt-10 text-gray-500">
          All plans include a 14-day money back guarantee
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
