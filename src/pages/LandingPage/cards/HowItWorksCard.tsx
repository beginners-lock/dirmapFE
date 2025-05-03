import type { LucideIcon } from "lucide-react"

interface Props {
    index: number
    Icon: LucideIcon
    title: string
    description: string
    color: string
    length: number
}

export default function HowItWorksCard({ index, Icon, title, description, color, length }: Props){
    return(
        <div className="flex-1 relative">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col items-center text-center relative z-10 overflow-hidden">
                <span className="absolute bottom-0 left-4 text-[120px] font-extrabold text-gray-200 z-0">
                    {index + 1}
                </span>
                
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-${color}-100 z-10`}>
                    <Icon className={`h-8 w-8 text-brand-${color === "blue" ? "blue" : color === "purple" ? "purple" : "blue"}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-black z-10">{title}</h3>
                <p className="text-gray-600 z-10">{description}</p>
            </div>
            
            {/* Connecting arrow for desktop */}
            {index < length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            )}
        </div>
    )
}