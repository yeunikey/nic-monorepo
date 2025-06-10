import Container from "@/components/Container";

function Team() {
    return (
        <>
            <div className="md:hidden py-24 bg-white">
                <Container className="flex flex-col gap-16">
                    <div className="text-center font-semibold text-3xl">
                        Научно-<br />исследовательская <br />
                        команда
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                        {Array.from({ length: 23 }).map((undefined, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="bg-background w-full aspect-[0.75]">
                                </div>
                                <div className="mt-2 font-semibold">
                                    Имя Фамилия
                                </div>
                                <div className="text-muted text-sm">
                                    Должность
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <div className="hidden md:block py-48 bg-white">
                <div className="w-full max-w-[95dvw] sm:max-w-[85dvw] md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto flex gap-2 h-full">
                    <div className="grow w-1/4">
                        <div className="sticky top-[40%] text-start font-semibold md:text-3xl lg:text-4xl">
                            Научно-<br />исследовательская <br />
                            команда
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                        {Array.from({ length: 23 }).map((undefined, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="bg-background w-full aspect-[0.75]">
                                </div>
                                <div className="mt-2 font-semibold">
                                    Имя Фамилия
                                </div>
                                <div className="text-muted text-sm">
                                    Должность
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;