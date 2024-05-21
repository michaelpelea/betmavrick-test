'use client'

import { cn } from "@/lib/utils"
import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"

const ThemeButton = () => {
 const [darkMode, setDarkMode] = useState<boolean>(false)

 const darkModeHandler = () => {
      setDarkMode((prevState) => !prevState);
      document.body.classList.toggle("dark");
  }

  useEffect(() => {
    const hasDarkClass = document.body.classList.contains("dark")
    setDarkMode(hasDarkClass)
  }, [])

 return (
  <div className="flex items-center justify-between space-x-4 rounded-3xl shadow-lg" onClick={darkModeHandler}>
    <div className="relative flex cursor-pointer items-center rounded-lg bg-white p-1.5 dark:bg-slate-500">
      <div className="flex gap-1.5">
        <div className={cn(darkMode && 'bg-slate-800 text-gray-50', 'p-2 rounded-md')}><MoonIcon size={16} /></div>
        <div className={cn(!darkMode && 'bg-slate-300 text-gray-900', 'p-2 rounded-md')}><SunIcon size={16} /></div>
      </div>
    </div>
  </div>
 )
}

export default ThemeButton