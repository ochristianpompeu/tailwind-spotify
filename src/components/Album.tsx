import { Play } from "../assets/icons";
import Image from "next/image";

export default function Album() {
  return (
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
  );
}
