import TestimonialCard from "./TesitimonialCard";

export const TestimonialSection = () => {
    const testimonials = [
      {
        quote: "This tool has completely changed how we onboard new developers to our codebase. The learning curve dropped dramatically!",
        author: "Sarah L.",
        role: "Senior Developer at TechCorp"
      },
      {
        quote: "I use StructureFlow for all my GitHub projects now. It helps contributors understand my code organization at a glance.",
        author: "Mark J.",
        role: "Open Source Maintainer"
      },
      {
        quote: "Teaching project structure to my bootcamp students became so much easier with this visual approach.",
        author: "David T.",
        role: "Coding Instructor"
      }
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how StructureFlow is helping teams collaborate more effectively
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={`testimonial${index}`}
                    {...testimonial}
                />
            ))}
          </div>
        </div>
      </section>
    );
  };