import { Footer } from "@/components/ui/Footer"
import { Albuns } from "@/components/ui/Albuns"
import { Sidebar } from "@/components/ui/Siderbar"
import { Recomend } from "@/components/ui/Recomend"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

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

          <Albuns />

          <h2 className="font-semibold text-2xl mt-10">Músicas que estão com saudades</h2>

          <Recomend />
        </main>
      </div>

      <Footer />
    </div>
  )
}