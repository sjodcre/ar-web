"use client"

import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navItems = {
  Learn: [
    { title: "Documentation", href: "#" },
    { title: "Tutorials", href: "#" },
    { title: "Guides", href: "#" },
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

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-transparent bg-clip-text">
                AO
              </span>
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
                        <a href={item.href} className="w-full">
                          {item.title}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </div>
          </div>
          <div className="md:hidden">
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
    </nav>
  )
}

