import { Check } from "lucide-react"
import Button from "../../../components/global/Button"

interface Props {
    name: string,
    price: string,
    period: string,
    description: string,
    features: string[],
    cta: string,
    highlight: boolean
}
//key={index}
export default function PricingCard({ name, price, period, description, features, cta, highlight }: Props){
    return(
        <div 
            className={`${highlight ? 'border-brand-blue shadow-lg' : 'border-gray-200'} border-2 rounded-xl overflow-hidden`}
        >
            {
                highlight && 
                <div className="bg-brand-blue text-white text-center py-1 text-sm font-medium">
                    Most Popular
                </div>
            }

            <div className="p-8">
                <h3 className="font-bold text-2xl mb-2 text-black">{name}</h3>
                <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-black">{price}</span>
                    <span className="text-gray-500 ml-1">/{period}</span>
                </div>
                <p className="text-gray-600 mb-6">{description}</p>
                
                <ul className="space-y-3 mb-8">
                    {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-black">{feature}</span>
                    </li>
                    ))}
                </ul>
                
                <Button variant="custom" className={`w-full ${highlight ? 'bg-brand-blue hover:bg-brand-purple':'bg-black hover:bg-gray-700'}`}>
                    {cta}
                </Button>
            </div>
        </div>
    )
}