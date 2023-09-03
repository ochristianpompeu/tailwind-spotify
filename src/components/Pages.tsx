import { House, Books, MagnifyingGlass } from "../assets/icons";
export default function Pages() {
  return (
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
  );
}
