import classNames from "classnames"


const variants = {
    default: "bg-brand-blue hover:bg-brand-purple text-white",
    destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
        "border border-brand-grey bg-transparent hover:bg-slate-100 text-black",
    secondary: "bg-brand-purple hover:bg-brand-blue text-white",
    ghost: "hover:bg-slate-400 hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
};

const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    className?: string
    variant?: 'default' | 'destructive' | 'outline' | 'ghost' | 'link'
    size?: 'default' | 'sm' | 'lg' | 'icon'
}

export default function Button({ className, variant='default', size='default', children, ...props }: Props){
    const glob = "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
    
    const cn = classNames(
        glob,
        variants[variant],
        sizes[size],
        className
    );

    return (
        <button {...props} className={cn}>
            {children}
        </button>
      
    )
}