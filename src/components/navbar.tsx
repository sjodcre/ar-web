"use client"

import { useState } from "react"
import { Menu, X, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SearchDialog } from "./search-dialog"
import { Link } from "react-router-dom"


const navItems = {
  Learn: [
    { title: "Blockchain, Arweave and AO 101", href: "/learn/blockchain-arweave-ao101" },
    { title: "Atomic Assets", href: "/learn/atomic-assets" },
    { title: "Social Impact", href: "/learn/social-impact" },
  ],
  Developers: [
    { title: "Get Started", href: "#" },
    { title: "SDK", href: "#" },
    { title: "API Reference", href: "#" },
  ],
  Solutions: [
    { title: "Enterprise", href: "#" },
    { title: "Startups", href: "#" },
    { title: "Use Cases", href: "#" },
  ],
  Network: [
    { title: "Overview", href: "#" },
    { title: "Statistics", href: "#" },
    { title: "Explorer", href: "#" },
  ],
  Community: [
    { title: "Discord", href: "#" },
    { title: "Twitter", href: "#" },
    { title: "Blog", href: "#" },
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
              {/* <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-transparent bg-clip-text">
                AO
              </span> */}
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
                      <DropdownMenuItem key={item.title} className="text-white hover:bg-white/10 cursor-pointer">
                        {/* <a href={item.href} className="w-full">
                          {item.title}
                        </a> */}
                         <Link to={item.href} className="w-full">
                          {item.title}
                        </Link>
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
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-md ml-2"
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

