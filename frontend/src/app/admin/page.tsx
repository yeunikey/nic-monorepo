'use client'

import ArticlePage from "@/pages/admin/ArticlePage";
import Container from "@/components/Container";
import TeamPage from "@/pages/admin/TeamPage";
import { cn } from "@/utils/utils";
import { useState } from "react";

export default function AdminPage() {

    const pages = [
        {
            "name": "Команда",
            "node": <TeamPage />
        },
        {
            "name": "Научные работы",
            "node": <ArticlePage />
        },
        {
            "name": "Новости",
            "node": <TeamPage />
        }
    ]
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <Container className="mt-12">
            <div className="text-2xl font-semibold">
                Управление информационным сайтом
            </div>
            <div className="mt-3 flex gap-3 items-center">
                {pages.map((page, i) => (
                    <div key={i} className={cn("rounded-2xl py-1 px-4 cursor-pointer", currentPage == i ? 'bg-primary text-white' : 'bg-white text-black')} onClick={() => setCurrentPage(i)}>
                        {page.name}
                    </div>
                ))}
            </div>

            <div className="mt-6">
                {pages[currentPage].node}
            </div>
        </Container>
    )
}