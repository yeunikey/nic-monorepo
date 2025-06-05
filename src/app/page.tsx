'use client'

import Hero from "@/pages/home/Hero";
import News from "@/pages/home/News";
import Partners from "@/pages/home/Partners";
import Program from "@/pages/home/Program";
import Public from "@/pages/home/Public";
import Team from "@/pages/home/Team";

export default function Home() {
  return (
    <div className="**:transition-all **:duration-300 **:ease-in-out">
      <Hero />

      <div className="py-16 bg-white border-t-stroke border-b-stroke border-t-2 border-b-2">
        <div className="text-lg md:text-xl font-semibold w-[95dvw] md:w-2xl mx-auto text-center">
          Разработка системы прогнозирования катастрофических паводков в Восточно-Казахстанской области с применением данных ДЗЗ, ГИС-технологий и машинного обучения (ИРН BR24992899)
        </div>
      </div>

      <Program />
      <Public />
      <News />
      <Team />
      <Partners />
    </div>
  );
}
