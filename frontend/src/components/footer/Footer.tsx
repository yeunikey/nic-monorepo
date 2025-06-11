import Container from "../Container";
import Image from "next/image";

function Footer() {
    return (
        <footer className="bg-[#222] py-16">
            <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="test">
                    <Image src={'/aitu-white.png'} alt="aitu logo" width={125} height={64} className="h-20 w-auto" />
                    <div className="text-white mt-12 text-sm">
                        Проспект Мангилик Ел, 55/11 <br /> Бизнес-центр EXPO, блок C1<br />Астана, Казахстан, 010000
                    </div>
                </div>

                <div className="test">
                    <div className="text-white font-medium">
                        КОНТАКТЫ
                    </div>

                    <div className="mt-4 flex flex-col gap-2 text-white opacity-70">
                        Нугуманова Алия Багдатовна <br />
                        Руководитель программы, Директор НИЦ “Big Data and Blockchain Technologies”<br /><br />
                        a.nugumanova@astanait.edu.kz <br />
                        кабинет: C1.2.331
                    </div>
                </div>

                <div className="flex lg:justify-end">
                    <div className="test">
                        <div className="text-white font-medium">
                            КАРТА САЙТА
                        </div>

                        <div className="mt-4 flex flex-col gap-2">
                            <div className="opacity-70 text-white cursor-pointer">
                                Главная
                            </div>
                            <div className="opacity-70 text-white cursor-pointer">
                                О программе
                            </div>
                            <div className="opacity-70 text-white cursor-pointer">
                                Новости
                            </div>
                            <div className="opacity-70 text-white cursor-pointer">
                                Публикаций
                            </div>
                            <div className="opacity-70 text-white cursor-pointer">
                                Команда
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;