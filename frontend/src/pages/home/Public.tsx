function Public() {
    return (
        <div className="py-48 bg-white overflow-hidden">
            <div className="mx-auto w-[95dvw] sm:w-[85dvw] md:w-2xl lg:w-5xl xl:w-6xl flex relative">

                <div className="absolute -top-64 left-0">
                    <div className="flex flex-col gap-3">
                        {Array.from({ length: 3 }).map((undefined, i) => (
                            <div key={i} className="bg-white rounded-lg border-2 border-stroke p-5 flex flex-col w-48 md:w-80 lg:w-lg">
                                <div className="">
                                    <div className="text-xl font-semibold">
                                        Задачи
                                    </div>
                                    <div className="mt-2 text-muted line-clamp-3 sm:line-clamp-4 lg:line-clamp-none">
                                        Для достижения цели потребуется решение следующих взаимосвязанных задач:
                                        Исследование, анализ и оценка паводковой ситуации на территории ...
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-end grow items-end">
                                    <div className="bg-background border-2 border-stroke rounded-lg p-2 px-3 h-fit cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-muted/50" height="16px" width="16px" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grow">
                    <div className="text-end font-semibold text-2xl md:text-4xl">
                        Наши научные <br />
                        публикаций
                    </div>
                    <div className="flex justify-end mt-6">
                        <div className="flex gap-4 items-center py-2 px-4 bg-background border-2 border-stroke rounded-lg cursor-pointer w-fit">
                            <div className="text-muted font-medium">
                                Посмотреть
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-muted w-5 h-5" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Public;