"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ApiResponse, New } from "@/types";
import { api, vapi } from "@/api/instance";
import { useEffect, useState } from "react";

import Image from "next/image";
import Input from "@/components/ui/Input";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { toast } from "react-toastify";
import { useAuth } from "@/hooks/auth";

export default function NewsPage() {
    const { token } = useAuth();
    const [news, setNews] = useState<New[]>([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [existingImageId, setExistingImageId] = useState<number | null>(null);

    useEffect(() => {
        loadNews();
    }, []);

    const loadNews = async () => {
        await api.get<ApiResponse<New[]>>("/news")
            .then(({ data }) => {
                setNews(data.data);
            })
    };

    const handleImageUpload = async () => {
        if (!imageFile) return null;

        const formData = new FormData();
        formData.append("file", imageFile);

        const imageRes = await vapi.post("/images/upload", formData, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return imageRes.data.data.id;
    };

    const handleSubmit = async () => {
        let imageId = await handleImageUpload();

        if (!imageId && editingId !== null) {
            imageId = existingImageId; // используем старое изображение при редактировании
        }
        const payload = { title, content, imageId };

        if (!imageId) {
            toast.error('Загрузите изображение');
            return;
        }

        if (editingId !== null) {
            await api.post(`/news/${editingId}`, payload, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setEditingId(null);
        } else {
            await api.post("/news", payload, {
                headers: { Authorization: `Bearer ${token}` },
            });
        }

        setTitle("");
        setContent("");
        setImageFile(null);
        setPreviewUrl(null);

        await loadNews();
    };

    const startEdit = (item: any) => {
        setEditingId(item.id);
        setTitle(item.title);
        setContent(item.content);
        setImageFile(null); // сброс выбора файла
        setExistingImageId(item.imageId || null); // сохранить текущий imageId

        // Если есть изображение — показать его
        if (item.imageId) {
            setPreviewUrl(`http://flood-api.astanait.edu.kz/v1/images/${item.imageId}`);
        } else {
            setPreviewUrl(null);
        }
    };

    const handleDelete = async (id: number) => {
        await api.delete(`/news/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        await loadNews();
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">
                {editingId ? "Редактировать новость" : "Создать новость"}
            </h2>

            <div className="flex gap-6">
                <div className="grow space-y-3">
                    <Input
                        type="text"
                        placeholder="Заголовок"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-white"
                    />

                    <textarea
                        placeholder="Контент (markdown)"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="rounded-2xl py-2 px-6 text-dark text-base w-full outline-solid outline-2 outline-transparent focus:outline-primary placeholder:text-dark-gray bg-white min-h-40"
                    />

                    <div className="whitespace-pre-wrap text-wrap break-words">
                        <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                            {content.replace(/\\n/g, '\n')}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="space-y-3">
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files?.[0] || null;
                            setImageFile(file);
                            if (file) {
                                setPreviewUrl(URL.createObjectURL(file));
                            } else {
                                setPreviewUrl(null);
                            }
                        }}
                        className="bg-white"
                    />
                    <div className="aspect-[1.77] w-128 bg-white flex items-center justify-center text-center overflow-hidden">
                        {previewUrl ? (
                            <img src={previewUrl} alt="Preview" className="object-cover w-full h-full" />
                        ) : (
                            <span className="text-gray-500 text-center px-4">Предпросмотр<br />изображения</span>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" onClick={handleSubmit} className="bg-primary rounded-2xl text-white px-6 py-1">{editingId ? "Сохранить изменения" : "Создать"}</button>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Все новости</h2>

            <div className="space-y-4">
                {news.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-2xl">
                        <div className="flex gap-6">
                            {item.imageId && (
                                <Image
                                    src={`http://flood-api.astanait.edu.kz/v1/images/${item.imageId}`}
                                    alt="Изображение"
                                    width={400}
                                    height={250}
                                    className="my-2"
                                />
                            )}
                            <div className="space-y-2">
                                <h3 className="font-semibold text-2xl">{item.title}</h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    🕒 Опубликовано: {new Date(item.createdAt).toLocaleString()}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 whitespace-pre-wrap text-wrap break-words">
                            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                                {item.content.replace(/\\n/g, '\n')}
                            </ReactMarkdown>
                        </div>

                        <div className="mt-4 flex gap-2">
                            <button
                                onClick={() => startEdit(item)}
                                className="text-sm text-yellow-600"
                            >
                                ✏️ Редактировать
                            </button>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="text-sm text-red-600"
                            >
                                🗑️ Удалить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
