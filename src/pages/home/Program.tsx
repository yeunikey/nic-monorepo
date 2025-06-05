import Container from "@/components/Container";

function Program() {
    return (
        <Container className="py-24">
            <div className="text-3xl font-semibold">
                О программе
            </div>

            <div className="mt-1 text-muted">
                Программа реализуется при поддержке КН МНВО РК в рамках программно-целевого финансирования на 2024–2026 гг.
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="bg-white rounded-lg border-2 border-stroke p-5 flex flex-col">
                    <div className="test">
                        <div className="text-xl font-semibold">
                            Цель
                        </div>
                        <div className="mt-2 text-muted">
                            Создание научно обоснованной системы мониторинга и контроля динамики распределения поверхностных вод с целью создания резервных водохранилищ для ...
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end grow items-end">
                        <div className="bg-background border-2 border-stroke rounded-lg p-2 px-3 h-fit cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-muted/50" height="16px" width="16px" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg border-2 border-stroke p-5 flex flex-col">
                    <div className="test">
                        <div className="text-xl font-semibold">
                            Актуальность
                        </div>
                        <div className="mt-2 text-muted">
                            Впервые для Восточно-Казахстанской области будет предложен комплекс методик, позволяющих определять расчетные характеристики годового, максимального..
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end grow items-end">
                        <div className="bg-background border-2 border-stroke rounded-lg p-2 px-3 h-fit cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-muted/50" height="16px" width="16px" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg border-2 border-stroke p-5 flex flex-col">
                    <div className="test">
                        <div className="text-xl font-semibold">
                            Задачи
                        </div>
                        <div className="mt-2 text-muted">
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

            </div>
        </Container>
    );
}

export default Program;