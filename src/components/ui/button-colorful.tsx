import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            className={cn(
                "relative h-14 px-12 overflow-hidden",
                "bg-[#C46A2D] hover:bg-[#A35624]",
                "transition-all duration-300",
                "group border-none",
                className
            )}
            {...props}
        >
            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white font-black uppercase tracking-[0.2em] text-[11px]">{label}</span>
                <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
        </Button>
    );
}

