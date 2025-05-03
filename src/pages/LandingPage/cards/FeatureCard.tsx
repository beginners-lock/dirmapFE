import type { LucideIcon } from 'lucide-react';

interface Props {
    Icon: LucideIcon
    title: string,
    description: string
}

export default function FeatureCard({ Icon, title, description }: Props){
    return(
        <div className="bg-gray-50 rounded-lg p-6 transition-all hover:shadow-md">
            <div className="w-12 h-12 rounded-lg bg-linear-to-r from-brand-blue to-brand-purple flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}