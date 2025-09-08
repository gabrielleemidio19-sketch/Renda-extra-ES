"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface ScratchCardProps {
  onComplete: () => void
}

export function ScratchCard({ onComplete }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isScratching, setIsScratching] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const [scratchPercentage, setScratchPercentage] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 320
    canvas.height = 200

    // Create scratch surface
    ctx.fillStyle = "#f59e0b"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add text on scratch surface
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 18px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("🎁 Raspa aquí para", canvas.width / 2, canvas.height / 2 - 20)
    ctx.fillText("descubrir tu recompensa inicial", canvas.width / 2, canvas.height / 2 + 10)

    // Set up scratch effect
    ctx.globalCompositeOperation = "destination-out"
  }, [])

  const scratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas || isRevealed) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    let x, y

    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    // Scale coordinates for canvas resolution
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    x *= scaleX
    y *= scaleY

    ctx.beginPath()
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()

    // Check scratch percentage
    checkScratchPercentage()
  }

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data
    let transparentPixels = 0

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++
      }
    }

    const percentage = (transparentPixels / (canvas.width * canvas.height)) * 100
    setScratchPercentage(percentage)

    if (percentage > 30 && !isRevealed) {
      setIsRevealed(true)
      setTimeout(() => {
        onComplete()
      }, 1000)
    }
  }

  const handleMouseDown = () => setIsScratching(true)
  const handleMouseUp = () => setIsScratching(false)
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isScratching) scratch(e)
  }

  const handleTouchStart = () => setIsScratching(true)
  const handleTouchEnd = () => setIsScratching(false)
  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    if (isScratching) scratch(e)
  }

  return (
    <div className="relative w-80 h-50 mx-auto mb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex flex-col items-center justify-center text-green-900 shadow-lg border-2 border-green-200">
        <div className="text-4xl font-bold mb-2 text-green-800">$33.91</div>
        <div className="text-lg font-semibold text-green-700">¡Tu recompensa inicial!</div>
      </div>

      {/* Scratch canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 rounded-xl cursor-pointer touch-none"
        style={{
          width: "100%",
          height: "100%",
          opacity: isRevealed ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      />

      {!isRevealed && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm text-muted-foreground animate-pulse">Usa tu dedo o mouse para raspar</p>
        </div>
      )}
    </div>
  )
}
