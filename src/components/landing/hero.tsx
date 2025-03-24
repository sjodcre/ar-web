import { Link } from "react-router-dom"
import { ArrowRight, Database, Cpu } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 particle-container relative">
      <div className="grid-lines"></div>
      <div className="digital-rain"></div>
      <div className="hero-glow"></div>
      {/* <div className="network-nodes"></div> */}
      <div className="blockchain-pattern"></div>

      <div className="container relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
              <span className="text-secondary">Documentation</span>
              <span className="mx-2 h-1 w-1 rounded-full bg-secondary"></span>
              <span>v1.0.0</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                <span className="gradient-text">Arweave & AO</span>
                <br />
                <span>The Permanent Computer</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore the decentralized storage network and computational platform that offers permanent data storage
                and execution.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get Started
              </Link>
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary to-accent opacity-20 blur-3xl"></div>
              <div className="absolute inset-10 rounded-full bg-card/80 shadow-2xl border border-muted"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-2 p-4">
                    <Database className="h-12 w-12 text-secondary" />
                    <div className="text-xl font-bold">Arweave</div>
                    <div className="text-sm text-muted-foreground">Permanent Storage</div>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4">
                    <Cpu className="h-12 w-12 text-accent" />
                    <div className="text-xl font-bold">AO</div>
                    <div className="text-sm text-muted-foreground">The Computer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
