'use client';

import { useEffect, useState } from 'react';

import { Article } from '@/types';
import Input from '@/components/ui/Input';
import { api } from '@/api/instance';
import { toast } from 'react-toastify';

function ArticlePage() {
    const [articles, setArticles] = useState<Article[]>([]);

    const [authorName, setAuthorName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [doi, setDoi] = useState('');
    const [publishedAt, setPublishedAt] = useState('');

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post<Article>('/articles', {
                authorName,
                title,
                description,
                doi,
                publishedAt
            });

            setArticles(prev => [...prev, res.data]);

            setAuthorName('');
            setTitle('');
            setDescription('');
            setDoi('');
            setPublishedAt('');
        } catch {
            toast.error('Ошибка при добавлении статьи');
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await api.delete(`/articles/${id}`);
            setArticles(prev => prev.filter(article => article.id !== id));
        } catch {
            toast.error('Ошибка при удалении статьи');
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-3">Добавить статью</h1>

            <form onSubmit={handleSubmit} className="space-y-2 mb-6">
                <Input type="text" placeholder="Имя автора" value={authorName} onChange={e => setAuthorName(e.target.value)} className='bg-white' />
                <Input type="text" placeholder="Название статьи" value={title} onChange={e => setTitle(e.target.value)} className='bg-white' />
                <Input type="text" placeholder="Краткое описание" value={description} onChange={e => setDescription(e.target.value)} className='bg-white' />
                <Input type="url" placeholder="DOI ссылка" value={doi} onChange={e => setDoi(e.target.value)} className='bg-white' />
                <Input type="datetime-local" value={publishedAt} onChange={e => setPublishedAt(e.target.value)} className='bg-white' />

                <button type="submit" className="mt-6 bg-primary rounded-2xl text-white px-6 py-1">Добавить</button>
            </form>

            <h2 className="text-2xl font-semibold mb-2">Список статей</h2>

            <div className="grid grid-cols-2 mt-3 gap-3">
                {articles.map(article => (
                    <div key={article.id} className="bg-white rounded-2xl p-3">
                        <h3 className="text-2xl font-semibold mb-3">{article.title}</h3>

                        <p><strong>Автор:</strong> {article.authorName}</p>
                        <p><strong>Описание:</strong> {article.description}</p>
                        <p><strong>DOI:</strong> <a href={article.doi} className="text-blue-500 underline" target="_blank">{article.doi}</a></p>
                        <p><strong>Опубликовано:</strong> {new Date(article.publishedAt).toLocaleString()}</p>
                        <button onClick={() => handleDelete(article.id)} className="mt-6 text-red-500 flex bg-red-500 rounded-2xl py-1 px-6 gap-2 items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="white"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                            <div className="text-white">
                                Удалить
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArticlePage;
