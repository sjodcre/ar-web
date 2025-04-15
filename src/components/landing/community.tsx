// import { Github, Twitter, DiscIcon as Discord, Globe } from "lucide-react"

// export default function Community() {
//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative">
//       <div className="grid-lines"></div>
//       <div className="blockchain-pattern"></div>

//       <div className="container relative z-10">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-secondary">Community</div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Ecosystem</h2>
//             <p className="max-w-[900px] text-muted-foreground md:text-xl">
//               Connect with developers and users building on Arweave and AO.
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
//           <a
//             href="#"
//             className="group flex flex-col items-center space-y-3 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md"
//           >
//             <div className="rounded-full bg-secondary/10 p-4 group-hover:bg-secondary/20 transition-colors">
//               <Github className="h-6 w-6 text-secondary" />
//             </div>
//             <h3 className="text-xl font-bold">GitHub</h3>
//             <p className="text-center text-muted-foreground">
//               Explore our open source code and contribute to the project.
//             </p>
//           </a>
//           <a
//             href="#"
//             className="group flex flex-col items-center space-y-3 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md"
//           >
//             <div className="rounded-full bg-secondary/10 p-4 group-hover:bg-secondary/20 transition-colors">
//               <Discord className="h-6 w-6 text-secondary" />
//             </div>
//             <h3 className="text-xl font-bold">Discord</h3>
//             <p className="text-center text-muted-foreground">Join our community chat to get help and share ideas.</p>
//           </a>
//           <a
//             href="#"
//             className="group flex flex-col items-center space-y-3 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md"
//           >
//             <div className="rounded-full bg-secondary/10 p-4 group-hover:bg-secondary/20 transition-colors">
//               <Twitter className="h-6 w-6 text-secondary" />
//             </div>
//             <h3 className="text-xl font-bold">Twitter</h3>
//             <p className="text-center text-muted-foreground">Follow us for the latest news and announcements.</p>
//           </a>
//           <a
//             href="#"
//             className="group flex flex-col items-center space-y-3 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md"
//           >
//             <div className="rounded-full bg-secondary/10 p-4 group-hover:bg-secondary/20 transition-colors">
//               <Globe className="h-6 w-6 text-secondary" />
//             </div>
//             <h3 className="text-xl font-bold">Forum</h3>
//             <p className="text-center text-muted-foreground">Discuss technical topics and governance proposals.</p>
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { Github, Twitter, DiscIcon as Discord } from "lucide-react"
import { Link } from "react-router-dom"

export default function Community() {
  // const navigate = useNavigate()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative">
      <div className="grid-lines"></div>
      <div className="blockchain-pattern"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-secondary">Community</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Ecosystem</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Connect with developers and users building on Arweave and AO.
            </p>
          </div>
        </div>
        <div className="mx-auto flex flex-wrap justify-center gap-8 py-12 max-w-5xl">
          {/* <a
            onClick={() => navigate("/community/resource-hub")}
            className="group cursor-pointer flex flex-col items-center space-y-3 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md w-64"
          > */}
          <Link
  to="/community/resource-hub"
  className="group cursor-pointer flex flex-col items-center space-y-3 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md w-64"
>
            <div className="rounded-full bg-secondary/10 p-4 group-hover:bg-secondary/20 transition-colors">
              <Github className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">GitHub</h3>
            <p className="text-center text-muted-foreground">
              Explore our open source code and contribute to the project.
            </p>
          {/* </a> */}
          </Link>
          <Link
            to="/community/resource-hub"
            className="group cursor-pointer flex flex-col items-center space-y-3 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md w-64"
          >
            <div className="rounded-full bg-secondary/10 p-4 group-hover:bg-secondary/20 transition-colors">
              <Discord className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Discord</h3>
            <p className="text-center text-muted-foreground">Join our community chat to get help and share ideas.</p>
          </Link>
          <Link
            to="/community/resource-hub"
            className="group cursor-pointer flex flex-col items-center space-y-3 rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-secondary hover:shadow-md w-64"
          >
            <div className="rounded-full bg-secondary/10 p-4 group-hover:bg-secondary/20 transition-colors">
              <Twitter className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">Twitter</h3>
            <p className="text-center text-muted-foreground">Follow us for the latest news and announcements.</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
