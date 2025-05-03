import { FolderTree, FileArchive, Lock, FileText, FileJson,Link } from 'lucide-react';
import FeatureCard from './cards/FeatureCard';
  
export default function FeaturesSection(){
    const features = [
      {
        Icon: FolderTree,
        title: "Drag-and-Drop Builder",
        description: "Easily create and organize your project structure with intuitive controls"
      },
      {
        Icon: FileArchive,
        title: "Folder & File Templates",
        description: "Save time with pre-built templates for common project structures"
      },
      {
        Icon: Lock,
        title: "Private or Public Sharing",
        description: "Control who can view your project structure with flexible privacy settings"
      },
      {
        Icon: FileText,
        title: "Inline Notes & Descriptions",
        description: "Add context and explanations to any folder or file in your structure"
      },
      {
        Icon: FileJson,
        title: "Export to JSON/YAML",
        description: "Export your structure in different formats for use in other tools"
      },
      {
        Icon: Link,
        title: "Sharable URLs",
        description: "Generate unique links to share your project structure with anyone"
      }
    ];
  
    return (
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to document and share your project structure effectively
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard key={`feature${index}`} {...feature} />
            ))}
          </div>
        </div>
      </section>
    );
};