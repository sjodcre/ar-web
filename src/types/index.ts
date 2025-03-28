// types/docs.ts
export type DocCategory = "storage" | "computation" | "network" | "general"

export type NavItem = {
    title: string
    href: string
    isDeveloped: boolean
    openInNewTab?: boolean
    subItems?: {
      title: string
      href: string
      openInNewTab?: boolean
    }[]
  }