'use client';

import { ApiResponse, Team } from '@/types';
import { api, vapi } from '@/api/instance';
import { useEffect, useState } from 'react';

import Input from '@/components/ui/Input';
import { toast } from 'react-toastify';
import { useAuth } from '@/hooks/auth';

function TeamPage() {
    const { token } = useAuth();
    const [team, setTeam] = useState<Team[]>([]);

    const [fullName, setFullName] = useState('');
    const [position, setPosition] = useState('');
    const [priority, setPriority] = useState(0);
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const fetchTeam = async () => {
        await api.get<ApiResponse<Team[]>>('/team', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(({ data }) => {

            if (data.statusCode != 200) {
                toast.error('Ошибка!')
                return;
            }

            setTeam(data.data)

        }).catch(() => {
            toast.error('Ошибка при подключении к серверу')
        })
    }

    useEffect(() => {
        if (token == '') {
            return;
        }

        fetchTeam();
    }, [token])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!image) return alert("Выберите изображение");

        const formData = new FormData();
        formData.append('file', image);

        try {
            const imageRes = await vapi.post(
                '/images/upload',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );

            const imageId = imageRes.data.data.id;

            const res = await api.post('/team', {
                fullName,
                position,
                priority,
                image: imageId,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            setTeam(prev => [...prev, res.data.data]);
            setFullName('');
            setPosition('');
            setPriority(0);
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
        } catch (err) {
            alert("Ошибка при удалении");
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setImage(file);

        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        } else {
            setPreview(null);
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
                    <Input type="text" placeholder="ФИО" value={fullName} onChange={e => setFullName(e.target.value)} className='bg-white'></Input>
                    <Input type="text" placeholder="Должность" value={position} onChange={e => setPosition(e.target.value)} className="bg-white" />
                    <Input type="number" placeholder="Приоритет" value={String(priority)} onChange={e => setPriority(Number(e.target.value))} className="bg-white" />
                    <Input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />

                    <button type="submit" className="mt-6 bg-primary rounded-2xl text-white px-6 py-1">Добавить</button>
                </div>
            </form>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold">Список команды</h2>

                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {team.map(member => (
                        <div key={member.id} className="flex flex-col items-center relative">
                            <img className="bg-white w-full aspect-[0.75] object-cover" src={`http://localhost:3004/v1/images/${member.image}`}>
                            </img>
                            <div className="mt-2 font-semibold">
                                {member.fullName}
                            </div>
                            <div className="text-muted text-sm">
                                {member.position}
                            </div>

                            <div className="absolute top-2 right-2 bg-red-500 p-1 rounded-full cursor-pointer" onClick={() => handleDelete(member.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamPage;
