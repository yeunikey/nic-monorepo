import Image from "next/image";
import Link from "next/link";

export default function Error() {
    return (
        <div className="mx-12 flex grow items-center justify-center">

            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2.5">
                    <div className="text-4xl font-semibold text-dark">
                        Упс... Кажется такой <br />
                        страницы не существует
                    </div>
                    <div className="text-dark-light-gray font-medium text-lg">
                        Воспользуйтесь кнопкой ниже, <br />
                        чтобы перейти домой
                    </div>
                </div>
                <Link href="/" className="w-fit bg-primary rounded-full px-6 py-2 flex gap-2.5 items-center cursor-pointer">

                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>

                    <div className="text-base text-white">
                        Домой
                    </div>
                </Link>
            </div>

        </div >
    )
}