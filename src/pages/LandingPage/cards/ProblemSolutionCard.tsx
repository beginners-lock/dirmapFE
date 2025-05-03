interface Props {
    sign: string
    color: string,
    title: string,
    description: string,
    list: string[]
}

export default function ProblemSolutionCard({ sign, color, title, description, list }: Props){
    return(
        <div className="bg-white p-8 rounded-lg shadow-md flex-1 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-1 ${color}`}></div>
            <h3 className="text-xl font-bold mb-4 flex items-center text-black">
                <span className={`${color} text-2xl mr-2`}>{sign}</span> 
                {title}
            </h3>
            <p className="text-gray-700 text-lg">
                {description}
            </p>
            <ul className="mt-6 space-y-3">
                {
                    list.map((item, index)=>{
                        return(
                        <li key={`title${index}`} className="flex items-start">
                            <span className={`${color} mr-2`}>•</span>
                            <span className="text-gray-600">{item}</span>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}