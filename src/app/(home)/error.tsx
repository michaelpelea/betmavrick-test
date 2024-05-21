'use client'

import { Button } from "@/components/ui/button"

 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="bg-red-200 border border-red-500 p-4 lg:p-8 space-y-4">
      <h2 className="text-lg">Something went wrong!</h2>
      {error?.message && <p>{error?.message}</p>}
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}