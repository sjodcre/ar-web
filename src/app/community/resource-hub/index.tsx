// "use client"

// import { type FC, useState } from "react"
// import {
//   // Twitter,
//   // Youtube,
//   // Github,
//   // TextIcon as Telegram,
//   // DiscIcon as Discord,
//   // Globe,
//   ArrowUpRight,
//   ExternalLink,
//   Database,
// } from "lucide-react"

// import { FaMedium, FaYoutube, FaDiscord, FaGithub } from 'react-icons/fa';
// import { FaXTwitter } from "react-icons/fa6";
// // import { SiMirror } from 'react-icons/si';


// const CommunityPage: FC = () => {
//   const [activeTab, setActiveTab] = useState<"arweave" | "ao">("ao")

//   return (
//     <div className="min-h-screen bg-black text-gray-100">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-cyan-900 via-teal-800 to-blue-900 py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Join Our Community</h1>
//             <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto">
//               Connect with our growing community across various platforms and stay updated with the latest news and
//               developments.
//             </p>
//           </div>
//         </div>
//         <div
//           className="absolute bottom-0 left-0 right-0 h-16 bg-black"
//           style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
//         ></div>
//       </section>

//       {/* Learn in depth & Listen to podcast section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Learn in depth card */}
//           <div className="bg-gradient-to-br from-cyan-500 to-teal-400 rounded-xl overflow-hidden relative p-10 h-80 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
//             <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=400&width=600')] opacity-10 mix-blend-overlay"></div>
//             <h2 className="text-4xl font-bold text-black">Learn in depth</h2>
//             <div>
//               <button className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center font-medium group-hover:bg-cyan-900 transition-colors duration-300">
//                 <Database className="h-4 w-4 mr-2" />
//                 EXPLORE DOCS
//               </button>
//             </div>
//           </div>

//           {/* Listen to the podcast card */}
//           <div className="bg-gradient-to-br from-blue-600 to-indigo-500 rounded-xl overflow-hidden relative p-10 h-80 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
//             <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=400&width=600')] opacity-10 mix-blend-overlay"></div>
//             <h2 className="text-4xl font-bold text-white">Listen to the podcast</h2>
//             <div>
//               <button className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center font-medium group-hover:bg-indigo-900 transition-colors duration-300">
//                 <ExternalLink className="h-4 w-4 mr-2" />
//                 GO TO PODCAST
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Wayfinding Section with Tabs */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-white mb-4">Wayfinding</h2>
//         <p className="text-cyan-400 mb-8 text-xl">Navigate the ecosystem</p>

//         {/* Tab Navigation */}
//         <div className="flex border-b border-gray-800 mb-12">
//           <button
//             className={`py-3 px-6 font-medium text-lg transition-colors duration-300 relative ${
//               activeTab === "arweave" ? "text-cyan-400" : "text-gray-400 hover:text-gray-300"
//             }`}
//             onClick={() => setActiveTab("arweave")}
//           >
//             Arweave
//             {activeTab === "arweave" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>}
//           </button>
//           <button
//             className={`py-3 px-6 font-medium text-lg transition-colors duration-300 relative ${
//               activeTab === "ao" ? "text-indigo-400" : "text-gray-400 hover:text-gray-300"
//             }`}
//             onClick={() => setActiveTab("ao")}
//           >
//             AO Computer
//             {activeTab === "ao" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400"></span>}
//           </button>
//         </div>

