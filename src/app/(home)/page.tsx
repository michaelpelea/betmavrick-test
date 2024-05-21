import CryptoIcon from "@/components/cryptoIcon";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";
import { getCryptoData } from "./actions";

const CryptoCards = async () => {
  const {currency, rates} = await getCryptoData()

  return rates.length ? rates.map(({name, value}) => (
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="flex space-x-4 items-center">
              <Suspense>
                <CryptoIcon name={name} />
              </Suspense>
              <h2 className="font-bold text-xl md:text-2xl">{name}/{currency}</h2>
            </div>
            <p className="truncate">{value}</p>
          </CardContent>
        </Card>
      )
  ) : null
}

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Suspense fallback={<div>Loading...</div>}>
            <CryptoCards />
          </Suspense>
      </div>
    </main>
  );
}
