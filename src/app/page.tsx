import Container from "@/components/Container";
import Link from "next/link";
import { cn } from "@/utils/utils";

export default function Home() {
  return (
    <div className="**:transition-all **:duration-300 **:ease-in-out">

      {/* Header */}
      <header className="py-3 border-b-stroke border-b-2 bg-white">
        <Container className="flex gap-6">

          <div className="flex gap-16 items-center">

            <Link className="text-lg font-semibold cursor-pointer text-nowrap" href={'/'}>
              Flood Analytics
            </Link>

            <div className="px-4 flex gap-4 rounded-lg border-stroke border-2 items-center w-72 bg-background">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#999] h-5 w-5" viewBox="0 -960 960 960">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>

              <input className="text-[#999] text-sm py-2 w-full focus:outline-none" placeholder="Поиск по сайту" />
            </div>

          </div>

          <div className="grow flex gap-8 items-center justify-end">
            <div className="flex gap-8 h-full">
              <Item text="Главная" />
              <Item text="О программе" />
              <Item text="Новости" />
              <Item text="Публикаций" />
              <Item text="Команда" />
              <Item text="Контакты" />
            </div>

            <div className="flex items-center gap-2 cursor-pointer py-2 px-3 rounded-lg hover:bg-background">
              <img className="h-5 w-5 rounded-full" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png" alt="russia flag" />

              <div className="font-medium text-sm">
                RU
              </div>
            </div>
          </div>

        </Container>
      </header>

      {/* Hero */}
      <div className="relative pt-48 pb-96 w-3xl mx-auto overflow-hidden">
        <div className="font-semibold text-4xl text-center">
          Flood Analytics
        </div>
        <div className="mt-4 text-center text-[#999]">
          ГИС-сервис, обеспечивающий доступ к моделированию сценариев паводков для оценки воздействия экстремальных погодных условий на водосборные бассейны на территории ВКО
        </div>

        <div className="mt-6 flex gap-6 justify-center">
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

        <div className="absolute -bottom-24 flex justify-center w-full">
          <img className="" src="/hero-image.png" alt="hero image" />
        </div>
      </div>

      {/* Program */}
      <div className="py-16 bg-white border-t-stroke border-b-stroke border-t-2 border-b-2">
        <div className="text-xl font-semibold w-2xl mx-auto text-center">
          Разработка системы прогнозирования катастрофических паводков в Восточно-Казахстанской области с применением данных ДЗЗ, ГИС-технологий и машинного обучения (ИРН BR24992899)
        </div>
      </div>

      <Container className="py-24">
        <div className="text-3xl font-semibold">
          О программе
        </div>

        <div className="mt-1 text-muted">
          Программа реализуется при поддержке КН МНВО РК в рамках программно-целевого финансирования на 2024–2026 гг.
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
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

      <div className="py-48 bg-white overflow-hidden">
        <div className="mx-auto w-6xl flex relative">

          <div className="absolute -top-64 left-0">
            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-lg border-2 border-stroke p-5 flex flex-col w-lg">
                <div className="">
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
              <div className="bg-white rounded-lg border-2 border-stroke p-5 flex flex-col w-lg">
                <div className="">
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
              <div className="bg-white rounded-lg border-2 border-stroke p-5 flex flex-col w-lg">
                <div className="">
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
          </div>

          <div className="grow">
            <div className="text-end font-semibold text-4xl">
              Наши научные <br />
              публикаций
            </div>
            <div className="flex justify-end mt-6">
              <div className="flex gap-4 items-center py-2 px-4 bg-background border-2 border-stroke rounded-lg cursor-pointer w-fit">
                <div className="text-muted font-medium">
                  Посмотреть публикаций
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-muted w-5 h-5" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container className="py-24">
        <div className="text-3xl font-semibold text-center">
          Последние новости
        </div>

        <div className="mt-1 text-muted text-center">
          Последние новости нашей программы
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
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
      </Container>

      

    </div >
  );
}

function Item({ text }: { text: string }) {
  return (
    <div className="relative">
      <div className={cn("text-sm text-[#999] cursor-pointer flex h-full items-center text-nowrap", text == "Главная" ? "text-black" : "")}>
        {text}
      </div>
      {text == "Главная" && (
        <div className="absolute w-full h-1 bg-primary -bottom-3 rounded-t-lg" />
      )}
    </div>
  )
}
