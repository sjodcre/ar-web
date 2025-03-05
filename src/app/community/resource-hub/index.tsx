"use client"

import { type FC, useState } from "react"
import {
  Twitter,
  Youtube,
  Github,
  TextIcon as Telegram,
  DiscIcon as Discord,
  // Globe,
  ArrowUpRight,
  ExternalLink,
  Database,
} from "lucide-react"

const CommunityPage: FC = () => {
  const [activeTab, setActiveTab] = useState<"arweave" | "ao">("ao")

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-900 via-teal-800 to-blue-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Join Our Community</h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto">
              Connect with our growing community across various platforms and stay updated with the latest news and
              developments.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-black"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Learn in depth & Listen to podcast section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Learn in depth card */}
          <div className="bg-gradient-to-br from-cyan-500 to-teal-400 rounded-xl overflow-hidden relative p-10 h-80 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=400&width=600')] opacity-10 mix-blend-overlay"></div>
            <h2 className="text-4xl font-bold text-black">Learn in depth</h2>
            <div>
              <button className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center font-medium group-hover:bg-cyan-900 transition-colors duration-300">
                <Database className="h-4 w-4 mr-2" />
                EXPLORE DOCS
              </button>
            </div>
          </div>

          {/* Listen to the podcast card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-500 rounded-xl overflow-hidden relative p-10 h-80 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=400&width=600')] opacity-10 mix-blend-overlay"></div>
            <h2 className="text-4xl font-bold text-white">Listen to the podcast</h2>
            <div>
              <button className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center font-medium group-hover:bg-indigo-900 transition-colors duration-300">
                <ExternalLink className="h-4 w-4 mr-2" />
                GO TO PODCAST
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Wayfinding Section with Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Wayfinding</h2>
        <p className="text-cyan-400 mb-8 text-xl">Navigate the ecosystem</p>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-800 mb-12">
          <button
            className={`py-3 px-6 font-medium text-lg transition-colors duration-300 relative ${
              activeTab === "arweave" ? "text-cyan-400" : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("arweave")}
          >
            Arweave
            {activeTab === "arweave" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>}
          </button>
          <button
            className={`py-3 px-6 font-medium text-lg transition-colors duration-300 relative ${
              activeTab === "ao" ? "text-indigo-400" : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("ao")}
          >
            AO Computer
            {activeTab === "ao" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400"></span>}
          </button>
        </div>

        {/* Arweave Tab Content */}
        <div className={activeTab === "arweave" ? "block" : "hidden"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Twitter Section */}
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-lg">
                    <Twitter className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">Twitter</h2>
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
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-lg">
                    <Youtube className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">YouTube</h2>
                </div>
                <div className="space-y-6">
                  <YouTubeChannel
                    name="Arweave Official"
                    link="https://www.youtube.com/@perma_web"
                    description="Official Arweave + AO youtube channel."
                    subscribers="2K+"
                    theme="indigo"
                  />
                  <YouTubeChannel
                    name="Permanent Data Solutions"
                    link="https://www.youtube.com/@pds-inc/"
                    description="Developing solutions for users and enterprises using Arweave."
                    subscribers="700+"
                  />
                  <YouTubeChannel
                    name="Weavers"
                    link="https://www.youtube.com/@ArweaveIndia"
                    description="A community of developers & creatives in the Arweave ecosystem."
                    subscribers="140+"
                    theme="indigo"
                  />
                  <YouTubeChannel
                    name="Arweave India "
                    link="https://www.youtube.com/@ArweaveIndia"
                    description="The Arweave Indian community, with tutorials and demo codes for Arweave + AO."
                    subscribers="72+"
                    theme="indigo"
                  />
                </div>
              </div>
            </div>

            {/* Discord Section */}
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg">
                    <Discord className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">Discord</h2>
                </div>
                <div className="space-y-6">
                    <DiscordChannel
                        name="AO Main Discord Server"
                        link="https://discord.com/invite/dYXtHwc9dc"
                        description="Join our general chat to connect with community members."
                    />
                    <DiscordChannel
                        name="Arweave Dev Talk"
                        link="https://discord.gg/eQ4RKYsS"
                        description="Get help and support from fellow developers."
                    />
                    <DiscordChannel
                        name="Weavers"
                        link="https://discord.com/invite/weavers"
                        description="Be a weaver! Arweave + AO."
                    />
                    <DiscordChannel
                        name="Arweave Hub"
                        link=""
                        description="Watch for upcoming fullstack hackathons on Arweave + AO!"
                    />
                </div>
              </div>
            </div>

            {/* GitHub Section */}
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 rounded-lg">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">GitHub</h2>
                </div>
                <p className="text-gray-400 mb-4">
                  Explore our open-source repositories, contribute to our projects, and report issues on Arweave.
                </p>
                <a
                  href="https://github.com/ArweaveTeam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-gray-900"
                >
                  View Arweave GitHub
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            {/* Telegram Section */}
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-lg">
                    <Telegram className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">Telegram</h2>
                </div>
                <div className="space-y-6">
                  {/* <TelegramChannel
                    name="AO Announcements"
                    description="Official announcements and important updates for AO."
                    members="120K+"
                    theme="indigo"
                  />
                  <TelegramChannel
                    name="AO Developer Chat"
                    description="Technical discussions and developer support."
                    members="65K+"
                    theme="indigo"
                  /> */}
                </div>
              </div>
            </div>
           
          </div>
        </div>

        {/* AO Tab Content */}
        <div className={activeTab === "ao" ? "block" : "hidden"}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Twitter Section */}
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-lg">
                    <Twitter className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">Twitter</h2>
                </div>
                <div className="space-y-6">
                  <TwitterAccount
                    handle1="@aoTheComputer"
                    description="Official AO account for announcements and updates."
                    followers1="49K+"
                    theme="indigo"
                  />
                  <TwitterAccount
                    handle1="@aoComputerClub"
                    description="AO enthusiasts, sharing insights and resources, with a focus on DevBot for users building on AO."
                    followers1="3K+"
                    theme="indigo"
                  />
                  <TwitterAccount
                    handle1="@ao_builders"
                    description="A premier innovation hub to realize the vision of @aoTheComputer."
                    followers1="33K+"
                    theme="indigo"
                  />
                  <TwitterAccount
                    handle1="@CommunityLabs"
                    handle2="@aoTheVentures"
                    description="Venture studios igniting innovation on AO & Arweave."
                    followers1="4K+"
                    followers2="1K+"
                    theme="indigo"
                  />
                </div>
              </div>
            </div>

            {/* YouTube Section */}
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-lg">
                    <Youtube className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">YouTube</h2>
                </div>
                <div className="space-y-6">
                  <YouTubeChannel
                    name="The PermaWeb: AO + Arweave"
                    link="https://www.youtube.com/@perma_web"
                    description="Official Arweave + AO youtube channel."
                    subscribers="2K+"
                    theme="indigo"
                  />
                  <YouTubeChannel
                    name="Permanent Data Solutions"
                    link="https://www.youtube.com/@pds-inc/"
                    description="Developing solutions for users and enterprises using Arweave."
                    subscribers="700+"
                    theme="indigo"
                  />
                  <YouTubeChannel
                    name="Weavers"
                    link="https://www.youtube.com/@Weavers_Org"
                    description="A community of developers & creatives in the Arweave ecosystem."
                    subscribers="140+"
                    theme="indigo"
                  />
                  <YouTubeChannel
                    name="Arweave India "
                    link="https://www.youtube.com/@ArweaveIndia"
                    description="The Arweave Indian community, with tutorials and demo codes for Arweave + AO."
                    subscribers="72+"
                    theme="indigo"
                  />
                </div>
              </div>
            </div>

            {/* Discord Section */}
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg">
                    <Discord className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">Discord</h2>
                </div>
                <div className="space-y-6">
                    <DiscordChannel
                        name="AO Main Discord Server"
                        link="https://discord.com/invite/dYXtHwc9dc"
                        description="Join our general chat to connect with community members."
                    />
                    <DiscordChannel
                        name="Arweave Dev Talk"
                        link="https://discord.gg/eQ4RKYsS"
                        description="Get help and support from fellow developers."
                    />
                    <DiscordChannel
                        name="Weavers"
                        link="https://discord.com/invite/weavers"
                        description="Be a weaver! Arweave + AO."
                    />
                    <DiscordChannel
                        name="Arweave Hub"
                        link=""
                        description="Watch for upcoming fullstack hackathons on Arweave + AO!"
                    />
                </div>
              </div>
            </div>

            {/* GitHub Section */}
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-3 rounded-lg">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">GitHub</h2>
                </div>
                <p className="text-gray-400 mb-4">
                  Explore AO repositories, contribute to the codebase, and report issues.
                </p>
                <a
                  href="https://github.com/permaweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-gray-900"
                >
                  View AO GitHub
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Telegram Section */}
            <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-800 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-lg">
                    <Telegram className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-white">Telegram</h2>
                </div>
                <div className="space-y-6">
                  {/* <TelegramChannel
                    name="AO Announcements"
                    description="Official announcements and important updates for AO."
                    members="120K+"
                    theme="indigo"
                  />
                  <TelegramChannel
                    name="AO Developer Chat"
                    description="Technical discussions and developer support."
                    members="65K+"
                    theme="indigo"
                  /> */}
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
  theme?: "cyan" | "indigo"
}

