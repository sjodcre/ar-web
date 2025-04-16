// // hooks/usePagination.ts
// import { useMemo } from "react"

// export interface Subtopic {
//   title: string
//   path: string
//   subtopics?: Subtopic[]
// }

// export interface Topic {
//   title: string
//   path: string
//   subtopics: Subtopic[]
// }

// interface PaginationResult {
//   prevPath: string | null
//   nextPath: string | null
//   prevTitle: string | null
//   nextTitle: string | null
// }

// interface UsePaginationProps {
//   topics: Topic[]
//   page?: string
//   subpage?: string
//   subsubpage?: string
//   basePath: string
// }

// export function usePagination({
//   topics,
//   page,
//   subpage,
//   subsubpage,
//   basePath,
// }: UsePaginationProps): PaginationResult {
//   return useMemo(() => {
//     const topicIndex = topics.findIndex((t) => t.path === page)
//     const subtopicIndex =
//       topicIndex !== -1 ? topics[topicIndex].subtopics.findIndex((s) => s.path === subpage) : -1
//     const subsubtopicIndex =
//       subtopicIndex !== -1 && topics[topicIndex].subtopics[subtopicIndex]?.subtopics
//         ? topics[topicIndex].subtopics[subtopicIndex].subtopics!.findIndex((s) => s.path === subsubpage)
//         : -1

//     let prevPath: string | null = null
//     let nextPath: string | null = null
//     let prevTitle: string | null = null
//     let nextTitle: string | null = null

//     const buildPath = (...parts: string[]) => [basePath, ...parts].join("/")

//     if (topicIndex !== -1) {
//       const currentTopic = topics[topicIndex]

//       if (subtopicIndex !== -1 && currentTopic.subtopics) {
//         const currentSubtopic = currentTopic.subtopics[subtopicIndex]

//         if (subsubtopicIndex !== -1 && currentSubtopic.subtopics) {
//           // Inside sub-subtopic
//           if (subsubtopicIndex > 0) {
//             const prev = currentSubtopic.subtopics[subsubtopicIndex - 1]
//             prevPath = buildPath(page!, subpage!, prev.path)
//             prevTitle = prev.title
//           } else if (subtopicIndex > 0) {
//             const prev = currentTopic.subtopics[subtopicIndex - 1]
//             prevPath = buildPath(page!, prev.path)
//             prevTitle = prev.title
//           } else if (topicIndex > 0) {
//             const prevTopic = topics[topicIndex - 1]
//             const prevSub = prevTopic.subtopics[prevTopic.subtopics.length - 1]
//             prevPath = buildPath(prevTopic.path, prevSub.path)
//             prevTitle = prevSub.title
//           }

//           if (subsubtopicIndex < currentSubtopic.subtopics.length - 1) {
//             const next = currentSubtopic.subtopics[subsubtopicIndex + 1]
//             nextPath = buildPath(page!, subpage!, next.path)
//             nextTitle = next.title
//           } else if (subtopicIndex < currentTopic.subtopics.length - 1) {
//             const next = currentTopic.subtopics[subtopicIndex + 1]
//             nextPath = buildPath(page!, next.path)
//             nextTitle = next.title
//           } else if (topicIndex < topics.length - 1) {
//             const nextTopic = topics[topicIndex + 1]
//             const nextSub = nextTopic.subtopics[0]
//             nextPath = buildPath(nextTopic.path, nextSub.path)
//             nextTitle = nextSub.title
//           }
//         } else {
//           // Inside subtopic
//           if (subtopicIndex > 0) {
//             const prev = currentTopic.subtopics[subtopicIndex - 1]
//             prevPath = buildPath(page!, prev.path)
//             prevTitle = prev.title
//           } else if (topicIndex > 0) {
//             const prevTopic = topics[topicIndex - 1]
//             const prevSub = prevTopic.subtopics[prevTopic.subtopics.length - 1]
//             prevPath = buildPath(prevTopic.path, prevSub.path)
//             prevTitle = prevSub.title
//           }

