// // import { Navbar } from "@/components/navbar"
// import { Button } from "@/components/ui/button"
// export default function Home() {
//     return (
//         <main className="min-h-screen bg-black text-white">
//             {/* <Navbar /> */}
//             {/* Hero Section */}
//             <div className="relative overflow-hidden">
//                 {/* Gradient decorations */}
//                 <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 blur-[120px] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
//                 <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 blur-[120px] rounded-full transform translate-x-1/2 translate-y-1/2" />

import CodeExample from "@/components/landing/code-example";
import Community from "@/components/landing/community";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";

//                 {/* Content */}
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
//                     <div className="text-center">
//                         <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-transparent bg-clip-text">
//                             Powerful for developers.
//                             <br />
//                             Fast for everyone.
//                         </h1>
//                         <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
//                             Build on the world's first computational storage network. AO brings unlimited compute to Arweave's
//                             permanent storage.
//                         </p>
//                         <div className="flex justify-center gap-4">
//                             <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
//                                 START BUILDING
//                             </Button>
//                             <Button size="lg" variant="outline">
//                                 RESOURCES
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Partners Section */}
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//                 <p className="text-center text-sm text-blue-500 tracking-wider mb-12">
//                     POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
//                 </p>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
//                     {/* Replace with actual partner logos */}
//                     {Array.from({ length: 8 }).map((_, i) => (
//                         <div key={i} className="h-12 w-32 bg-white/10 rounded" />
//                     ))}
//                 </div>
//             </div>
//         </main >


//     )
// }

// import { Button } from "@/components/ui/button"
// import { ArrowRight, Code, Database, Zap, Globe, Lock, Layers } from "lucide-react"
// import Link from "next/link"

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         {/* Gradient decorations */}
//         <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 blur-[120px] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
//         <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-purple-500/20 blur-[120px] rounded-full transform translate-x-1/2 translate-y-1/2" />

//         {/* Content */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
//           <div className="text-center">
//             <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-transparent bg-clip-text">
//               Powerful for developers.
//               <br />
//               Fast for everyone.
//             </h1>
//             <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
//               Build on the world's first computational storage network. AO brings unlimited compute to Arweave's
//               permanent storage.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
//                 START BUILDING
//               </Button>
//               <Button size="lg" variant="outline">
//                 RESOURCES
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Partners Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <p className="text-center text-sm text-blue-500 tracking-wider mb-12">
//           POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
//           {/* Replace with actual partner logos */}
//           {Array.from({ length: 8 }).map((_, i) => (
//             <div key={i} className="h-12 w-32 bg-white/10 rounded" />
//           ))}
//         </div>
//       </div>

//       {/* Key Features Section */}
//       <div className="relative py-24">
//         {/* Subtle background decoration */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(67,56,202,0.15),transparent_50%)]"></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Build on AO?</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               AO combines permanent storage with unlimited compute to create the foundation for truly permanent
//               applications.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Database className="h-8 w-8 text-purple-500" />,
//                 title: "Permanent Storage",
//                 description: "Data stored on Arweave is truly permanent, with a one-time payment for eternal storage.",
//               },
//               {
//                 icon: <Code className="h-8 w-8 text-blue-500" />,
//                 title: "Universal Compute",
//                 description:
//                   "AO provides a universal compute environment with permissionless scheduling and composable processes.",
//               },
//               {
//                 icon: <Zap className="h-8 w-8 text-teal-500" />,
//                 title: "Message-Based Architecture",
//                 description:
//                   "Build applications using a message-based architecture for maximum flexibility and composability.",
//               },
//               {
//                 icon: <Globe className="h-8 w-8 text-purple-500" />,
//                 title: "Decentralized Network",
//                 description:
//                   "Join a global network of nodes that ensure your applications run forever, without central points of failure.",
//               },
//               {
//                 icon: <Lock className="h-8 w-8 text-blue-500" />,
//                 title: "Cryptographic Capabilities",
//                 description: "Leverage built-in cryptographic primitives for secure, verifiable computation.",
//               },
//               {
//                 icon: <Layers className="h-8 w-8 text-teal-500" />,
//                 title: "Composable Processes",
//                 description:
//                   "Build applications that can interact with and build upon each other in a permissionless environment.",
//               },
//             ].map((feature, i) => (
//               <div
//                 key={i}
//                 className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all"
//               >
//                 <div className="bg-black/40 p-3 rounded-lg inline-block mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-400">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Documentation Quick Links */}
//       {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Documentation</h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//             Everything you need to build on AO and Arweave, from getting started guides to advanced concepts.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           <Link href="/docs/getting-started" className="group">
//             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 group-hover:border-purple-500/50 transition-all h-full">
//               <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
//                 Getting Started
//               </h3>
//               <p className="text-gray-400 mb-6">
//                 Learn the basics of AO and Arweave, set up your development environment, and build your first
//                 application.
//               </p>
//               <div className="flex items-center text-purple-500 font-medium">
//                 <span>Explore guides</span>
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </div>
//             </div>
//           </Link>

//           <Link href="/docs/concepts" className="group">
//             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 group-hover:border-blue-500/50 transition-all h-full">
//               <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">Core Concepts</h3>
//               <p className="text-gray-400 mb-6">
//                 Understand the fundamental concepts behind AO and Arweave, including the blockweave, processes, and
//                 messages.
//               </p>
//               <div className="flex items-center text-blue-500 font-medium">
//                 <span>Learn more</span>
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </div>
//             </div>
//           </Link>

