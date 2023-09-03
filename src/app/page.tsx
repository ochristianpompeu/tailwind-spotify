import Image from "next/image";
import {
  House,
  Books,
  MagnifyingGlass,
  CaretLeft,
  CaretRight,
  Play,
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
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
