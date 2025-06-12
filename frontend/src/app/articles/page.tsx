'use client'

import { useEffect, useState } from "react";

import { Article } from "@/types";
import Container from "@/components/Container";
import Link from "next/link";
import { api } from "@/api/instance";
import { toast } from "react-toastify";

export default function News() {

    const [articles, setArticles] = useState<Article[]>([]);

    const fetchArticles = async () => {
        try {
            const { data } = await api.get<Article[]>('/articles');
            setArticles(data);
        } catch {
            toast.error('Ошибка при получении статей');
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <Container className="py-24">
            <div className="text-3xl font-semibold text-center">
                Научные работы
            </div>

            <div className="mt-1 text-muted text-center">
                Научные работы наших ученых
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {articles.slice(0, 3).map((article, i) => (
                    <div key={i} className="bg-white rounded-lg border-2 border-stroke p-5 flex flex-col w-full">
                        <div className="">
                            <div className="text-xl font-semibold">
                                {article.title}
                            </div>
                            <div className="mt-2 text-muted line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                                {article.description}
                            </div>
                        </div>


                        <div className="mt-6 flex justify-between grow items-center">
                            <div className="flex gap-2 items-center">
                                <div>
                                    {new Date(article.publishedAt).toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}
                                </div>
                                <div className="rounded-full bg-black w-1 h-1">

                                </div>
                                <div className="test">
                                    {article.authorName}
                                </div>
                            </div>
                            <Link href={article.doi} target="_blank" className="">
                                <div className="bg-background border-2 border-stroke rounded-lg p-2 px-3 h-fit cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-muted/50" height="16px" width="16px" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}