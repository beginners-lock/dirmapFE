import { Link } from "react-router-dom"
import { FolderTree, Lock, Globe, ArrowRight } from "lucide-react"

export default function LandingPage(){
    return(
        <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            

            <section className="py-20">
            <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Visualize Your Folder Structures with Ease
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Create, share, and collaborate on folder structure diagrams. Perfect for documentation, planning, and
                    team collaboration.
                </p>
                <Link
                    to="/auth"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition text-lg font-medium"
                >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                </div>
                <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <div className="flex items-center mb-3">
                        <FolderTree className="h-5 w-5 text-yellow-500 mr-2" />
                        <span className="font-medium">Project Root</span>
                    </div>
                    <div className="ml-6 border-l-2 border-gray-200 pl-4">
                        <div className="flex items-center mb-2">
                        <FolderTree className="h-5 w-5 text-yellow-500 mr-2" />
                        <span>src</span>
                        </div>
                        <div className="ml-6 border-l-2 border-gray-200 pl-4">
                        <div className="flex items-center mb-2">
                            <FolderTree className="h-5 w-5 text-yellow-500 mr-2" />
                            <span>components</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <FolderTree className="h-5 w-5 text-yellow-500 mr-2" />
                            <span>pages</span>
                        </div>
                        </div>
                        <div className="flex items-center mb-2">
                        <FolderTree className="h-5 w-5 text-yellow-500 mr-2" />
                        <span>public</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </section>

            <section className="relative border w-full flex flex-col items-start justify-start">
                <div className="w-full h-[800px] bg-[#ffffffd0] border border-black z-10"></div>
                <img className="absolute w-full h-auto z-0" src="/bg/bg.jpg"/>
            </section>

            <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <FolderTree className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Intuitive Tree Visualization</h3>
                <p className="text-gray-600">
                    Create folder structures with our drag-and-drop interface. Easily visualize complex directory
                    hierarchies.
                </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Public Sharing</h3>
                <p className="text-gray-600">
                    Share your folder structures publicly with a simple link. Perfect for documentation and tutorials.
                </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Private Collaboration</h3>
                <p className="text-gray-600">
                    Keep your projects private and invite specific team members to view or edit your folder structures.
                </p>
                </div>
            </div>
            </div>
            </section>

            <section className="py-16 bg-purple-600">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Organize Your Projects?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of developers and teams who use DirMap to visualize and share their project structures.
            </p>
            <Link
                to="/auth"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition text-lg font-medium"
            >
                Sign Up <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            </div>
            </section>

            <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <FolderTree className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold text-white">DirMap</span>
                </div>
                <div className="text-sm">&copy; {new Date().getFullYear()} DirMap. All rights reserved.</div>
            </div>
            </div>
            </footer>
        </div>
    )
}