const TwitterAccount: FC<TwitterAccountProps> = ({ handle1, handle2, description, followers1, followers2, theme = "cyan" }) => {
  return (
    <div className="border-t border-gray-800 pt-4">
      <h3 className={`font-semibold text-lg ${theme === "cyan" ? "text-cyan-400" : "text-indigo-400"}`}>
        
        {handle2 ? 
        <>
            <a 
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${handle1.substring(1)}`} 
                className="text-cyan-400 hover:text-cyan-300">{handle1}
            </a> & 
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${handle2.substring(1)}`} 
                className="text-cyan-400 hover:text-cyan-300">{handle2}
            </a>
        </> : 
        <a 
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/${handle1.substring(1)}`} 
            className="text-cyan-400 hover:text-cyan-300">{handle1}
        </a>}
      </h3>
      <p className="text-gray-400 mt-1">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm text-gray-500">
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
  theme?: "cyan" | "indigo"
}

const YouTubeChannel: FC<YouTubeChannelProps> = ({ name, description, subscribers, link }) => {
  return (
    <div className="border-t border-gray-800 pt-4">
      <h3 className="font-semibold text-lg text-red-400">
        <a 
          href={link} // Link to the YouTube channel
          className="text-cyan-400 hover:text-cyan-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </h3>
      <p className="text-gray-400 mt-1">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm text-gray-500">{subscribers} subscribers</span>
      </div>
    </div>
  )
}

// Component for Discord channels
interface DiscordChannelProps {
  name: string
  description: string
  link: string // Added input for Discord link
}

const DiscordChannel: FC<DiscordChannelProps> = ({ name, description, link }) => {
  return (
    <div className="border-t border-gray-800 pt-4">
      <h3 className="font-semibold text-lg text-indigo-400">{name}</h3>
      <p className="text-gray-400 mt-1">{description}</p>
      <div className="mt-2 flex items-center justify-between">
        <a
          href={link} // Link to the Discord channel
          className="text-indigo-400 hover:text-indigo-300 inline-flex items-center text-sm font-medium"
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

// Component for Telegram channels
// interface TelegramChannelProps {
//   name: string
//   description: string
//   members: string
//   theme?: "cyan" | "indigo"
// }

// const TelegramChannel: FC<TelegramChannelProps> = ({ name, description, members, theme = "cyan" }) => {
//   return (
//     <div className="border-t border-gray-800 pt-4">
//       <h3 className={`font-semibold text-lg ${theme === "cyan" ? "text-cyan-300" : "text-indigo-300"}`}>{name}</h3>
//       <p className="text-gray-400 mt-1">{description}</p>
//       <div className="mt-2 flex items-center justify-between">
//         <span className="text-sm text-gray-500">{members} members</span>
//         <a
//           href="#"
//           className={`${theme === "cyan" ? "text-cyan-300 hover:text-cyan-200" : "text-indigo-300 hover:text-indigo-200"} inline-flex items-center text-sm font-medium`}
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

export default CommunityPage
