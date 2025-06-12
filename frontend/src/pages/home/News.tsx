import { ApiResponse, New } from "@/types";
import { useEffect, useState } from "react";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/api/instance";

function News() {
    const [news, setNews] = useState<New[]>([]);

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        const { data } = await api.get<ApiResponse<New[]>>("/news");
        setNews(data.data);
    };

    return (
        <Container className="py-24">
            <div className="text-3xl font-semibold text-center">
                Последние новости
            </div>

            <div className="mt-1 text-muted text-center">
                Последние новости нашей программы
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {news.slice(0, 3).map((item) => (
                    <Link href={`/news/${item.id}`} key={item.id} className="bg-white rounded-lg border-2 border-stroke flex flex-col overflow-hidden">
                        {item.imageId && (
                            <Image
                                src={`http://flood-api.astanait.edu.kz/v1/images/${item.imageId}`}
                                alt="Изображение"
                                width={400}
                                height={250}
                                className="w-full aspect-[1.77] object-cover"
                            />
                        )}

                        <div className="p-5 flex flex-col grow">
                            <div className="text-xl font-semibold">
                                {item.title}
                            </div>
                            <div className="mt-2 text-muted line-clamp-4">
                                {item.content}
                            </div>

                            <div className="mt-auto flex justify-end items-center gap-2 pt-4 text-[#999]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#999">
                                    <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                                </svg>
                                <div>{new Date(item.createdAt).toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="w-full flex justify-center mt-6">
                <Link href={'/news'} className="flex gap-4 items-center py-2 px-4 bg-primary rounded-lg cursor-pointer">
                    <div className="text-white font-medium">
                        Почитать новости
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-5 h-5" viewBox="0 -960 960 960">
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                    </svg>
                </Link>
            </div>
        </Container>
    );
}

export default News;