//         {/* Arweave Tab Content */}
//         <div className={activeTab === "arweave" ? "block" : "hidden"}>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Twitter Section */}
//             <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-lg">
//                     <FaXTwitter className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="ml-4 text-2xl font-bold text-white">X</h2>
//                 </div>
//                 <div className="space-y-6">
//                   <TwitterAccount
//                     handle1="@ArweaveEco"
//                     description="The official Twitter account for Arweave."
//                     followers1="106K+"
//                   />
//                   <TwitterAccount
//                     handle1="@onlyarweave"
//                     handle2="@permaweb_news"
//                     description="The sources for timely news updates on Arweave and AO."
//                     followers1="11K+"
//                     followers2="11K+"
//                   />
//                   <TwitterAccount
//                     handle1="@Weavers_Org"
//                     description="A dynamic community of developers and creatives within the Arweave ecosystem, currently also engaged in building on AO."
//                     followers1="4K+"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* YouTube Section */}
//             <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-lg">
//                     <FaYoutube className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="ml-4 text-2xl font-bold text-white">YouTube</h2>
//                 </div>
//                 <div className="space-y-6">
//                   <YouTubeChannel
//                     name="Arweave Official"
//                     link="https://www.youtube.com/@perma_web"
//                     description="Official Arweave + AO youtube channel."
//                     subscribers="2K+"
//                     theme="indigo"
//                   />
//                   <YouTubeChannel
//                     name="Permanent Data Solutions"
//                     link="https://www.youtube.com/@pds-inc/"
//                     description="Developing solutions for users and enterprises using Arweave."
//                     subscribers="700+"
//                   />
//                   <YouTubeChannel
//                     name="Weavers"
//                     link="https://www.youtube.com/@weavers_org"
//                     description="A community of developers & creatives in the Arweave ecosystem."
//                     subscribers="140+"
//                     theme="indigo"
//                   />
//                   <YouTubeChannel
//                     name="Arweave India "
//                     link="https://www.youtube.com/@ArweaveIndia"
//                     description="The Arweave Indian community, with tutorials and demo codes for Arweave + AO."
//                     subscribers="72+"
//                     theme="indigo"
//                   />
//                   <YouTubeChannel
//                     name="Arweave New York "
//                     link="https://www.youtube.com/@arweaveny"
//                     description="The Arweave New Yorkcommunity, with tutorials and demo codes for Arweave + AO."
//                     subscribers="9+"
//                     theme="indigo"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Discord Section */}
//             <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg">
//                     <FaDiscord className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="ml-4 text-2xl font-bold text-white">Discord</h2>
//                 </div>
//                 <div className="space-y-6">
//                     <DiscordChannel
//                         name="AO Main Discord Server"
//                         link="https://discord.com/invite/dYXtHwc9dc"
//                         description="Join our general chat to connect with community members."
//                     />
//                     <DiscordChannel
//                         name="Arweave Dev Talk"
//                         link="https://discord.gg/eQ4RKYsS"
//                         description="Get help and support from fellow developers."
//                     />
//                     <DiscordChannel
//                         name="Weavers"
//                         link="https://discord.com/invite/weavers"
//                         description="Be a weaver! Arweave + AO."
//                     />
//                     <DiscordChannel
//                         name="Arweave Hub"
//                         link=""
//                         description="Watch for upcoming fullstack hackathons on Arweave + AO!"
//                     />
//                 </div>
//               </div>
//             </div>

//             {/* GitHub Section */}
//             <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 rounded-lg">
//                     <FaGithub className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="ml-4 text-2xl font-bold text-white">GitHub</h2>
//                 </div>
//                 <p className="text-gray-400 mb-4">
//                   Explore our open-source repositories, contribute to our projects, and report issues on Arweave.
//                 </p>
//                 <a
//                   href="https://github.com/ArweaveTeam"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-gray-900"
//                 >
//                   View Arweave GitHub
//                   <ArrowUpRight className="ml-2 h-4 w-4" />
//                 </a>
//               </div>
//             </div>
//             {/* Medium Section */}
//             <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-lg">
//                     <FaMedium className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="ml-4 text-2xl font-bold text-white">Medium</h2>
//                 </div>
//                 <div className="space-y-6">
//                   <MediumChannel
//                     name="PermaDAO"
//                     description="Technical discussions and Ecosystem updates."
//                     theme="indigo"
//                     link="https://medium.com/@perma_dao"
//                   />
//                   <MediumChannel
//                     name="Weavers Medium Channel"
//                     description="Technical discussions and Ecosystem updates."
//                     theme="indigo"
//                     link="https://medium.com/@Weavers_Official"
//                   />
//                   <MediumChannel
//                     name="Open Access Supercomputing Foundation"
//                     description="Ecosystem Updates."
//                     theme="indigo"
//                     link="https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840"
//                   />
//                 </div>
//               </div>
//             </div>
           
//           </div>
//         </div>

