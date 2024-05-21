'use server'

export async function getCryptoData() {
  const res = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=EUR')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const returnData = await res.json()
  const ratesData = returnData.data.rates
  // convert object to array for easier consumption on FE
  const rates = Object.keys(ratesData).map((key) => ({ name: key, value: ratesData[key] }))

  return {
    currency: returnData.data.currency,
    rates
  }
}