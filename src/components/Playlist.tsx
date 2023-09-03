import Image from "next/image";

export default function Playlist() {
  return (
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
  );
}
