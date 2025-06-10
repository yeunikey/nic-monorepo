function Hero() {
    return (
        <div className="relative pt-48 pb-64 sm:pb-72 md:pb-96 w-[95dvw] sm:w-[85dvw] md:w-3xl mx-auto overflow-hidden">
            <div className="font-semibold text-4xl text-center">
                Flood Analytics
            </div>
            <div className="mt-4 text-center text-[#999]">
                ГИС-сервис, обеспечивающий доступ к моделированию сценариев паводков для оценки воздействия экстремальных погодных условий на водосборные бассейны на территории ВКО
            </div>

            <div className="mt-6 flex flex-col items-center sm:flex-row gap-3 sm:gap-6 justify-center">
                <div className="flex gap-4 items-center py-2 px-4 bg-primary rounded-lg cursor-pointer">
                    <div className="text-white font-medium">
                        Открыть платформу
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-5 h-5" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                </div>
                <div className="flex items-center cursor-pointer gap-2">
                    <div className="text-muted">
                        видео-обзор
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-muted" viewBox="0 -960 960 960"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                </div>
            </div>

            <div className="absolute -bottom-6 sm:-bottom-20 md:-bottom-24 flex justify-center w-full">
                <img className="" src="/hero-image.png" alt="hero image" />
            </div>
        </div>
    );
}

export default Hero;