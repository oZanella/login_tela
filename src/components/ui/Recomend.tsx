import Image from "next/image"

export function Recomend() {
  return (
    <div className="grid grid-cols-8 gap-4 mt-4 ">
      <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
        <Image src="/ana_castela.png" className="w-full " width={104} height={104} alt="Ana Castela" />
        <strong className="font-semibold">Ana Castela</strong>
        <span className="text-sm text-zinc-400">This is Ana Castela</span>
      </a>
      <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
        <Image src="/mix_pop.png" className="w-full " width={104} height={104} alt="Mix pop" />
        <strong className="font-semibold">Mix Pop</strong>
        <span className="text-sm text-zinc-400">Coldplay, Image Dragons, Twenty One Pilots</span>
      </a>
      <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
        <Image src="/hip_hop.png" className="w-full " width={104} height={104} alt="Mix Hip Hop" />
        <strong className="font-semibold">Mix Hip Hop</strong>
        <span className="text-sm text-zinc-400">Eminem, Akon, Luiz Lins e mais</span>
      </a>
      <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
        <Image src="/mtg_2024.png" className="w-full " width={104} height={104} alt="MTG 2024" />
        <strong className="font-semibold">MTG 2024</strong>
        <span className="text-sm text-zinc-400">slc</span>
      </a>
      <a href="#" className="bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10">
        <Image src="/vulgo_funk.png" className="w-full " width={104} height={104} alt="Vulgo FK" />
        <strong className="font-semibold">Vulgo FK</strong>
        <span className="text-sm text-zinc-400">Com kayBlack, MC PH, Teto e mais</span>
      </a>
    </div>
  )
}