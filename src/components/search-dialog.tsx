"use client"

// import { Search } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Command, CommandInput } from "@/components/ui/command"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 overflow-hidden bg-black border-none shadow-lg [&>button]:hidden">
        <Command className="rounded-lg border border-blue-500/20">
          <div className="flex items-center border-b border-blue-500/20 px-3">
            {/* <Search className="w-5 h-5 text-blue-500" /> */}
            <CommandInput
              placeholder="Search"
              className="flex h-14 text-lg border-0 focus:ring-0 focus:outline-none bg-transparent text-white placeholder:text-gray-400"
            />
          </div>
          <div className="py-16 text-center">
            <p className="text-gray-400 text-lg">No recent searches</p>
          </div>
          <div className="border-t border-blue-500/20 p-3 flex items-center justify-between text-sm text-gray-400">
            <div className="flex gap-4 flex-1">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 rounded bg-blue-500/10 text-blue-400">⏎</kbd>
                <span>to select</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 rounded bg-blue-500/10 text-blue-400">↓</kbd>
                  <kbd className="px-2 py-1 rounded bg-blue-500/10 text-blue-400">↑</kbd>
                </div>
                <span>to navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 rounded bg-blue-500/10 text-blue-400">esc</kbd>
                <span>to close</span>
              </div>
            </div>
            {/* <div className="flex items-center gap-2">
              <span>Search by</span>
              <svg width="77" height="19" aria-label="Algolia" role="img" className="text-blue-500">
                <path
                  d="M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 0 1 2.5067 0Zm10.5931 15.0608c-3.8547 0-6.9814-3.1266-6.9814-6.9813 0-3.8547 3.1267-6.9814 6.9814-6.9814 3.8547 0 6.9813 3.1267 6.9813 6.9814 0 3.8547-3.1266 6.9813-6.9813 6.9813Zm0-11.9814c-2.7575 0-5 2.2425-5 5s2.2425 5 5 5 5-2.2425 5-5-2.2425-5-5-5Zm0 8.9814c-2.1683 0-3.9277-1.7594-3.9277-3.9277 0-2.1684 1.7594-3.9278 3.9277-3.9278 2.1683 0 3.9277 1.7594 3.9277 3.9278 0 2.1683-1.7594 3.9277-3.9277 3.9277Zm0-6.1723c-1.2375 0-2.2446 1.007-2.2446 2.2446 0 1.2375 1.007 2.2446 2.2446 2.2446 1.2375 0 2.2446-1.007 2.2446-2.2446 0-1.2375-1.007-2.2446-2.2446-2.2446Z"
                  fill="currentColor"
                />
              </svg>
            </div> */}
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

