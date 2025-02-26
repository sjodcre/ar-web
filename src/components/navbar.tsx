"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SearchDialog } from "./search-dialog"
import { Link } from "react-router-dom"


const navItems = {
  Learn: [
    { title: "Arweave and AO 101", href: "/learn/blockchain-arweave-ao101" , isDeveloped: true},
    { title: "Atomic Assets", href: "/learn/atomic-assets" },
    { title: "Social Impact", href: "/learn/social-impact" },
    { title: "Whitepapers", href: "/learn/whitepapers", isDeveloped: true, subItems: [
      { title: "Arweave Whitepaper", href: "https://www.arweave.org/yellow-paper.pdf" },
      { title: "AO Whitepaper", href: "https://5z7leszqicjtb6bjtij34ipnwjcwk3owtp7szjirboxmwudpd2tq.arweave.net/7n6ySzBAkzD4KZoTviHtskVlbdab_yylEQuuy1BvHqc" },
    ] },
    { title: "Tokenomics", href: "/learn/tokenomics", isDeveloped: true, subItems: [
      { title: "Arweave Tokenomics", href: "/learn/tokenomics/arweave" },
      { title: "AO Tokenomics", href: "/learn/tokenomics/ao" },
    ] },
  ],
  Developers: [
    { title: "Get Started", href: "#", isDeveloped: false },
    { title: "Cookbook", href: "#", isDeveloped: true, subItems: [
        { title: "Arweave", href: "https://cookbook.arweave.dev/" },
        { title: "AO", href: "https://cookbook_ao.g8way.io/" },
      ] 
    },
    { title: "School of Dum Dum", href: "https://github.com/ArweaveOasis/Arweave-Academy?tab=readme-ov-file", isDeveloped: true},
    { title: "API Reference", href: "#", isDeveloped: false },
  ],
  Solutions: [
    { title: "Enterprise", href: "#", isDeveloped: false },
    { title: "Startups", href: "#", isDeveloped: false },
    { title: "Use Cases", href: "#", isDeveloped: false },
  ],
  Network: [
    { title: "Overview", href: "#", isDeveloped: false },
    { title: "Statistics", href: "#", isDeveloped: false },
    { title: "Explorer", href: "#", isDeveloped: false },
  ],
  Community: [
    { title: "News", href: "/community/news", isDeveloped: true },
    { title: "Events", href: "#", isDeveloped: false },
    { title: "Community Resource Hub", href: "#", isDeveloped: false },
  ],
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-transparent bg-clip-text">
                Arweave AO
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {Object.entries(navItems).map(([category, items]) => (
                <DropdownMenu key={category}>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-black">
                      {category}
                      <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black/90 border border-white/10">
                    {items.map((item) => (
                      <DropdownMenuItem key={item.title} className={`text-white hover:bg-white/10 ${item.isDeveloped ? '' : 'text-red-500'}`}>
                        {item.subItems ? (
                          <span className="w-full cursor-default">{item.title}</span>
                        ) : (
                          <Link to={item.href} className="w-full">
                            {item.title}
                          </Link>
                        )}
                        {item.subItems && item.subItems.map(subItem => (
                          <DropdownMenuItem key={subItem.title} className="text-gray-300 hover:bg-white/10 cursor-pointer">
                            <Link to={subItem.href} className="w-full pl-4">
                              {subItem.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
              <Button className="bg-black ml-2" onClick={() => setShowSearch(true)}>
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <Button className="bg-black" onClick={() => setShowSearch(true)}>
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
            <Button size="icon" onClick={() => setIsOpen(!isOpen)} className="bg-black">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            {Object.entries(navItems).map(([category, items]) => (
              <div key={category} className="space-y-1">
                <Button className="w-full justify-start bg-black text-lg font-medium">{category}</Button>
                {items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`block px-4 py-2 text-sm ${item.isDeveloped ? 'text-gray-300' : 'text-red-500'} hover:bg-white/10 rounded-md ml-2`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <SearchDialog open={showSearch} onOpenChange={setShowSearch} />
    </nav>
  )
}
