import Image from "next/image"
export function Recomend() {
  return (
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
  )
}