import { cn } from "@/utils/utils";

function HeaderItem({ text }: { text: string }) {
    return (
        <div className="relative">
            <div className={cn("text-sm text-[#999] cursor-pointer flex h-full items-center text-nowrap", text == "Главная" ? "text-black" : "")}>
                {text}
            </div>
            {text == "Главная" && (
                <div className="absolute w-full h-1 bg-primary -bottom-[22px] rounded-t-lg" />
            )}
        </div>
    )
}
export default HeaderItem;