//         {/* AO Tab Content */}
//         <div className={activeTab === "ao" ? "block" : "hidden"}>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Twitter Section */}
//             <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg">
//                     <FaXTwitter className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="ml-4 text-2xl font-bold text-white">X</h2>
//                 </div>
//                 <div className="space-y-6">
//                   <TwitterAccount
//                     handle1="@aoTheComputer"
//                     description="Official AO account for announcements and updates."
//                     followers1="49K+"
//                     theme="indigo"
//                   />
//                   <TwitterAccount
//                     handle1="@aoComputerClub"
//                     description="AO enthusiasts, sharing insights and resources, with a focus on DevBot for users building on AO."
//                     followers1="3K+"
//                     theme="indigo"
//                   />
//                   <TwitterAccount
//                     handle1="@ao_builders"
//                     description="A premier innovation hub to realize the vision of @aoTheComputer."
//                     followers1="33K+"
//                     theme="indigo"
//                   />
//                   <TwitterAccount
//                     handle1="@CommunityLabs"
//                     handle2="@aoTheVentures"
//                     description="Venture studios igniting innovation on AO & Arweave."
//                     followers1="4K+"
//                     followers2="1K+"
//                     theme="indigo"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* YouTube Section */}
//             <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-lg">
//                     <FaYoutube className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="ml-4 text-2xl font-bold text-white">YouTube</h2>
//                 </div>
//                 <div className="space-y-6">
//                   <YouTubeChannel
//                     name="The PermaWeb: AO + Arweave"
//                     link="https://www.youtube.com/@perma_web"
//                     description="Official Arweave + AO youtube channel."
//                     subscribers="2K+"
//                     theme="indigo"
//                   />
//                   <YouTubeChannel
//                     name="Permanent Data Solutions"
//                     link="https://www.youtube.com/@pds-inc/"
//                     description="Developing solutions for users and enterprises using Arweave."
//                     subscribers="700+"
//                     theme="indigo"
//                   />
//                   <YouTubeChannel
//                     name="Weavers"
//                     link="https://www.youtube.com/@Weavers_Org"
//                     description="A community of developers & creatives in the Arweave ecosystem."
//                     subscribers="140+"
//                     theme="indigo"
//                   />
//                   <YouTubeChannel
//                     name="Arweave India "
//                     link="https://www.youtube.com/@ArweaveIndia"
//                     description="The Arweave Indian community, with tutorials and demo codes for Arweave + AO."
//                     subscribers="72+"
//                     theme="indigo"
//                   />
//                   <YouTubeChannel
//                     name="Arweave New York "
//                     link="https://www.youtube.com/@arweaveny"
//                     description="The Arweave New Yorkcommunity, with tutorials and demo codes for Arweave + AO."
//                     subscribers="9+"
//                     theme="indigo"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Discord Section */}
//             <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg">
//                     <FaDiscord className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="ml-4 text-2xl font-bold text-white">Discord</h2>
//                 </div>
//                 <div className="space-y-6">
//                     <DiscordChannel
//                         name="AO Main Discord Server"
//                         link="https://discord.com/invite/dYXtHwc9dc"
//                         description="Join our general chat to connect with community members."
//                     />
//                     <DiscordChannel
//                         name="Arweave Dev Talk"
//                         link="https://discord.gg/eQ4RKYsS"
//                         description="Get help and support from fellow developers."
//                     />
//                     <DiscordChannel
//                         name="Weavers"
//                         link="https://discord.com/invite/weavers"
//                         description="Be a weaver! Arweave + AO."
//                     />
//                     <DiscordChannel
//                         name="Arweave Hub"
//                         link=""
//                         description="Watch for upcoming fullstack hackathons on Arweave + AO!"
//                     />
//                 </div>
//               </div>
//             </div>

//             {/* GitHub Section */}
//             <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 rounded-lg">
//                     <FaGithub className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="ml-4 text-2xl font-bold text-white">GitHub</h2>
//                 </div>
//                 <p className="text-gray-400 mb-4">
//                   Explore AO repositories, contribute to the codebase, and report issues.
//                 </p>
//                 <a
//                   href="https://github.com/permaweb"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-gray-900"
//                 >
//                   View AO GitHub
//                   <ArrowUpRight className="ml-2 h-4 w-4" />
//                 </a>
//               </div>
//             </div>

//             {/* Medium Section */}
//             <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-lg">
//                     <FaMedium className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="ml-4 text-2xl font-bold text-white">Medium</h2>
//                 </div>
//                 <div className="space-y-6">
//                 <MediumChannel
//                     name="PermaDAO"
//                     description="Technical discussions and Ecosystem updates."
//                     theme="indigo"
//                     link="https://medium.com/@perma_dao"
//                   />
//                   <MediumChannel
//                     name="Weavers Medium Channel"
//                     description="Technical discussions and Ecosystem updates."
//                     theme="indigo"
//                     link="https://medium.com/@Weavers_Official"
//                   />
//                   <MediumChannel
//                     name="Open Access Supercomputing Foundation"
//                     description="Ecosystem Updates."
//                     theme="indigo"
//                     link="https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// // Component for Twitter accounts
// interface TwitterAccountProps {
//   handle1: string
//   handle2?: string
//   description: string
//   followers1: string
//   followers2?: string
//   theme?: "cyan" | "indigo"
// }

// const TwitterAccount: FC<TwitterAccountProps> = ({ handle1, handle2, description, followers1, followers2, theme = "cyan" }) => {
//   return (
//     <div className="border-t border-gray-800 pt-4">
//       <h3 className={`font-semibold text-lg ${theme === "cyan" ? "text-cyan-400" : "text-indigo-400"}`}>
        
