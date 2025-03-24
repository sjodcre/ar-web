"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  connections: number[]
  color: string
}

interface NetworkVisualizationProps {
  nodeCount?: number
  height?: number
  interactive?: boolean
  className?: string
}

export default function NetworkVisualization({
  nodeCount = 12,
  height = 180,
  interactive = true,
  className = "",
}: NetworkVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${height}px`
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Initialize nodes
    const initNodes = () => {
      const nodes: Node[] = []
      const colors = ["#06d6a0", "#00e5ff", "#7209b7"]

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 2,
          connections: [],
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }

      // Create connections (each node connects to 2-4 other nodes)
      nodes.forEach((node, i) => {
        const connectionCount = Math.floor(Math.random() * 3) + 2
        for (let j = 0; j < connectionCount; j++) {
          let targetIndex
          do {
            targetIndex = Math.floor(Math.random() * nodeCount)
          } while (targetIndex === i || node.connections.includes(targetIndex))

          node.connections.push(targetIndex)
        }
      })

      nodesRef.current = nodes
    }

    initNodes()

    // Animation loop
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.lineWidth = 0.5

      nodesRef.current.forEach((node, i) => {
        node.connections.forEach((targetIndex) => {
          const target = nodesRef.current[targetIndex]

          // Calculate distance for opacity
          const dx = node.x - target.x
          const dy = node.y - target.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = canvas.width / 3

          // Only draw if nodes are within a certain distance
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance

            // Draw connection line
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(target.x, target.y)

            // Create gradient for line
            const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y)
            gradient.addColorStop(
              0,
              `${node.color}${Math.floor(opacity * 40)
                .toString(16)
                .padStart(2, "0")}`,
            )
            gradient.addColorStop(
              1,
              `${target.color}${Math.floor(opacity * 40)
                .toString(16)
                .padStart(2, "0")}`,
            )

            ctx.strokeStyle = gradient
            ctx.stroke()

            // Occasionally add data packet animation
            if (Math.random() < 0.002) {
              const packetSize = 2
              const packetX = node.x + (target.x - node.x) * Math.random()
              const packetY = node.y + (target.y - node.y) * Math.random()

              ctx.beginPath()
              ctx.arc(packetX, packetY, packetSize, 0, Math.PI * 2)
              ctx.fillStyle = "#ffffff80"
              ctx.fill()
            }
          }
        })
      })

      // Update and draw nodes
      nodesRef.current.forEach((node) => {
        // Apply mouse interaction if active
        if (interactive && mouseRef.current.active) {
          const dx = mouseRef.current.x - node.x
          const dy = mouseRef.current.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const force = 0.2 * (1 - distance / 100)
            node.vx += (dx * force) / distance
            node.vy += (dy * force) / distance
          }
        }

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Boundary check
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Apply friction
        node.vx *= 0.99
        node.vy *= 0.99

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${node.color}80`
        ctx.fill()

        // Draw node glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(node.x, node.y, node.radius / 2, node.x, node.y, node.radius * 2)
        gradient.addColorStop(0, `${node.color}40`)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Mouse interaction
    if (interactive) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current.x = e.clientX - rect.left
        mouseRef.current.y = e.clientY - rect.top
      }

      const handleMouseEnter = () => {
        mouseRef.current.active = true
      }

      const handleMouseLeave = () => {
        mouseRef.current.active = false
      }

      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("mouseenter", handleMouseEnter)
      canvas.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseenter", handleMouseEnter)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
        window.removeEventListener("resize", setCanvasDimensions)
        cancelAnimationFrame(animationId)
      }
    }

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [nodeCount, height, interactive])

  return (
    <div className={`relative overflow-hidden rounded-lg border border-secondary/20 ${className}`}>
      <canvas ref={canvasRef} className="w-full cursor-pointer" style={{ height: `${height}px` }} />
      {interactive && (
        <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-card/80 px-2 py-1 rounded-md backdrop-blur-sm">
          Interactive Network
        </div>
      )}
    </div>
  )
}

