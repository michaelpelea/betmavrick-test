"use client"

import { ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from "react"

const CryptoIcon = ({ name }: {name: string}) => {
  const [iconProps, setIconProps] = useState(null)

  useEffect(() => {
    const getData = async () => {
      console.log('loading useeffect')
      try {
        const data = (await import(`cryptocurrency-icons/svg/icon/${name.toLowerCase()}.svg`)).default

        setIconProps(data)
      }
      catch {
        setIconProps(null)
      }
    }

    getData()
  }, [name])

  console.log('CryptoIcon icons', name, iconProps)

  return iconProps ? (
    <Image {...iconProps} alt={`${name} icon`} />
  ) : <div className="w-8 h-8 flex items-center justify-center bg-white text-gray-500 border-gray-500 border rounded-full"><ImageIcon size={16} /></div>
}

export default CryptoIcon