import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 lg:py-20 border-t border-border">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold gradient-text">Arweave & AO</div>
            <p className="text-muted-foreground">
              The permanent storage network and computational platform for the decentralized web.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <Link to="#" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link to="#" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="#" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-2">Documentation</h3>
              <ul className="grid gap-2">
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    SDK Documentation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Resources</h3>
              <ul className="grid gap-2">
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arweave & AO. All rights reserved.
          </p>
          {/* <Link
            to="/"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Back to top <ArrowRight className="ml-2 h-4 w-4" />
          </Link> */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Back to top <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
