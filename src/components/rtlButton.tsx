'use client'

import { cn } from "@/lib/utils"
import { PilcrowLeftIcon, PilcrowRightIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

const RTLButton = () => {
  const [isRTL, setIsRTL] = useState<boolean>(false)

  useEffect(() => {
    document.body.dir = isRTL ? 'rtl' : 'ltr'
  }, [isRTL])

  return (
    <Button onClick={() => setIsRTL((prevState) => !prevState)} variant="ghost" className={cn('bg-white dark:bg-slate-500 shadow-lg')}>{isRTL ? <PilcrowRightIcon /> : <PilcrowLeftIcon />}</Button>
  )
}

export default RTLButton