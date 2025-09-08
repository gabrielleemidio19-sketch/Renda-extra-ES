"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface SignupPopupProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { name: string; email: string }) => void
}

export function SignupPopup({ isOpen, onClose, onSubmit }: SignupPopupProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    onSubmit({ name: name.trim(), email: email.trim() })
    setIsSubmitting(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto animate-in fade-in-0 zoom-in-95 duration-300">
        <CardHeader className="relative">
          <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl font-bold text-center text-foreground">🎉 ¡Únete a RewardsHub!</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Completa tu registro y comienza a ganar dinero evaluando videos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Nombre completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Correo electrónico
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-border"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              disabled={isSubmitting || !name.trim() || !email.trim()}
            >
              {isSubmitting ? "Registrando..." : "¡Comenzar a ganar dinero!"}
            </Button>

            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Al registrarte, aceptas nuestros{" "}
              <a href="#" className="text-primary hover:underline">
                Términos de Uso
              </a>{" "}
              y{" "}
              <a href="#" className="text-primary hover:underline">
                Política de Privacidad
              </a>
              . Nunca compartiremos tu información personal.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
