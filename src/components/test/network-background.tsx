// ✅ Your NetworkBackground component is solid, just a few tweaks needed to make it work as a true background

// --- FILE: components/background/NetworkBackground.tsx ---

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
  speed: number
}

interface NetworkBackgroundProps {
  nodeCount?: number
  opacity?: number
  speed?: number
  className?: string
}

export default function NetworkBackground({
  nodeCount = 20,
  opacity = 0.15,
  speed = 0.3,
  className = "",
}: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number | null>(null)

  const intensity = 0.4; // 🔥 crank this up for test
const hexAlpha = Math.floor(opacity * intensity * 255).toString(16).padStart(2, "0");

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = width
      canvas.height = height
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    const initNodes = () => {
      const nodes: Node[] = []
      const colors = ["#06d6a0", "#00e5ff", "#7209b7"]
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: Math.random() * 2 + 1.5,
          connections: [],
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.5 + 0.2,
        })
      }
      nodes.forEach((node, i) => {
        const count = Math.floor(Math.random() * 3) + 2
        for (let j = 0; j < count; j++) {
          let target
          do {
            target = Math.floor(Math.random() * nodeCount)
          } while (target === i || node.connections.includes(target))
          node.connections.push(target)
        }
      })
      nodesRef.current = nodes
    }

    const animate = () => {
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      

      nodesRef.current.forEach((node) => {
        node.connections.forEach((targetIndex) => {
          const target = nodesRef.current[targetIndex]
          const dx = node.x - target.x
          const dy = node.y - target.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const max = canvas.width / 4
          if (dist < max) {
            // const o = 1 - dist / max
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(target.x, target.y)
            const grad = ctx.createLinearGradient(node.x, node.y, target.x, target.y)
            // grad.addColorStop(0, `${node.color}${Math.floor(o * o * 40).toString(16).padStart(2, "0")}`)
            // grad.addColorStop(1, `${target.color}${Math.floor(o * o * 40).toString(16).padStart(2, "0")}`)
            grad.addColorStop(0, `${node.color}${hexAlpha}`);
grad.addColorStop(1, `${target.color}${hexAlpha}`);
            ctx.strokeStyle = grad
            ctx.stroke()
          }
        })
      })

      nodesRef.current.forEach((node) => {
        node.x += node.vx * node.speed
        node.y += node.vy * node.speed
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        // ctx.fillStyle = `${node.color}${Math.floor(opacity * 100).toString(16).padStart(2, "0")}`
        ctx.fillStyle = `${node.color}${Math.floor(opacity * 255).toString(16).padStart(2, "0")}`;

        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    setCanvasDimensions()
    initNodes()
    animate()

    window.addEventListener("resize", () => {
      setCanvasDimensions()
      initNodes()
    })

    

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [nodeCount, opacity, speed])

  

  return (
    // <canvas
    //   ref={canvasRef}
    //   className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none ${className}`}
    //   style={{ opacity }}
    // />
    <canvas
    ref={canvasRef}
    className={`fixed inset-0 w-full h-full -z-10 pointer-events-none ${className}`}
    style={{
      opacity,
      background: "transparent", // ✅ no background color
    }}
  />
  )
}