//         {handle2 ? 
//         <>
//             <a 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={`https://twitter.com/${handle1.substring(1)}`} 
//                 className="text-cyan-400 hover:text-cyan-300">{handle1}
//             </a> & 
//             <a
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 href={`https://twitter.com/${handle2.substring(1)}`} 
//                 className="text-cyan-400 hover:text-cyan-300">{handle2}
//             </a>
//         </> : 
//         <a 
//             target="_blank"
//             rel="noopener noreferrer"
//             href={`https://twitter.com/${handle1.substring(1)}`} 
//             className="text-cyan-400 hover:text-cyan-300">{handle1}
//         </a>}
//       </h3>
//       <p className="text-gray-400 mt-1">{description}</p>
//       <div className="mt-2 flex items-center justify-between">
//         <span className="text-sm text-gray-500">
//           {followers2 ? `${followers1} followers | ${followers2} followers` : `${followers1} followers`}
//         </span>
//       </div>
//     </div>
//   )
// }

// // Component for YouTube channels
// interface YouTubeChannelProps {
//   name: string
//   description: string
//   subscribers: string
//   link: string // Added input for YouTube link
//   theme?: "cyan" | "indigo"
// }

// const YouTubeChannel: FC<YouTubeChannelProps> = ({ name, description, subscribers, link }) => {
//   return (
//     <div className="border-t border-gray-800 pt-4">
//       <h3 className="font-semibold text-lg text-red-400">
//         <a 
//           href={link} // Link to the YouTube channel
//           className="text-cyan-400 hover:text-cyan-300"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {name}
//         </a>
//       </h3>
//       <p className="text-gray-400 mt-1">{description}</p>
//       <div className="mt-2 flex items-center justify-between">
//         <span className="text-sm text-gray-500">{subscribers} subscribers</span>
//       </div>
//     </div>
//   )
// }

// // Component for Discord channels
// interface DiscordChannelProps {
//   name: string
//   description: string
//   link: string // Added input for Discord link
// }

// const DiscordChannel: FC<DiscordChannelProps> = ({ name, description, link }) => {
//   return (
//     <div className="border-t border-gray-800 pt-4">
//       <h3 className="font-semibold text-lg text-indigo-400">{name}</h3>
//       <p className="text-gray-400 mt-1">{description}</p>
//       <div className="mt-2 flex items-center justify-between">
//         <a
//           href={link} // Link to the Discord channel
//           className="text-indigo-400 hover:text-indigo-300 inline-flex items-center text-sm font-medium"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Join
//           <ArrowUpRight className="ml-1 h-3 w-3" />
//         </a>
//       </div>
//     </div>
//   )
// }

// // Component for YouTube channels
// interface MediumChannelProps {
//   name: string
//   description: string
//   link: string // Added input for YouTube link
//   theme?: "cyan" | "indigo"
// }

// const MediumChannel: FC<MediumChannelProps> = ({ name, description, link }) => {
//   return (
//     <div className="border-t border-gray-800 pt-4">
//       <h3 className="font-semibold text-lg text-red-400">
//         <a 
//           href={link} // Link to the YouTube channel
//           className="text-cyan-400 hover:text-cyan-300"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {name}
//         </a>
//       </h3>
//       <p className="text-gray-400 mt-1">{description}</p>
//     </div>
//   )
// }
// // }

// export default CommunityPage

"use client"

import { type FC, useState } from "react"
import { ArrowUpRight, ExternalLink, Database } from "lucide-react"

