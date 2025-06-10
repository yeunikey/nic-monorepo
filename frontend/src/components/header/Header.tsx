'use client'

import Container from "../Container";
import HeaderItem from "./HeaderItem";
import Link from "next/link";
import { useState } from "react";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="py-3 border-b-2 border-stroke bg-white">
            <Container className="flex flex-wrap items-center justify-between gap-4">
                {/* Логотип и поиск */}
                <div className="flex items-center gap-6 w-full sm:w-auto justify-between">
                    <Link href="/" className="text-lg font-semibold text-nowrap">
                        Flood Analytics
                    </Link>

                    {/* Поиск (видим только на lg и выше) */}
                    <div className="hidden lg:flex px-4 gap-4 rounded-lg border-stroke border-2 items-center w-full max-w-72 bg-background">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#999] h-5 w-5" viewBox="0 -960 960 960">
                            <path d="..." /><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#242424"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                        </svg>
                        <input
                            className="text-[#999] text-sm py-2 w-full focus:outline-none"
                            placeholder="Поиск по сайту"
                        />
                    </div>

                    {/* Бургер для мобилки */}
                    <button
                        className="sm:hidden text-gray-600 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-black transition-all duration-300" viewBox="0 -960 960 960">
                            {isMenuOpen ? (
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            ) : (
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Навигация (большие экраны) */}
                <div className="hidden sm:flex grow gap-6 items-center justify-end">
                    <div className="flex gap-4 lg:gap-8 h-full">
                        <HeaderItem text="Главная" />
                        <HeaderItem text="О программе" />
                        <HeaderItem text="Новости" />
                        <HeaderItem text="Публикаций" />
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer py-2 px-3 rounded-lg hover:bg-background">
                        <img
                            className="h-5 w-5 rounded-full"
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png"
                            alt="russia flag"
                        />
                        <div className="font-medium text-sm">RU</div>
                    </div>
                </div>

                {/* Мобильное меню */}
                {isMenuOpen && (
                    <div className="sm:hidden w-full mt-4">
                        <div className="flex grow gap-6 items-center justify-end">
                            <div className="flex gap-4 lg:gap-8 h-full">
                                <HeaderItem text="Главная" />
                                <HeaderItem text="О программе" />
                                <HeaderItem text="Новости" />
                                <HeaderItem text="Публикаций" />
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer py-2 px-3 rounded-lg hover:bg-background">
                                <img
                                    className="h-5 w-5 rounded-full"
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png"
                                    alt="russia flag"
                                />
                                <div className="font-medium text-sm">RU</div>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
}

export default Header;