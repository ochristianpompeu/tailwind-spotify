import {
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
import Image from "next/image";

export default function Footer() {
  return (
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
  );
}
