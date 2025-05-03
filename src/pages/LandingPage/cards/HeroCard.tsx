export default function HeroCard(){
    return(
        <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6 animate-float hover:shadow-2xl duration-750">
              <div className="flex items-start space-x-4">
                <div className="border-r border-gray-200 pr-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-sm bg-brand-blue mr-2"></div>
                      <span className="font-medium text-black">src</span>
                    </div>
                    <div className="flex items-center pl-6">
                      <div className="w-4 h-4 rounded-sm bg-brand-purple mr-2"></div>
                      <span className="font-medium text-black">components</span>
                    </div>
                    <div className="flex items-center pl-12">
                      <div className="w-4 h-4 rounded-sm bg-gray-300 mr-2"></div>
                      <span className="text-black">Button.tsx</span>
                    </div>
                    <div className="flex items-center pl-12">
                      <div className="w-4 h-4 rounded-sm bg-gray-300 mr-2"></div>
                      <span className="text-black">Card.tsx</span>
                    </div>
                    <div className="flex items-center pl-6">
                      <div className="w-4 h-4 rounded-sm bg-brand-purple mr-2"></div>
                      <span className="font-medium text-black">pages</span>
                    </div>
                    <div className="flex items-center pl-6">
                      <div className="w-4 h-4 rounded-sm bg-brand-purple mr-2"></div>
                      <span className="font-medium text-black">utils</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 p-3 rounded-md mb-3 border border-gray-100">
                    <h4 className="font-medium text-sm text-brand-blue">components</h4>
                    <p className="text-xs text-gray-500 mt-1">Contains all reusable UI components for the project</p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded">React</span>
                    <span className="text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-black rounded-full blur-3xl opacity-20 -z-10"></div>
        </div>
    )
}