//           <Link href="/docs/tutorials" className="group">
//             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 group-hover:border-teal-500/50 transition-all h-full">
//               <h3 className="text-2xl font-semibold mb-4 group-hover:text-teal-400 transition-colors">Tutorials</h3>
//               <p className="text-gray-400 mb-6">
//                 Step-by-step tutorials to help you build real-world applications on AO and Arweave.
//               </p>
//               <div className="flex items-center text-teal-500 font-medium">
//                 <span>View tutorials</span>
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </div>
//             </div>
//           </Link>

//           <Link href="/docs/api-reference" className="group">
//             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 group-hover:border-purple-500/50 transition-all h-full">
//               <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
//                 API Reference
//               </h3>
//               <p className="text-gray-400 mb-6">
//                 Comprehensive API documentation for AO and Arweave, including examples and usage guidelines.
//               </p>
//               <div className="flex items-center text-purple-500 font-medium">
//                 <span>Explore API</span>
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div> */}

//       {/* Code Example Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-6">Simple to Use, Powerful to Build With</h2>
//             <p className="text-xl text-gray-400 mb-8">
//               AO's intuitive API makes it easy to get started while providing the power and flexibility you need for
//               complex applications.
//             </p>
//             <ul className="space-y-4">
//               {[
//                 "Write in familiar languages like JavaScript and Lua",
//                 "Message-based architecture for intuitive development",
//                 "Built-in cryptographic primitives",
//                 "Composable with existing AO processes",
//               ].map((item, i) => (
//                 <li key={i} className="flex items-start">
//                   <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3 mt-0.5">
//                     <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <span className="text-gray-300">{item}</span>
//                 </li>
//               ))}
//             </ul>
//             <Button className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white">View Documentation</Button>
//           </div>

//           <div className="bg-black/60 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
//             <div className="flex items-center bg-white/5 px-4 py-2 border-b border-white/10">
//               <div className="flex space-x-2">
//                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//               </div>
//               <div className="ml-4 text-gray-400 text-sm">example.js</div>
//             </div>
//             <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
//               <code>{`// Create a new AO process
// import { createDataItemSigner } from "@permaweb/aoconnect";
// import { createProcess } from "@permaweb/ao-client";

// // Initialize the signer with your wallet
// const signer = createDataItemSigner(wallet);

// // Create a new process
// const process = await createProcess({
//   scheduler: "https://scheduler.ao.arweave.dev",
//   signer,
//   tags: [
//     { name: "App-Name", value: "My-AO-App" },
//     { name: "Content-Type", value: "application/json" }
//   ],
//   data: JSON.stringify({
//     // Initial process state
//     counter: 0
//   })
// });

// console.log(\`Process created with ID: \${process.id}\`);

// // Send a message to the process
// const result = await process.message({
//   tags: [{ name: "Action", value: "Increment" }],
//   data: JSON.stringify({ amount: 1 })
// });

// console.log(\`New state: \${result.data}\`);`}</code>
//             </pre>
//           </div>
//         </div>
//       </div>

//       {/* Community Section */}
//       <div className="relative py-24">
//         {/* Subtle background decoration */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.15),transparent_50%)]"></div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join the Community</h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
//             Connect with developers, ask questions, and contribute to the growing AO and Arweave ecosystem.
//           </p>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { name: "Discord", color: "bg-indigo-500" },
//               { name: "Twitter", color: "bg-blue-500" },
//               { name: "GitHub", color: "bg-gray-700" },
//               { name: "Forum", color: "bg-teal-500" },
//             ].map((platform, i) => (
//               <div key={i} className="flex flex-col items-center">
//                 <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mb-4`}>
//                   <span className="text-white text-2xl font-bold">{platform.name.charAt(0)}</span>
//                 </div>
//                 <h3 className="text-lg font-medium">{platform.name}</h3>
//               </div>
//             ))}
//           </div>

//           <Button size="lg" variant="outline" className="mt-12">
//             JOIN THE COMMUNITY
//           </Button>
//         </div>
//       </div>

//       {/* Newsletter Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 md:p-12">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
//               <p className="text-gray-400 mb-6">
//                 Subscribe to our newsletter to receive the latest updates, tutorials, and announcements about AO and
//                 Arweave.
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//               <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white whitespace-nowrap">
//                 Subscribe
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       {/* <footer className="border-t border-white/10 mt-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-lg font-semibold mb-4">AO</h3>
//               <p className="text-gray-400 text-sm">
//                 The world's first computational storage network, bringing unlimited compute to Arweave's permanent
//                 storage.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-4">Documentation</h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li>
//                   <Link href="/docs/getting-started" className="hover:text-white transition-colors">
//                     Getting Started
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/docs/concepts" className="hover:text-white transition-colors">
//                     Core Concepts
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/docs/tutorials" className="hover:text-white transition-colors">
//                     Tutorials
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/docs/api-reference" className="hover:text-white transition-colors">
//                     API Reference
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-4">Community</h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Discord
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Twitter
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     GitHub
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Forum
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold mb-4">Resources</h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Ecosystem
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Partners
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-white transition-colors">
//                     Roadmap
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AO & Arweave. All rights reserved.</p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Terms
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Privacy
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Cookies
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer> */}
//     </main>
//   )
// }

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <CodeExample />
            <Community />
        </>
    )

}