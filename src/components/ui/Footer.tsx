import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume2, Maximize2 } from "lucide-react"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/matue_gorila.png" className="rounded-sm" width={60} height={60} alt="Capa L7NNNON" />
        <div className="flex flex-col">
          <strong className="font-normal">Gorilla Roxo</strong>
          <span className="text-xs text-zinc-400">Matuê</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />

          <button className="w-10 h-10 flex items-center justify-center pl-0.95 rounded-full bg-white text-black transition-colors duration-500 ease-in-out hover:bg-zinc-200 hover:scale-105">
            <PlayArrowIcon />
          </button>

          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:54</span>

          <div className="h-1 rounded-full w-96 bg-zinc-600 ">
            <div className="bg-zinc-200 h-1 w-20 rounded-md" ></div>
          </div>

          <span className="text-xs text-zinc-400">2:45</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className=" flex items-center gap-4 ">
          <Volume2 size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600 ">
            <div className="bg-zinc-200 h-1 w-20 rounded-md" ></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}