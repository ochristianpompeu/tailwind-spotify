import Image from "next/image";
import {
  House,
  Books,
  MagnifyingGlass,
  CaretLeft,
  CaretRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  MonitorPlay,
  MicrophoneStage,
  Rows,
  Devices,
  SpeakerLow,
  ArrowsOutSimple,
} from "../assets/icons";
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <House weight="fill" size={20} />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <MagnifyingGlass size={20} />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Books size={20} />
              Your library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Minha Devoção
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Contra a Corrente
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Angústrias
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Amnésia
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              aMelhorBandaDeTodosOsTempos
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 mt-4">
            <button className="rounded-full bg-black/40 p-1">
              <CaretLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <CaretRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Boa noite</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors group"
            >
              <Image
                width={104}
                height={104}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
              />
              <strong>Ainda Não é o Último</strong>
              <button className="rounded-full p-3 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play weight="fill" size={20} />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors group"
            >
              <Image
                width={104}
                height={104}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
              />
              <strong>Ainda Não é o Último</strong>
              <button className="rounded-full p-3 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play weight="fill" size={20} />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors group"
            >
              <Image
                width={104}
                height={104}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
              />
              <strong>Ainda Não é o Último</strong>
              <button className="rounded-full p-3 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play weight="fill" size={20} />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors group"
            >
              <Image
                width={104}
                height={104}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
              />
              <strong>Ainda Não é o Último</strong>
              <button className="rounded-full p-3 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play weight="fill" size={20} />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors group"
            >
              <Image
                width={104}
                height={104}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
              />
              <strong>Ainda Não é o Último</strong>
              <button className="rounded-full p-3 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play weight="fill" size={20} />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors group"
            >
              <Image
                width={104}
                height={104}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
              />
              <strong>Ainda Não é o Último</strong>
              <button className="rounded-full p-3 bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play weight="fill" size={20} />
              </button>
            </a>
          </div>

          <h2 className="font-semibosm text-2xl m4000">Feito para Você</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix</strong>
              <span className="text-sm text-zinc-400">
                Artista, artista, artista, artista
              </span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix</strong>
              <span className="text-sm text-zinc-400">
                Artista, artista, artista, artista
              </span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix</strong>
              <span className="text-sm text-zinc-400">
                Artista, artista, artista, artista
              </span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix</strong>
              <span className="text-sm text-zinc-400">
                Artista, artista, artista, artista
              </span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                src={"/AindaNaoEhOUltimo.png"}
                alt="Imagem da playlist"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix</strong>
              <span className="text-xs text-zinc-500">
                Artista, artista, artista, artista
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            width={56}
            height={56}
            src={"/AindaNaoEhOUltimo.png"}
            alt="Imagem da playlist"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Eles precisam saber</strong>
            <span className="text-xs text-zinc-400">Resgate</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle weight="bold" className="text-zinc-200" />
            <SkipBack weight="bold" className="text-zinc-200" />
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black">
              <Play weight="fill" />
            </button>
            <SkipForward weight="bold" className="text-zinc-200" />
            <Repeat weight="bold" className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">1:21</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full bg-zinc-200 w-40"></div>
            </div>
            <span className="text-xs text-zinc-400">4:17</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <MonitorPlay weight="bold" className="text-zinc-200" />
          <MicrophoneStage weight="bold" className="text-zinc-200" />
          <Rows weight="bold" className="text-zinc-200" />
          <Devices weight="bold" className="text-zinc-200" />
          <div className="flex items-center gap-2">
            <SpeakerLow weight="bold" className="text-zinc-200" />
            <div className="h-1 rounded-full w-16 bg-zinc-600">
              <div className="h-1 rounded-full bg-zinc-200 w-4"></div>
            </div>
          </div>
          <ArrowsOutSimple />
        </div>
      </footer>
    </div>
  );
}
