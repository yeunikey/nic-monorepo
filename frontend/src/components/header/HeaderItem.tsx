import Link from "next/link";
import { cn } from "@/utils/utils";

function HeaderItem({ text, link }: { text: string, link: string }) {
    return (
        <Link className="relative" href={link}>
            <div className={cn("text-sm text-[#999] cursor-pointer flex h-full items-center text-nowrap")}>
                {text}
            </div>
            {/* {text == "Главная" && (
                <div className="absolute w-full h-1 bg-primary -bottom-[22px] rounded-t-lg" />
            )} */}
        </Link>
    )
}
export default HeaderItem;