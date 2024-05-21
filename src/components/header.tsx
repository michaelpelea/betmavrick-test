import { GitlabIcon } from "lucide-react"
import NextLink from 'next/link'
import { ReactNode } from "react"
import RTLButton from "./rtlButton"
import ThemeButton from "./themeButton"

const Header = (): ReactNode => (
  <div className="flex w-full shadow-lg p-4 lg:py-6 md:px-8 items-center justify-between bg-slate-200 dark:bg-slate-950/50">
    <NextLink href="/">
      <GitlabIcon size={36} color="red" />
    </NextLink>
      <div className="gap-4 flex items-center">
        <RTLButton />
        <ThemeButton />
      </div>
  </div>
)

export default Header