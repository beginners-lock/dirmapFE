interface Props {
    quote: string,
    author: string
    role: string
  }

export default function TestimonialCard({ quote, author, role }: Props){
    return(
        <div className="bg-white p-6 rounded-lg shadow-md relative">
            <div className="text-5xl text-brand-blue opacity-20 absolute top-4 left-4">"</div>
            <div className="pt-4">
                <p className="text-gray-700 mb-6 relative z-10">
                {quote}
                </p>
                <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-black">{author}</p>
                <p className="text-gray-500 text-sm">{role}</p>
                </div>
            </div>
        </div>
    )
}