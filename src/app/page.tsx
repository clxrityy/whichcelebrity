import { colors } from "@/constants/colors"
import { robotoFlex } from "@/constants/fonts"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="container flex flex-col items-center justify-center space-y-14 lg:space-y-20">
        <h1>
          Which Celebrity Are You?
        </h1>
        <Link href='/quiz'>
          <button style={{ backgroundColor: colors.purple2 }} className={`p-6 lg:p-8 rounded-lg font-semibold hover:scale-110 transition-all hover:rounded-xl shadow-inner active:outline outline-2 active:rounded-2xl active:scale-125 ${robotoFlex.className}`}>
            <h2 className="drop-shadow-2xl">
              Start Quiz
            </h2>
          </button>
        </Link>
      </div>
    </main>
  )
}