//           if (subtopicIndex < currentTopic.subtopics.length - 1) {
//             const next = currentTopic.subtopics[subtopicIndex + 1]
//             nextPath = buildPath(page!, next.path)
//             nextTitle = next.title
//           } else if (topicIndex < topics.length - 1) {
//             const nextTopic = topics[topicIndex + 1]
//             const nextSub = nextTopic.subtopics[0]
//             nextPath = buildPath(nextTopic.path, nextSub.path)
//             nextTitle = nextSub.title
//           }
//         }
//       } else {
//         // Inside a main topic without subtopic
//         if (topicIndex > 0) {
//           const prevTopic = topics[topicIndex - 1]
//           const prevSub = prevTopic.subtopics[prevTopic.subtopics.length - 1]
//           prevPath = buildPath(prevTopic.path, prevSub.path)
//           prevTitle = prevSub.title
//         }
//         if (topicIndex < topics.length - 1) {
//           const nextTopic = topics[topicIndex + 1]
//           const nextSub = nextTopic.subtopics[0]
//           nextPath = buildPath(nextTopic.path, nextSub.path)
//           nextTitle = nextSub.title
//         }
//       }
//     }

//     return { prevPath, nextPath, prevTitle, nextTitle }
//   }, [topics, page, subpage, subsubpage, basePath])
// }

// hooks/usePagination.ts
import { useMemo } from "react"

export interface Subtopic {
  title: string
  path: string
  subtopics?: Subtopic[]
}

export interface Topic {
  title: string
  path: string
  subtopics: Subtopic[]
}

interface PaginationResult {
  prevPath: string | null
  nextPath: string | null
  prevTitle: string | null
  nextTitle: string | null
}

interface UsePaginationProps {
  topics: Topic[]
  page?: string
  subpage?: string
  subsubpage?: string
  basePath: string
}

