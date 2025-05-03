interface Props {
    title: string
    description: string
    bg: string
}

export default function UseCaseCard({ title, description, bg }: Props){
    return(
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className={`${bg} h-3`}></div>
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-black">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
            </div>
        </div>
    )
}