import Button from '../../components/global/Button';
import classNames from 'classnames';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FolderTree } from 'lucide-react';

export default function AuthPage(){
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-brand-lightgrey">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-8">
          {/* Logo and Brand */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <FolderTree className="h-8 w-8 text-brand-blue" />
              <span className="font-bold text-2xl text-black">dirmap</span>
            </div>
            <p className="text-gray-500">Visualize & Share Project Structures</p>
          </div>

          {/* Auth Card */}
          <div className="rounded-lg border bg-white shadow-lg">
            <div className="space-y-1 text-center flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-bold leading-none tracking-tight text-black">Welcome back</div>
              <div className="text-sm text-gray-500">
                Sign in to your account to continue
              </div>
            </div>

            <div className="space-y-4 p-6 pt-0">
              <div className="flex flex-col space-y-2">
                <Button variant="outline" size="lg" 
                  className="w-full relative flex gap-2 text-black"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5"
                  >
                    <path 
                      fill="#4285F4" 
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
                    />
                    <path 
                      fill="#34A853" 
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
                    />
                    <path 
                      fill="#FBBC05" 
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" 
                    />
                    <path 
                      fill="#EA4335" 
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" 
                    />
                  </svg>
                  Sign in with Google
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-2 my-6">
                <div className="bg-gray-500 h-px flex-1"></div>
                <div className="text-gray-500 text-sm ">OR</div>
                <div className="bg-gray-500 h-px flex-1"></div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-black">
                  Need a demo account? <br />
                  <span className="font-semibold text-primary">Contact our team</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col border-t pt-4 pb-3 flex items-center p-6 pt-0">
              <p className="text-xs text-center text-gray-400">
                By continuing, you agree to StructureFlow's 
                <a href="#" className="text-primary underline mx-1 text-black">Terms of Service</a>
                and
                <a href="#" className="text-primary underline mx-1 text-black">Privacy Policy</a>
              </p>
            </div>
          </div>

          {/* Help Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-brand-purple">Help</a>
            
            <a href="#" className="text-sm text-gray-500 hover:text-brand-purple">Privacy</a>
            
            <a href="#" className="text-sm text-gray-500 hover:text-brand-purple">Terms</a>
          </div>

          <div className="text-center text-xs text-muted-foreground text-gray-500">
            © 2025 StructureFlow. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
