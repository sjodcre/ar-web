import { Database, Cpu, Network, Clock } from "lucide-react"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative">
      <div className="blockchain-pattern"></div>
      {/* <div className="network-nodes"></div> */}

      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-secondary">Core Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Decentralized & Permanent</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Discover the key features that make Arweave and AO revolutionary technologies.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md">
            <div className="rounded-full bg-secondary/10 p-4">
              <Database className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Permanent Storage</h3>
            <p className="text-center text-muted-foreground">
              Store data permanently on the Arweave network with a single upfront payment.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md">
            <div className="rounded-full bg-secondary/10 p-4">
              <Cpu className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">AO Computation</h3>
            <p className="text-center text-muted-foreground">
              Execute code on the decentralized AO computer with guaranteed persistence.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md">
            <div className="rounded-full bg-secondary/10 p-4">
              <Network className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Decentralized</h3>
            <p className="text-center text-muted-foreground">
              Fully distributed network with no central points of failure or control.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md">
            <div className="rounded-full bg-secondary/10 p-4">
              <Clock className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Endowment</h3>
            <p className="text-center text-muted-foreground">
              Pay once for permanent storage through the endowment mechanism.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

