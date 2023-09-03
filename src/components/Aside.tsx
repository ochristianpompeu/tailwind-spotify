import LibraryList from "./LibraryList";
import Options from "./Options";
import Pages from "./Pages";

export default function Aside() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <Options />
      <Pages />
      <LibraryList />
    </aside>
  );
}
