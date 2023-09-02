import { House, Books, MagnifyingGlass } from "../assets/icons";
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
          </nav>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
