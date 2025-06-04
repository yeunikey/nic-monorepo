import { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface ContainerProps {
    children?: ReactNode,
    className?: string
}

function Container({ children, className }: ContainerProps) {
    return (
        <div className={cn("w-[95dvw] sm:w-[85dvw] md:w-3xl lg:w-4xl xl:w-5xl 2xl:w-7xl mx-auto", className)}>
            {children}
        </div>
    );
}

export default Container;