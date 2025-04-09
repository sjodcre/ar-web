"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SearchDialog } from "./search-dialog"
import { Link, useLocation } from "react-router-dom"
import SearchFn from "@/components/Search"
import { NavItem } from "@/types"

const navItems: Record<string, NavItem[]> = {
  Learn: [
    { title: "Arweave and AO 101", href: "/learn/arweave-ao-101", isDeveloped: true },
    { title: "Intro to Atomic Assets", href: "/learn/atomic-assets", isDeveloped: true },
    { title: "Social Impact", href: "/learn/social-impact", isDeveloped: false },
    { title: "Storage Fee Structure", href: "/learn/fees", isDeveloped: true },
    {
      title: "Whitepapers",
      href: "/learn/whitepapers",
      isDeveloped: true,
      subItems: [
        { title: "Arweave Whitepaper", href: "https://www.arweave.org/yellow-paper.pdf", openInNewTab: true },
        {
          title: "AO Whitepaper",
          href: "https://5z7leszqicjtb6bjtij34ipnwjcwk3owtp7szjirboxmwudpd2tq.arweave.net/7n6ySzBAkzD4KZoTviHtskVlbdab_yylEQuuy1BvHqc",
          openInNewTab: true,
        },
      ],
    },
    {
      title: "Tokenomics",
      href: "/learn/tokenomics",
      isDeveloped: true,
      subItems: [
        { title: "Arweave Tokenomics", href: "/learn/tokenomics/arweave" },
        { title: "AO Tokenomics", href: "/learn/tokenomics/ao" },
      ],
    },
  ],
  Developers: [
    { title: "Get Started", href: "/developers/get-started", isDeveloped: true },
    {
      title: "Cookbook",
      href: "#",
      isDeveloped: true,
      subItems: [
        { title: "Arweave", href: "https://cookbook.arweave.dev/", openInNewTab: true },
        { title: "AO", href: "https://cookbook_ao.g8way.io/", openInNewTab: true },
      ],
    },
    {
      title: "School of Dum Dum",
      href: "https://github.com/ArweaveOasis/Arweave-Academy?tab=readme-ov-file",
      isDeveloped: true,
      openInNewTab: true,
    },
    { title: "API Reference", href: "#", isDeveloped: false },
  ],
  // Solutions: [
  //   { title: "Enterprise", href: "#", isDeveloped: false },
  //   { title: "Startups", href: "#", isDeveloped: false },
  //   { title: "Use Cases", href: "#", isDeveloped: false },
  // ],
  // Network: [
  //   { title: "Overview", href: "#", isDeveloped: false },
  //   { title: "Statistics", href: "#", isDeveloped: false },
  //   { title: "Explorer", href: "#", isDeveloped: false },
  // ],
  Community: [
    { title: "News", href: "/community/news", isDeveloped: true },
    { title: "Events", href: "#", isDeveloped: false },
    { title: "Community Resource Hub", href: "/community/resource-hub", isDeveloped: true },
  ],
}

