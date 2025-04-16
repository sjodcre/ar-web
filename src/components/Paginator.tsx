// components/Paginator.tsx
import { useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Topic } from "@/hooks/usePagination"
import { usePagination } from "@/hooks/usePagination"

interface PaginatorProps {
  topics: Topic[]
  page?: string
  subpage?: string
  subsubpage?: string
  basePath: string
}

export function Paginator({ topics, page, subpage, subsubpage, basePath }: PaginatorProps) {
  const navigate = useNavigate()
  const { prevPath, nextPath, prevTitle, nextTitle } = usePagination({ topics, page, subpage, subsubpage, basePath })

  return (
    <div className="flex justify-between mt-6 w-full">
      <button
        onClick={() => prevPath && navigate(prevPath)}
        disabled={!prevPath}
        className={`p-3 rounded-md flex items-center gap-2 transition-colors ${prevPath
          ? "bg-card hover:bg-secondary/10 border border-secondary/20 cursor-pointer"
          : "opacity-50 cursor-not-allowed bg-card/50 border border-muted"
          }`}
      >
        <ChevronLeft className="h-5 w-5" />
        <div className="flex flex-col items-start text-left">
          <span className="text-xs text-muted-foreground">Previous</span>
          <span className="font-medium">{prevTitle || "None"}</span>
        </div>
      </button>

      <button
        onClick={() => nextPath && navigate(nextPath)}
        disabled={!nextPath}
        className={`p-3 rounded-md flex items-center gap-2 transition-colors ${nextPath
          ? "bg-card hover:bg-secondary/10 border border-secondary/20"
          : "opacity-50 cursor-not-allowed bg-card/50 border border-muted"
          }`}
      >
        <div className="flex flex-col items-end text-right">
          <span className="text-xs text-muted-foreground">Next</span>
          <span className="font-medium">{nextTitle || "None"}</span>
        </div>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
