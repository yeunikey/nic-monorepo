'use client'

import { ApiResponse, Team } from "@/types";
import { useEffect, useState } from "react";

import Container from "@/components/Container";
import { api } from "@/api/instance";
import { toast } from "react-toastify";

function Teams() {

    const [team, setTeam] = useState<Team[]>([]);

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

    return (
        <>
            <div className="md:hidden py-24 bg-white">
                <Container className="flex flex-col gap-16">
                    <div className="text-center font-semibold text-3xl">
                        Научно-<br />исследовательская <br />
                        команда
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                        {team.map((member, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <img
                                    className="bg-white w-full aspect-[0.75] object-cover"
                                    src={`http://flood-api.astanait.edu.kz/v1/images/${member.image}`}
                                />
                                <div className="mt-2 font-semibold">
                                    {member.fullName}
                                </div>
                                <div className="text-muted text-sm">
                                    {member.position}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <div className="hidden md:block py-48 bg-white">
                <div className="w-full max-w-[95dvw] sm:max-w-[85dvw] md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto flex gap-24 h-full">
                    <div className="grow w-1/4">
                        <div className="sticky top-[40%] text-start font-semibold md:text-3xl lg:text-4xl">
                            Научно-<br />исследовательская <br />
                            команда
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                        {team.map((member, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <img
                                    className="bg-background w-full aspect-[0.75] object-cover"
                                    src={`http://flood-api.astanait.edu.kz/v1/images/${member.image}`}
                                />
                                <div className="mt-2 font-semibold">
                                    {member.fullName}
                                </div>
                                <div className="text-muted text-sm">
                                    {member.position}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Teams;