import { FaMedium, FaYoutube, FaDiscord, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const CommunityPage: FC = () => {
  const [activeTab, setActiveTab] = useState<"arweave" | "ao">("ao")

  return (
    <div className="min-h-screen bg-background">
      {/* Background patterns */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 grid-lines opacity-20"></div>
        <div className="absolute inset-0 blockchain-pattern opacity-10"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
        {/* Enhanced background with animated nodes */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-highlight/70 to-accent/80">
          <div className="absolute inset-0 grid-lines opacity-30"></div>
          <div className="absolute inset-0 blockchain-pattern opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/30 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20">
              <span className="text-sm font-medium text-foreground/90">Join the permanent revolution</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 drop-shadow-sm">
              Join Our{" "}
              <span className="text-secondary bg-clip-text bg-gradient-to-r from-secondary via-highlight to-accent">
                Community
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Connect with our growing community across various platforms and stay updated with the latest news and
              developments.
            </p>
            {/* Quick links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#wayfinding"
                className="px-6 py-3 rounded-md bg-foreground/10 backdrop-blur-sm border border-foreground/20 text-foreground hover:bg-foreground/20 transition-colors duration-300"
              >
                Explore Resources
              </a>
              <a
                href="https://discord.com/invite/dYXtHwc9dc"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md bg-highlight/20 backdrop-blur-sm border border-highlight/30 text-highlight hover:bg-highlight/30 transition-colors duration-300"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        ></div>
      </section>

      {/* Learn in depth & Listen to podcast section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Learn in depth card - enhanced */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-secondary/50 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="bg-card border border-secondary/30 rounded-xl overflow-hidden relative p-8 h-96 flex flex-col justify-between transition-all duration-300 group-hover:border-secondary/60 group-hover:shadow-lg group-hover:shadow-secondary/5">
              <div className="absolute inset-0 blockchain-pattern opacity-10"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary/50"></div>

              {/* Floating elements for visual interest */}
              <div className="absolute top-12 right-12 w-20 h-20 border border-secondary/20 rounded-lg opacity-30 rotate-12"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 border border-secondary/20 rounded-full opacity-20"></div>

              <div className="relative z-10">
                <div className="bg-secondary/20 text-secondary w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-6 w-6" />
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Learn in depth</h2>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Explore comprehensive documentation, tutorials, and guides to master Arweave and AO development.
                </p>
              </div>

              <div className="relative z-10">
                <button className="bg-secondary/20 text-secondary border border-secondary/30 px-6 py-3 rounded-md inline-flex items-center font-medium hover:bg-secondary/30 transition-all duration-300 group-hover:translate-x-1">
                  <Database className="h-4 w-4 mr-2" />
                  EXPLORE DOCS
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Listen to the podcast card - enhanced */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-highlight to-highlight/50 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="bg-card border border-highlight/30 rounded-xl overflow-hidden relative p-8 h-96 flex flex-col justify-between transition-all duration-300 group-hover:border-highlight/60 group-hover:shadow-lg group-hover:shadow-highlight/5">
              <div className="absolute inset-0 blockchain-pattern opacity-10"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-highlight to-highlight/50"></div>

              {/* Floating elements for visual interest */}
              <div className="absolute top-16 right-16 w-24 h-24 border border-highlight/20 rounded-full opacity-30"></div>
              <div className="absolute bottom-24 left-12 w-12 h-12 border border-highlight/20 rounded-lg opacity-20 -rotate-12"></div>

              <div className="relative z-10">
                <div className="bg-highlight/20 text-highlight w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 8a6 6 0 0 0-9.33-5"></path>
                    <path d="m10.67 5.67 2.66-2.67 2.67 2.67"></path>
                    <circle cx="12" cy="14" r="6"></circle>
                    <path d="M14 14a2 2 0 0 1-4 0"></path>
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Listen to the podcast</h2>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Tune in to discussions with ecosystem leaders, developers, and visionaries shaping the future of
                  permanence.
                </p>
              </div>

              <div className="relative z-10">
                <button className="bg-highlight/20 text-highlight border border-highlight/30 px-6 py-3 rounded-md inline-flex items-center font-medium hover:bg-highlight/30 transition-all duration-300 group-hover:translate-x-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  GO TO PODCAST
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-card/50 border border-secondary/20 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">100K+</div>
            <div className="text-muted-foreground text-sm">Community Members</div>
          </div>
          <div className="bg-card/50 border border-highlight/20 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-highlight mb-2">50+</div>
            <div className="text-muted-foreground text-sm">Active Projects</div>
          </div>
          <div className="bg-card/50 border border-accent/20 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground text-sm">Developer Support</div>
          </div>
          <div className="bg-card/50 border border-secondary/20 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">∞</div>
            <div className="text-muted-foreground text-sm">Permanent Storage</div>
          </div>
        </div>
      </section>

      {/* Wayfinding Section with Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-foreground mb-4">Wayfinding</h2>
        {/* <p className={activeTab === "arweave" ? "text-secondary mb-8 text-xl" : "text-highlight mb-8 text-xl"}> */}
        <p className= "text-secondary mb-8 text-xl" >

          Navigate the ecosystem
        </p>

        {/* Tab Navigation */}
        <div className="flex border-b border-secondary/20 mb-12">
          <button
            className={`py-3 px-6 font-medium text-lg transition-colors duration-300 relative ${
              activeTab === "arweave" ? "text-secondary" : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveTab("arweave")}
          >
            Arweave
            {activeTab === "arweave" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary"></span>}
          </button>
          <button
            className={`py-3 px-6 font-medium text-lg transition-colors duration-300 relative ${
              activeTab === "ao" ? "text-secondary" : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveTab("ao")}
          >
            AO Computer
            {activeTab === "ao" && <span className="absolute bottom-0 left-0 w-full h-1 bg-highlight"></span>}
          </button>
        </div>

        {/* Arweave Tab Content */}
        <div className={activeTab === "arweave" ? "block" : "hidden"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Twitter Section */}
            <div className="bg-card border border-secondary/20 rounded-xl shadow-md overflow-hidden hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <FaXTwitter className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-foreground">X</h2>
                </div>
                <div className="space-y-6">
                  <TwitterAccount
                    handle1="@ArweaveEco"
                    description="The official Twitter account for Arweave."
                    followers1="106K+"
                  />
                  <TwitterAccount
                    handle1="@onlyarweave"
                    handle2="@permaweb_news"
                    description="The sources for timely news updates on Arweave and AO."
                    followers1="11K+"
                    followers2="11K+"
                  />
                  <TwitterAccount
                    handle1="@Weavers_Org"
                    description="A dynamic community of developers and creatives within the Arweave ecosystem, currently also engaged in building on AO."
                    followers1="4K+"
                  />
                </div>
              </div>
            </div>

            {/* YouTube Section */}
            <div className="bg-card border border-secondary/20 rounded-xl shadow-md overflow-hidden hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <FaYoutube className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-foreground">YouTube</h2>
                </div>
                <div className="space-y-6">
                  <YouTubeChannel
                    name="Arweave Official"
                    link="https://www.youtube.com/@perma_web"
                    description="Official Arweave + AO youtube channel."
                    subscribers="2K+"
                    theme="secondary"
                  />
                  <YouTubeChannel
                    name="Permanent Data Solutions"
                    link="https://www.youtube.com/@pds-inc/"
                    description="Developing solutions for users and enterprises using Arweave."
                    subscribers="700+"
                    theme="secondary"
                  />
                  <YouTubeChannel
                    name="Weavers"
                    link="https://www.youtube.com/@weavers_org"
                    description="A community of developers & creatives in the Arweave ecosystem."
                    subscribers="140+"
                    theme="secondary"
                  />
                  <YouTubeChannel
                    name="Arweave India "
                    link="https://www.youtube.com/@ArweaveIndia"
                    description="The Arweave Indian community, with tutorials and demo codes for Arweave + AO."
                    subscribers="72+"
                    theme="secondary"
                  />
                  <YouTubeChannel
                    name="Arweave New York "
                    link="https://www.youtube.com/@arweaveny"
                    description="The Arweave New Yorkcommunity, with tutorials and demo codes for Arweave + AO."
                    subscribers="9+"
                    theme="secondary"
                  />
                </div>
              </div>
            </div>

            {/* Discord Section */}
            <div className="bg-card border border-secondary/20 rounded-xl shadow-md overflow-hidden hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <FaDiscord className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-foreground">Discord</h2>
                </div>
                <div className="space-y-6">
                  <DiscordChannel
                    name="AO Main Discord Server"
                    link="https://discord.com/invite/dYXtHwc9dc"
                    description="Join our general chat to connect with community members."
                    theme="secondary"
                  />
                  <DiscordChannel
                    name="Arweave Dev Talk"
                    link="https://discord.gg/eQ4RKYsS"
                    description="Get help and support from fellow developers."
                    theme="secondary"
                  />
                  <DiscordChannel
                    name="Weavers"
                    link="https://discord.com/invite/weavers"
                    description="Be a weaver! Arweave + AO."
                    theme="secondary"
                  />
                  <DiscordChannel
                    name="Arweave Hub"
                    link=""
                    description="Watch for upcoming fullstack hackathons on Arweave + AO!"
                    theme="secondary"
                  />
                </div>
              </div>
            </div>

            {/* GitHub Section */}
            <div className="bg-card border border-secondary/20 rounded-xl shadow-md overflow-hidden hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <FaGithub className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-foreground">GitHub</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Explore our open-source repositories, contribute to our projects, and report issues on Arweave.
                </p>
                <a
                  href="https://github.com/ArweaveTeam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-secondary/30 text-base font-medium rounded-md shadow-sm text-secondary bg-secondary/20 hover:bg-secondary/30 transition-colors duration-300"
                >
                  View Arweave GitHub
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            {/* Medium Section */}
            <div className="bg-card border border-secondary/20 rounded-xl shadow-md overflow-hidden hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <FaMedium className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-foreground">Medium</h2>
                </div>
                <div className="space-y-6">
                  <MediumChannel
                    name="PermaDAO"
                    description="Technical discussions and Ecosystem updates."
                    theme="secondary"
                    link="https://medium.com/@perma_dao"
                  />
                  <MediumChannel
                    name="Weavers Medium Channel"
                    description="Technical discussions and Ecosystem updates."
                    theme="secondary"
                    link="https://medium.com/@Weavers_Official"
                  />
                  <MediumChannel
                    name="Open Access Supercomputing Foundation"
                    description="Ecosystem Updates."
                    theme="secondary"
                    link="https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AO Tab Content */}
        <div className={activeTab === "ao" ? "block" : "hidden"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Twitter Section */}
            <div className="bg-card border border-secondary/20 rounded-xl shadow-md overflow-hidden hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/5 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <FaXTwitter className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-foreground">X</h2>
                </div>
                <div className="space-y-6">
                  <TwitterAccount
                    handle1="@aoTheComputer"
                    description="Official AO account for announcements and updates."
                    followers1="49K+"
                    // theme="highlight"
                  />
                  <TwitterAccount
                    handle1="@aoComputerClub"
                    description="AO enthusiasts, sharing insights and resources, with a focus on DevBot for users building on AO."
                    followers1="3K+"
                    // theme="highlight"
                  />
                  <TwitterAccount
                    handle1="@ao_builders"
                    description="A premier innovation hub to realize the vision of @aoTheComputer."
                    followers1="33K+"
                    // theme="highlight"
                  />
                  <TwitterAccount
                    handle1="@CommunityLabs"
                    handle2="@aoTheVentures"
                    description="Venture studios igniting innovation on AO & Arweave."
                    followers1="4K+"
                    followers2="1K+"
                    // theme="highlight"
                  />
                </div>
              </div>
            </div>

            {/* YouTube Section */}
            <div className="bg-card border border-secondary/20 rounded-xl shadow-md overflow-hidden hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/5 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <FaYoutube className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-foreground">YouTube</h2>
                </div>
                <div className="space-y-6">
                  <YouTubeChannel
                    name="The PermaWeb: AO + Arweave"
                    link="https://www.youtube.com/@perma_web"
                    description="Official Arweave + AO youtube channel."
                    subscribers="2K+"
                    // theme="highlight"
                  />
                  <YouTubeChannel
                    name="Permanent Data Solutions"
                    link="https://www.youtube.com/@pds-inc/"
                    description="Developing solutions for users and enterprises using Arweave."
                    subscribers="700+"
                    // theme="highlight"
                  />
                  <YouTubeChannel
                    name="Weavers"
                    link="https://www.youtube.com/@Weavers_Org"
                    description="A community of developers & creatives in the Arweave ecosystem."
                    subscribers="140+"
                    // theme="highlight"
                  />
                  <YouTubeChannel
                    name="Arweave India "
                    link="https://www.youtube.com/@ArweaveIndia"
                    description="The Arweave Indian community, with tutorials and demo codes for Arweave + AO."
                    subscribers="72+"
                    // theme="highlight"
                  />
                  <YouTubeChannel
                    name="Arweave New York "
                    link="https://www.youtube.com/@arweaveny"
                    description="The Arweave New Yorkcommunity, with tutorials and demo codes for Arweave + AO."
                    subscribers="9+"
                    // theme="highlight"
                  />
                </div>
              </div>
            </div>

            {/* Discord Section */}
            <div className="bg-card border border-secondary/20 rounded-xl shadow-md overflow-hidden hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/5 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <FaDiscord className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-foreground">Discord</h2>
                </div>
                <div className="space-y-6">
                  <DiscordChannel
                    name="AO Main Discord Server"
                    link="https://discord.com/invite/dYXtHwc9dc"
                    description="Join our general chat to connect with community members."
                    // theme="highlight"
                  />
                  <DiscordChannel
                    name="Arweave Dev Talk"
                    link="https://discord.gg/eQ4RKYsS"
                    description="Get help and support from fellow developers."
                    // theme="highlight"
                  />
                  <DiscordChannel
                    name="Weavers"
                    link="https://discord.com/invite/weavers"
                    description="Be a weaver! Arweave + AO."
                    // theme="highlight"
                  />
                  <DiscordChannel
                    name="Arweave Hub"
                    link=""
                    description="Watch for upcoming fullstack hackathons on Arweave + AO!"
                    // theme="highlight"
                  />
                </div>
              </div>
            </div>

            {/* GitHub Section */}
            <div className="bg-card border border-secondary/20 rounded-xl shadow-md overflow-hidden hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/5 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <FaGithub className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-foreground">GitHub</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Explore AO repositories, contribute to the codebase, and report issues.
                </p>
                <a
                  href="https://github.com/permaweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-secondary/30 text-base font-medium rounded-md shadow-sm text-secondary bg-secondary/20 hover:bg-secondary/30 transition-colors duration-300"
                >
                  View AO GitHub
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Medium Section */}
            <div className="bg-card border border-secondary/20 rounded-xl shadow-md overflow-hidden hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary/20 p-3 rounded-lg border border-secondary/30">
                    <FaMedium className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-foreground">Medium</h2>
                </div>
                <div className="space-y-6">
                  <MediumChannel
                    name="PermaDAO"
                    description="Technical discussions and Ecosystem updates."
                    // theme="highlight"
                    link="https://medium.com/@perma_dao"
                  />
                  <MediumChannel
                    name="Weavers Medium Channel"
                    description="Technical discussions and Ecosystem updates."
                    // theme="highlight"
                    link="https://medium.com/@Weavers_Official"
                  />
                  <MediumChannel
                    name="Open Access Supercomputing Foundation"
                    description="Ecosystem Updates."
                    // theme="highlight"
                    link="https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Component for Twitter accounts
interface TwitterAccountProps {
  handle1: string
  handle2?: string
  description: string
  followers1: string
  followers2?: string
  theme?: "secondary" | "highlight"
}

const TwitterAccount: FC<TwitterAccountProps> = ({
  handle1,
  handle2,
  description,
  followers1,
  followers2,
  theme = "secondary",
}) => {
  const textColor = theme === "secondary" ? "text-secondary" : "text-highlight"
  const hoverColor = theme === "secondary" ? "hover:text-secondary/80" : "hover:text-highlight/80"

  return (
    <div className="border-t border-secondary/10 pt-4">
      <h3 className={`font-semibold text-lg ${textColor}`}>
        {handle2 ? (
          <>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${handle1.substring(1)}`}
              className={`${textColor} ${hoverColor}`}
            >
              {handle1}
            </a>{" "}
            &
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${handle2.substring(1)}`}
              className={`${textColor} ${hoverColor}`}
            >
              {handle2}
            </a>
          </>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/${handle1.substring(1)}`}
            className={`${textColor} ${hoverColor}`}
          >
            {handle1}
          </a>
        )}
      </h3>
      <p className="text-muted-foreground mt-1">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm text-muted-foreground/70">
          {followers2 ? `${followers1} followers | ${followers2} followers` : `${followers1} followers`}
        </span>
      </div>
    </div>
  )
}

// Component for YouTube channels
interface YouTubeChannelProps {
  name: string
  description: string
  subscribers: string
  link: string // Added input for YouTube link
  theme?: "secondary" | "highlight"
}

const YouTubeChannel: FC<YouTubeChannelProps> = ({ name, description, subscribers, link, theme = "secondary" }) => {
  const textColor = theme === "secondary" ? "text-secondary" : "text-highlight"
  const hoverColor = theme === "secondary" ? "hover:text-secondary/80" : "hover:text-highlight/80"

  return (
    <div className="border-t border-secondary/10 pt-4">
      <h3 className={`font-semibold text-lg ${textColor}`}>
        <a
          href={link} // Link to the YouTube channel
          className={`${textColor} ${hoverColor}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </h3>
      <p className="text-muted-foreground mt-1">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm text-muted-foreground/70">{subscribers} subscribers</span>
      </div>
    </div>
  )
}

// Component for Discord channels
interface DiscordChannelProps {
  name: string
  description: string
  link: string // Added input for Discord link
  theme?: "secondary" | "highlight"
}

const DiscordChannel: FC<DiscordChannelProps> = ({ name, description, link, theme = "secondary" }) => {
  const textColor = theme === "secondary" ? "text-secondary" : "text-highlight"
  const hoverColor = theme === "secondary" ? "hover:text-secondary/80" : "hover:text-highlight/80"

  return (
    <div className="border-t border-secondary/10 pt-4">
      <h3 className={`font-semibold text-lg ${textColor}`}>{name}</h3>
      <p className="text-muted-foreground mt-1">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <a
          href={link} // Link to the Discord channel
          className={`${textColor} ${hoverColor} inline-flex items-center text-sm font-medium`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </a>
      </div>
    </div>
  )
}

// Component for Medium channels
interface MediumChannelProps {
  name: string
  description: string
  link: string // Added input for YouTube link
  theme?: "secondary" | "highlight"
}

const MediumChannel: FC<MediumChannelProps> = ({ name, description, link, theme = "secondary" }) => {
  const textColor = theme === "secondary" ? "text-secondary" : "text-highlight"
  const hoverColor = theme === "secondary" ? "hover:text-secondary/80" : "hover:text-highlight/80"

  return (
    <div className="border-t border-secondary/10 pt-4">
      <h3 className={`font-semibold text-lg ${textColor}`}>
        <a href={link} className={`${textColor} ${hoverColor}`} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      <p className="text-muted-foreground mt-1">{description}</p>
    </div>
  )
}

export default CommunityPage