export function usePagination({
  topics,
  page,
  subpage,
  subsubpage,
  basePath,
}: UsePaginationProps): PaginationResult {
  return useMemo(() => {
    const topicIndex = topics.findIndex((t) => t.path === page)
    const subtopicIndex =
      topicIndex !== -1 ? topics[topicIndex].subtopics.findIndex((s) => s.path === subpage) : -1
    const subsubtopicIndex =
      subtopicIndex !== -1 && topics[topicIndex].subtopics[subtopicIndex]?.subtopics
        ? topics[topicIndex].subtopics[subtopicIndex].subtopics!.findIndex((s) => s.path === subsubpage)
        : -1

    let prevPath: string | null = null
    let nextPath: string | null = null
    let prevTitle: string | null = null
    let nextTitle: string | null = null

    const buildPath = (...parts: string[]) => [basePath, ...parts].join("/")

    if (topicIndex !== -1) {
      const currentTopic = topics[topicIndex]

      if (subtopicIndex !== -1 && currentTopic.subtopics) {
        const currentSubtopic = currentTopic.subtopics[subtopicIndex]

        if (subsubtopicIndex !== -1 && currentSubtopic.subtopics) {
          // Inside sub-subtopic
          if (subsubtopicIndex > 0) {
            const prev = currentSubtopic.subtopics[subsubtopicIndex - 1]
            prevPath = buildPath(page!, subpage!, prev.path)
            prevTitle = prev.title
          } else if (subtopicIndex > 0) {
            const prev = currentTopic.subtopics[subtopicIndex - 1]
            if (prev.subtopics?.length) {
              prevPath = buildPath(page!, prev.path, prev.subtopics[prev.subtopics.length - 1].path)
              prevTitle = prev.subtopics[prev.subtopics.length - 1].title
            } else {
              prevPath = buildPath(page!, prev.path)
              prevTitle = prev.title
            }
          } else if (topicIndex > 0) {
            const prevTopic = topics[topicIndex - 1]
            const lastSub = prevTopic.subtopics[prevTopic.subtopics.length - 1]
            if (lastSub.subtopics?.length) {
              prevPath = buildPath(prevTopic.path, lastSub.path, lastSub.subtopics[lastSub.subtopics.length - 1].path)
              prevTitle = lastSub.subtopics[lastSub.subtopics.length - 1].title
            } else {
              prevPath = buildPath(prevTopic.path, lastSub.path)
              prevTitle = lastSub.title
            }
          }

          if (subsubtopicIndex < currentSubtopic.subtopics.length - 1) {
            const next = currentSubtopic.subtopics[subsubtopicIndex + 1]
            nextPath = buildPath(page!, subpage!, next.path)
            nextTitle = next.title
          } else if (subtopicIndex < currentTopic.subtopics.length - 1) {
            const next = currentTopic.subtopics[subtopicIndex + 1]
            if (next.subtopics?.length) {
              nextPath = buildPath(page!, next.path, next.subtopics[0].path)
              nextTitle = next.subtopics[0].title
            } else {
              nextPath = buildPath(page!, next.path)
              nextTitle = next.title
            }
          } else if (topicIndex < topics.length - 1) {
            const nextTopic = topics[topicIndex + 1]
            const firstSub = nextTopic.subtopics[0]
            if (firstSub.subtopics?.length) {
              nextPath = buildPath(nextTopic.path, firstSub.path, firstSub.subtopics[0].path)
              nextTitle = firstSub.subtopics[0].title
            } else {
              nextPath = buildPath(nextTopic.path, firstSub.path)
              nextTitle = firstSub.title
            }
          }
        } else {
          // Inside subtopic
          if (subtopicIndex > 0) {
            const prev = currentTopic.subtopics[subtopicIndex - 1]
            if (prev.subtopics?.length) {
              prevPath = buildPath(page!, prev.path, prev.subtopics[prev.subtopics.length - 1].path)
              prevTitle = prev.subtopics[prev.subtopics.length - 1].title
            } else {
              prevPath = buildPath(page!, prev.path)
              prevTitle = prev.title
            }
          } else if (topicIndex > 0) {
            const prevTopic = topics[topicIndex - 1]
            const lastSub = prevTopic.subtopics[prevTopic.subtopics.length - 1]
            if (lastSub.subtopics?.length) {
              prevPath = buildPath(prevTopic.path, lastSub.path, lastSub.subtopics[lastSub.subtopics.length - 1].path)
              prevTitle = lastSub.subtopics[lastSub.subtopics.length - 1].title
            } else {
              prevPath = buildPath(prevTopic.path, lastSub.path)
              prevTitle = lastSub.title
            }
          }

          if (subtopicIndex < currentTopic.subtopics.length - 1) {
            const next = currentTopic.subtopics[subtopicIndex + 1]
            if (next.subtopics?.length) {
              nextPath = buildPath(page!, next.path, next.subtopics[0].path)
              nextTitle = next.subtopics[0].title
            } else {
              nextPath = buildPath(page!, next.path)
              nextTitle = next.title
            }
          } else if (topicIndex < topics.length - 1) {
            const nextTopic = topics[topicIndex + 1]
            const firstSub = nextTopic.subtopics[0]
            if (firstSub.subtopics?.length) {
              nextPath = buildPath(nextTopic.path, firstSub.path, firstSub.subtopics[0].path)
              nextTitle = firstSub.subtopics[0].title
            } else {
              nextPath = buildPath(nextTopic.path, firstSub.path)
              nextTitle = firstSub.title
            }
          }
        }
      } else {
        // Inside main topic only
        if (topicIndex > 0) {
          const prevTopic = topics[topicIndex - 1]
          const lastSub = prevTopic.subtopics[prevTopic.subtopics.length - 1]
          if (lastSub.subtopics?.length) {
            prevPath = buildPath(prevTopic.path, lastSub.path, lastSub.subtopics[lastSub.subtopics.length - 1].path)
            prevTitle = lastSub.subtopics[lastSub.subtopics.length - 1].title
          } else {
            prevPath = buildPath(prevTopic.path, lastSub.path)
            prevTitle = lastSub.title
          }
        }

        if (topicIndex < topics.length - 1) {
          const nextTopic = topics[topicIndex + 1]
          const firstSub = nextTopic.subtopics[0]
          if (firstSub.subtopics?.length) {
            nextPath = buildPath(nextTopic.path, firstSub.path, firstSub.subtopics[0].path)
            nextTitle = firstSub.subtopics[0].title
          } else {
            nextPath = buildPath(nextTopic.path, firstSub.path)
            nextTitle = firstSub.title
          }
        }
      }
    }

    return { prevPath, nextPath, prevTitle, nextTitle }
  }, [topics, page, subpage, subsubpage, basePath])
}
