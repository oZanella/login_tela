import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10"> {/* \\espaçamento em tudo do nav y = vertical e x = horizontal\\ */}
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold  text-zinc-200">
              <Search />
              Buscar
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold  text-zinc-200">
              <Library />
              Sua biblioteca
            </a>
          </nav>

          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">L7NNON</a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">Imagine Dragons</a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">Eminem</a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">Matuê</a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">Teto</a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">Veigh</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex item-center gap-4">
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Feito para Henrique Zanella</h1>

          <div className="grid grid-cols-3 gap-4 mt-4"> {/*Albuns do main */}
            <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
              <Image src="/L7.png" width={104} height={104} alt="Capa L7NNNON" />
              <strong>L7NNNON</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
              <Image src="/imagine_dragons.png" width={104} height={104} alt="Capa Imagine Dragons" />
              <strong>Imagine Dragon</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
              <Image src="/Eminem_.png" width={104} height={104} alt="Capa Eminem" />
              <strong>Eminem</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
              <Image src="/Matuê_.png" width={104} height={104} alt="Capa Matuê" />
              <strong>Matuê</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
              <Image src="/Teto.png" width={104} height={104} alt="Capa Teto" />
              <strong>Teto</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 group transition-colors rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 ">
              <Image src="/Veigh.png" width={104} height={104} alt="Capa Veigh" />
              <strong>Teto</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-0.95 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

          </div>

          <h2 className="font-semibold text-2xl mt-10">Músicas que estão com saudades</h2>

          <div className="grid grid-cols-8 gap-4 mt-4 ">
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover: bg-white/10">
              <Image src="/L7.png" className="w-full" width={104} height={104} alt="Capa L7NNNON" />
              <strong className="font-semibold">CANTOR</strong>
              <span className="text-sm text-zinc-400">ARTISTAS DO ALBUM</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover: bg-white/10">
              <Image src="/L7.png" className="w-full" width={104} height={104} alt="Capa L7NNNON" />
              <strong className="font-semibold">CANTOR</strong>
              <span className="text-sm text-zinc-400">ARTISTAS DO ALBUM</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover: bg-white/10">
              <Image src="/L7.png" className="w-full" width={104} height={104} alt="Capa L7NNNON" />
              <strong className="font-semibold">CANTOR</strong>
              <span className="text-sm text-zinc-400">ARTISTAS DO ALBUM</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover: bg-white/10">
              <Image src="/L7.png" className="w-full" width={104} height={104} alt="Capa L7NNNON" />
              <strong className="font-semibold">CANTOR</strong>
              <span className="text-sm text-zinc-400">ARTISTAS DO ALBUM</span>
            </a>
            <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover: bg-white/10">
              <Image src="/L7.png" className="w-full" width={104} height={104} alt="Capa L7NNNON" />
              <strong className="font-semibold">CANTOR</strong>
              <span className="text-sm text-zinc-400">ARTISTAS DO ALBUM</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}