export function Navbar() {
  // const [isOpen, setIsOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    setOpenMenu(null)
  }, [location.pathname])

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/30 backdrop-blur-md border-b border-secondary/20">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5 opacity-70"></div>
        <div className="absolute inset-0 grid-lines opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold gradient-text font-mono relative group">
                Arweave AO
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-highlight group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {Object.entries(navItems).map(([category, items]) => (
                <DropdownMenu
                  key={category}
                  open={openMenu === category}
                  onOpenChange={(open) => setOpenMenu(open ? category : null)}
                >
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="dropdown-trigger border border-transparent bg-transparent text-foreground transition-all relative group cursor-pointer
               hover:border-secondary/30
               focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      <span className="relative z-10">
                        {category}
                        <ChevronDown className="ml-2 h-4 w-4 opacity-50 inline-block group-hover:opacity-100 transition-opacity" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:via-secondary/5 group-hover:to-secondary/10 rounded transition-all duration-300"></span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary group-hover:w-4/5 transition-all duration-300"></span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card/95 backdrop-blur-md border border-secondary/20 rounded-md shadow-lg shadow-secondary/10">
                    {items
                    .filter((item) => item.isDeveloped !== false)
                    .map((item) => (
                      <DropdownMenuItem
                        key={item.title}
                        className={`text-foreground group relative dropdown-menu-item cursor-pointer ${item.isDeveloped ? "" : "text-destructive"}`}
                      >
                        {item.subItems ? (
                          <span
                            className="w-full cursor-default text-muted-foreground relative z-10 group-hover:text-muted-foreground"
                          >
                            {item.title}
                            <span className="absolute inset-0 rounded-sm -z-10 transition-colors"></span>

                          </span>
                        ) : item.openInNewTab ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full relative z-10 group-hover:text-secondary transition-colors"
                          >
                            {item.title}
                            <span className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 rounded-sm -z-10 transition-colors"></span>
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            className="w-full relative z-10 group-hover:text-secondary transition-colors cursor-pointer"
                          >
                            {item.title}
                            <span className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 rounded-sm -z-10 transition-colors"></span>
                          </Link>
                        )}
                        {item.subItems &&
                          item.subItems.map((subItem) => (
                            <DropdownMenuItem
                              key={subItem.title}
                              // className="text-muted-foreground group relative cursor-pointer"
                              className="text-muted-foreground group relative cursor-pointer dropdown-menu-item"

                            >
                              {subItem.openInNewTab ? (
                                <a
                                  href={subItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full pl-4 relative z-10 group-hover:text-secondary transition-colors"
                                >
                                  {subItem.title}
                                  <span className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 rounded-sm -z-10 transition-colors"></span>
                                </a>
                              ) : (
                                <Link
                                  to={subItem.href}
                                  className="w-full pl-4 relative z-10 group-hover:text-secondary transition-colors"
                                >
                                  {subItem.title}
                                  <span className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 rounded-sm -z-10 transition-colors"></span>
                                </Link>
                              )}
                            </DropdownMenuItem>
                          ))}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
              <div className="relative group">
                <SearchFn />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary group-hover:w-4/5 transition-all duration-300"></span>
              </div>
            </div>
          </div>
          {/* <div className="md:hidden flex items-center gap-2">
            <Button
              className="bg-transparent hover:bg-secondary/10 border border-transparent hover:border-secondary/30 relative group"
              onClick={() => setShowSearch(true)}
            >
              <span className="relative z-10 flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Search
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:via-secondary/5 group-hover:to-secondary/10 rounded transition-all duration-300"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary group-hover:w-4/5 transition-all duration-300"></span>
            </Button>
            <Button
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="bg-transparent hover:bg-secondary/10 border border-transparent hover:border-secondary/30 relative group"
            >
              <span className="relative z-10">{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:via-secondary/5 group-hover:to-secondary/10 rounded transition-all duration-300"></span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary group-hover:w-4/5 transition-all duration-300"></span>
            </Button>
          </div> */}
        </div>
      </div>
      {/* {isOpen && (
        <div className="md:hidden relative z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-md border-b border-secondary/20">
            {Object.entries(navItems).map(([category, items]) => (
              <div key={category} className="space-y-1">
                <Button className="w-full justify-start bg-transparent text-lg font-medium font-mono">
                  {category}
                </Button>
                {items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : undefined}
                    rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                    className={`block px-4 py-2 text-sm ${item.isDeveloped ? "text-muted-foreground" : "text-destructive"} hover:bg-secondary/10 hover:text-secondary rounded-md ml-2 transition-all duration-200 relative group`}
                  >
                    <span className="relative z-10">{item.title}</span>
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-4/5 bg-secondary/5 group-hover:w-full transition-all duration-300 rounded-sm -z-10"></span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )} */}

      <SearchDialog open={showSearch} onOpenChange={setShowSearch} />
    </nav>
  )
}



