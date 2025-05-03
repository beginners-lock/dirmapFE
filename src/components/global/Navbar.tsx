import { Link } from "react-router-dom"
import { FolderTree } from "lucide-react"
import Button from "./Button"

export default function Navbar(){
    return(
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderTree className="h-6 w-6 text-brand-blue" />
            <span className="font-bold text-xl text-black">dirmap.</span>
          </div>
  
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-brand-blue transition-colors hover:underline">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-brand-blue transition-colors hover:underline">How it works</a>
            <a href="#use-cases" className="text-gray-600 hover:text-brand-blue transition-colors hover:underline">Use Cases</a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-blue transition-colors hover:underline">Pricing</a>
          </div>
  
          <div className="flex items-center gap-3">
            <Link to="/auth">
            <Button variant="outline" className="hidden md:flex">Log in</Button>
            </Link>

            <Link to="/auth">
            <Button>Sign up free</Button>
            </Link>
          </div>
        </div>
      </nav> 
    )
}

/**
 * <header className="sticky top-0 w-full bg-background/95 shadow-sm backdrop-blur z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <FolderTree className="h-6 w-6 text-custom-purple" />
                <span className="text-xl font-bold text-custom-darkblue">dirmap.</span>
            </div>
            <div>
                <Link to="/auth">
                    <Button className="bg-violet-600 hover:bg-custom-darkpurple">
                        Sign In
                    </Button>
                </Link>
            </div>
            </div>
        </header>
 */