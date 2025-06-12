// Updated TeamPage.tsx with drag-and-drop and priority reordering
'use client';

import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { api, vapi } from '@/api/instance';
import { useEffect, useState } from 'react';

import { ApiResponse } from '@/types';
import { CSS } from '@dnd-kit/utilities';
import Input from '@/components/ui/Input';
import React from 'react';
import { Team } from '@/types';
import { toast } from 'react-toastify';
import { useAuth } from '@/hooks/auth';
import { useSortable } from '@dnd-kit/sortable';

type Props = {
    member: Team;
    onDelete: (id: number) => void;
};

function SortableItem({ member, onDelete }: Props) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: member.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            className="flex flex-col items-center relative group"
        >
            <div {...listeners} className="absolute top-2 left-2 z-10 bg-background px-2 py-1 text-xs rounded cursor-grab">
                ☰
            </div>

            <img
                className="bg-white w-full aspect-[0.75] object-cover"
                src={`http://flood-api.astanait.edu.kz/v1/images/${member.image}`}
            />
            <div className="mt-2 font-semibold">{member.fullName}</div>
            <div className="text-muted text-sm">{member.position}</div>

            <button
                className="absolute top-2 right-2 bg-red-500 p-1 rounded-full z-10 cursor-pointer"
                onClick={() => onDelete(member.id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
            </button>
        </div>
    );
}




function TeamPage() {
    const { token } = useAuth();
    const [team, setTeam] = useState<Team[]>([]);

    const [fullName, setFullName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const fetchTeam = async () => {
        try {
            const { data } = await api.get<ApiResponse<Team[]>>('/team');

            if (data.statusCode !== 200) return toast.error('Ошибка!');

            const sorted = [...data.data].sort((a, b) => a.priority - b.priority);
            setTeam(sorted);
        } catch {
            toast.error('Ошибка при подключении к серверу');
        }
    };

    useEffect(() => {
        fetchTeam();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!image) return alert("Выберите изображение");

        const formData = new FormData();
        formData.append('file', image);

        try {
            const imageRes = await vapi.post('/images/upload', formData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const imageId = imageRes.data.data.id;

            await api.post('/team', {
                fullName,
                position,
                image: imageId,
                priority: team.length + 1
            }, {
                headers: { Authorization: `Bearer ${token}` },
            });

            await fetchTeam();

            setFullName('');
            setPosition('');
            setImage(null);
            setPreview(null);

        } catch (err) {
            console.error(err);
            alert("Ошибка при добавлении");
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await api.delete(`/team/${id}`);
            setTeam(prev => prev.filter(member => member.id !== id));
        } catch {
            alert("Ошибка при удалении");
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setImage(file);
        setPreview(file ? URL.createObjectURL(file) : null);
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = team.findIndex(m => m.id === active.id);
        const newIndex = team.findIndex(m => m.id === over.id);

        const newOrder = arrayMove(team, oldIndex, newIndex).map((member, i) => ({
            ...member,
            priority: i + 1
        }));

        setTeam(newOrder);

        try {
            await api.post('/team/reorder', newOrder.map(({ id, priority }) => ({ id, priority })), {
                headers: { Authorization: `Bearer ${token}` },
            });
        } catch {
            toast.error("Не удалось сохранить порядок");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex gap-6">
                <div className="aspect-[0.75] w-64 bg-white flex items-center justify-center text-center overflow-hidden">
                    {preview ? (
                        <img src={preview} alt="Preview" className="object-cover w-full h-full" />
                    ) : (
                        <span className="text-gray-500 text-center px-4">Предпросмотр<br />изображения</span>
                    )}
                </div>

                <div className="space-y-2">
                    <Input type="text" placeholder="ФИО" value={fullName} onChange={e => setFullName(e.target.value)} className='bg-white' />
                    <Input type="text" placeholder="Должность" value={position} onChange={e => setPosition(e.target.value)} className="bg-white" />
                    <Input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
                    <button type="submit" className="mt-6 bg-primary rounded-2xl text-white px-6 py-1">Добавить</button>
                </div>
            </form>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold">Список команды</h2>

                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={team.map(m => m.id)} strategy={verticalListSortingStrategy}>
                        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                            {team.map(member => (
                                <SortableItem key={member.id} member={member} onDelete={() => handleDelete(member.id)} />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    );
}

export default TeamPage;
