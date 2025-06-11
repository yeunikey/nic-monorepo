'use client'

import { ApiResponse, User } from "@/types";

import Cookies from 'js-cookie';
import Input from "@/components/ui/Input";
import { api } from "@/api/instance";
import { toast } from "react-toastify";
import { useState } from "react";

export default function AuthPage() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

        if (login == "" || password == "") {
            toast("Заполните все данные", {
                type: "error"
            })
            return;
        }

        await api.post<ApiResponse<{ token: string, user: User }>>('/auth/login', {
            email: login,
            password: password
        })
            .then((response) => {

                if (response.data.statusCode == 400) {
                    toast(response.data.message, {
                        type: 'error',
                    })
                    return;
                }

                toast("Успешный вход!", {
                    type: 'success',
                })

                Cookies.set('token', response.data.data.token);

                window.location.href = "/admin"
            })
    }

    return (
        <div className="h-[80dvh] w-full my-auto flex items-center justify-center">
            <div className="w-80">
                <div className="text-center text-2xl font-semibold">
                    Вход в CMS
                </div>
                <div className="text-center text-lg text-muted">
                    Заполните все поля ниже
                </div>

                <div className="mt-10 flex flex-col gap-2">
                    <Input type="text" className="bg-white" placeholder="Логин" value={login} onChange={(e) => setLogin(e.target.value)}></Input>
                    <Input type="password" className="bg-white" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                </div>

                <div className="bg-primary py-2 flex justify-center px-6 text-white rounded-2xl mt-10 cursor-pointer" onClick={handleLogin}>
                    Войти
                </div>
            </div>
        </div>
    )
}