export default function DemoSection(){
    return(
        <section id="demo" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-0">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Interactive Preview</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See how easy it is to visualize your project structure
                    </p>

                    <div className="mt-12 rounded-xl max-w-4xl mx-auto m aspect-video bg-black animate-pulse">

                    </div>
                </div>
            </div>
        </section>
    )
}