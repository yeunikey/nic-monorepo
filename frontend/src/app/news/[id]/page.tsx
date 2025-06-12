'use client'

import { ApiResponse, New } from "@/types";
import { useEffect, useState } from "react";

import Container from "@/components/Container";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { api } from "@/api/instance";
import remarkBreaks from "remark-breaks";
import { useParams } from "next/navigation"

export default function NewPage() {

    const params = useParams();

    const [news, setNew] = useState<New | null>(null);

    useEffect(() => {
        loadNews();
    }, [params]);

    const loadNews = async () => {
        await api.get<ApiResponse<New>>(`/news/${params?.id}`).then(({ data }) => {
            console.log(data.data)
            setNew(data.data);
        })
    };

    if (!news) {
        return <div className="test">
        </div>
    }

    return (
        <Container className="my-24 !w-5xl">

            <div>
                {news.imageId && (
                    <Image
                        src={`http://flood-api.astanait.edu.kz/v1/images/${news.imageId}`}
                        alt="Изображение"
                        width={400}
                        height={250}
                        className="w-full aspect-[1.77] object-cover rounded-2xl"
                    />
                )}
            </div>

            <div className="my-6">
                <div className="text-3xl font-semibold">
                    {news?.title}
                </div>
                <div className="mt-2">{new Date(news?.createdAt).toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}</div>
            </div>

            <div className="mt-6 whitespace-pre-wrap text-wrap break-words">
                <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                    {news.content.replace(/\\n/g, '\n')}
                </ReactMarkdown>
            </div>

        </Container>
    )
}