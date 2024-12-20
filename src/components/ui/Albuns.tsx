import { Play } from "lucide-react"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Image from "next/image"

export function Albuns() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4"> {/*Albuns do main */}
      <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
        <Image src="/L7.png" width={104} height={104} alt="Capa L7NNNON" />
        <strong>L7NNNON</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-colors duration-500 ease-in-out hover:bg-green-400 hover:scale-105">
          <PlayArrowIcon />
        </button>
      </a>
      <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
        <Image src="/imagine_dragons.png" width={104} height={104} alt="Capa Imagine Dragons" />
        <strong>Imagine Dragon</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-colors duration-500 ease-in-out hover:bg-green-400 hover:scale-105">
          <PlayArrowIcon />
        </button>
      </a>
      <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
        <Image src="/Eminem_.png" width={104} height={104} alt="Capa Eminem" />
        <strong>Eminem</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-colors duration-500 ease-in-out hover:bg-green-400 hover:scale-105">
          <PlayArrowIcon />
        </button>
      </a>
      <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
        <Image src="/Matuê_.png" width={104} height={104} alt="Capa Matuê" />
        <strong>Matuê</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-colors duration-500 ease-in-out hover:bg-green-400 hover:scale-105">
          <PlayArrowIcon />
        </button>
      </a>
      <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
        <Image src="/Teto.png" width={104} height={104} alt="Capa Teto" />
        <strong>Teto</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-colors duration-500 ease-in-out hover:bg-green-400 hover:scale-105">
          <PlayArrowIcon />
        </button>
      </a>
      <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
        <Image src="/Veigh.png" width={104} height={104} alt="Capa Veigh" />
        <strong>Teto</strong>
        <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible transition-colors duration-500 ease-in-out hover:bg-green-400 hover:scale-105">
          <PlayArrowIcon />
        </button>
      </a>

    </div>
  )
}