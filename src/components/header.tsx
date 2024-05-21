import { GitlabIcon } from "lucide-react"
import NextLink from 'next/link'
import { ReactNode } from "react"
import ThemeButton from "./themeButton"

const Header = (): ReactNode => (
  <div className="flex w-full shadow-lg p-4 lg:py-6 md:px-8 items-center justify-between bg-slate-200 dark:bg-slate-950/50">
    <NextLink href="/">
      <GitlabIcon size={36} color="red" />
    </NextLink>
    <ThemeButton />
  </div>
)

export default Header