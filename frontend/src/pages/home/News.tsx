import Container from "@/components/Container";

function News() {
    return (
        <Container className="py-24">
            <div className="text-3xl font-semibold text-center">
                Последние новости
            </div>

            <div className="mt-1 text-muted text-center">
                Последние новости нашей программы
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg border-2 border-stroke flex flex-col overflow-hidden">

                    <div className="bg-[#999] w-full h-40 opacity-20">

                    </div>

                    <div className="p-5">
                        <div className="test">
                            <div className="text-xl font-semibold">
                                Заголовок новости
                            </div>
                            <div className="mt-2 text-muted">
                                Тут нужен немного большой и длинный текст, чтобы заполнял все поля. Желательно в высоту 4-5 строк. Тут нужен немного....
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end grow items-end">

                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5" height="16px" viewBox="0 -960 960 960" width="16px" fill="#999"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" /></svg>
                                <div className="text-[#999]">
                                    7 января
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg border-2 border-stroke flex flex-col overflow-hidden">

                    <div className="bg-[#999] w-full h-40 opacity-20">

                    </div>

                    <div className="p-5">
                        <div className="test">
                            <div className="text-xl font-semibold">
                                Заголовок новости
                            </div>
                            <div className="mt-2 text-muted">
                                Тут нужен немного большой и длинный текст, чтобы заполнял все поля. Желательно в высоту 4-5 строк. Тут нужен немного....
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end grow items-end">

                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5" height="16px" viewBox="0 -960 960 960" width="16px" fill="#999"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" /></svg>
                                <div className="text-[#999]">
                                    7 января
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg border-2 border-stroke flex flex-col overflow-hidden">

                    <div className="bg-[#999] w-full h-40 opacity-20">

                    </div>

                    <div className="p-5">
                        <div className="test">
                            <div className="text-xl font-semibold">
                                Заголовок новости
                            </div>
                            <div className="mt-2 text-muted">
                                Тут нужен немного большой и длинный текст, чтобы заполнял все поля. Желательно в высоту 4-5 строк. Тут нужен немного....
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end grow items-end">

                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5" height="16px" viewBox="0 -960 960 960" width="16px" fill="#999"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" /></svg>
                                <div className="text-[#999]">
                                    7 января
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mt-6">
                <div className="flex gap-4 items-center py-2 px-4 bg-primary rounded-lg cursor-pointer">
                    <div className="text-white font-medium">
                        Почитать новости
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-5 h-5" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                </div>
            </div>
        </Container>
    );
}

export default News;