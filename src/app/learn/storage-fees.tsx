import { useEffect, useState } from "react"
import { ArrowUpRight, Loader2 } from "lucide-react"

export default function StorageFeesPage() {
    const [price, setPrice] = useState<number | null>(null)
    const [costPerMB, setCostPerMB] = useState<string | null>(null)
    const [costPerGB, setCostPerGB] = useState<string | null>(null)
    const [costPerTB, setCostPerTB] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     async function fetchData() {
    //         setLoading(true)
    //         try {
    //             // Fetch AR price in USD
    //             const priceRes = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=arweave&vs_currencies=usd")
    //             const priceData = await priceRes.json()
    //             const arPrice = priceData.arweave.usd

    //             // Fetch storage costs for 1MB, 1GB, and 1TB
    //             const [winstonPerMB, winstonPerGB, winstonPerTB] = await Promise.all([
    //                 fetch("https://arweave.net/price/1048576").then(res => res.text()), // 1 MB = 1,048,576 bytes
    //                 fetch("https://arweave.net/price/1073741824").then(res => res.text()), // 1 GB = 1,073,741,824 bytes
    //                 fetch("https://arweave.net/price/1099511627776").then(res => res.text()), // 1 TB = 1,099,511,627,776 bytes
    //             ])

    //             setPrice(arPrice)
    //             setCostPerMB(winstonPerMB)
    //             setCostPerGB(winstonPerGB)
    //             setCostPerTB(winstonPerTB)
    //         } catch (err) {
    //             console.error("Error fetching storage price:", err)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     fetchData()
    // }, [])

    useEffect(() => {
        async function fetchData() {
          setLoading(true);
          try {
            const res = await fetch("https://ao-arweave.com/api/storage-fees"); // or http://localhost:5000 during dev
            const data = await res.json();
      
            setPrice(data.price);
            setCostPerMB(data.costPerMB);
            setCostPerGB(data.costPerGB);
            setCostPerTB(data.costPerTB);
          } catch (err) {
            console.error("Error fetching from backend:", err);
          } finally {
            setLoading(false);
          }
        }
      
        fetchData();
      }, []);

    return (
        <div className="max-w-3xl mx-auto py-20 px-6 text-center">
            <h1 className="text-3xl font-bold mb-6 text-secondary">📦 Arweave Storage Fees</h1>

            {loading ? (
                <div className="flex justify-center items-center space-x-2 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Fetching live data...</span>
                </div>
            ) : (
                <>
                    <div className="bg-card border border-border p-6 rounded-lg shadow-md text-left space-y-4">
                        <div>
                            <h2 className="text-lg font-semibold">Current AR Price (USD)</h2>
                            <p className="text-xl font-bold text-primary">${price?.toFixed(4)}</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Estimated Cost for 1MB</h2>
                            <p className="text-xl font-bold text-accent">{(Number(costPerMB) / 1e12).toFixed(8)} AR</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Estimated Cost for 1GB</h2>
                            <p className="text-xl font-bold text-accent">{(Number(costPerGB) / 1e12).toFixed(8)} AR</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Estimated Cost for 1TB</h2>
                            <p className="text-xl font-bold text-accent">{(Number(costPerTB) / 1e12).toFixed(8)} AR</p>
                        </div>
                        <p className="text-sm text-muted-foreground pt-2">
                            Storage costs on Arweave are dynamic — cached approximately every 1 hour based on network conditions, demand, and AR market prices.
                            This helps prevent spam of API calls, and ensures fair, up-to-date pricing. Large market shifts can cause noticeable changes in storage fees.
                            The prices shown are live estimates and may fluctuate over time.
                        </p>
                    </div>


                    <div className="mt-8">
                        <h3 className="text-md font-semibold mb-2">🔗 References</h3>
                        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-2">
                            <li>
                                <a
                                    href="https://api.coingecko.com/api/v3/simple/price?ids=arweave&vs_currencies=usd"
                                    className="underline hover:text-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    CoinGecko API
                                    <ArrowUpRight className="inline ml-1 h-4 w-4" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://arweave.net/price/1073741824"
                                    className="underline hover:text-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Arweave Price API for 1GB
                                    <ArrowUpRight className="inline ml-1 h-4 w-4" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://55mcex7dtd5xf4c627v6hadwoq6lgw6jr4oeacqd5k2mazhunejq.arweave.net/71giX-OY-3LwXtfr44B2dDyzW8mPHEAKA-q0wGT0aRM"
                                    className="underline hover:text-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Arweave Whitepaper (Transaction Pricing Section)
                                    <ArrowUpRight className="inline ml-1 h-4 w-4" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://ar-fees.ar.io/"
                                    className="underline hover:text-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    AR.IO Fee Insights Dashboard
                                    <ArrowUpRight className="inline ml-1 h-4 w-4" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://arwiki.wiki/#/en/storage-endowment#toc_Transaction_Pricing"
                                    className="underline hover:text-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Arwiki: Storage Endowment & Transaction Pricing
                                    <ArrowUpRight className="inline ml-1 h-4 w-4" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}
