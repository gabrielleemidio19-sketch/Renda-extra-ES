"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Play, Star, Users, Award } from "lucide-react"
import { ScratchCard } from "@/components/scratch-card"
import { Confetti } from "@/components/confetti"
import { SignupPopup } from "@/components/signup-popup"

export default function RewardsHubLanding() {
  const [showScratchCard, setShowScratchCard] = useState(true)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showReward, setShowReward] = useState(false)
  const [showSignupPopup, setShowSignupPopup] = useState(false)

  const handleScratchComplete = () => {
    setShowScratchCard(false)
    setShowConfetti(true)
    setShowReward(true)
  }

  const handleSignupClick = () => {
    setShowSignupPopup(true)
  }

  const handleSignupSubmit = (data: { name: string; email: string }) => {
    console.log("Signup data:", data)
    setShowSignupPopup(false)
    window.location.href = "/dashboard"
  }

  const handleSignupClose = () => {
    setShowSignupPopup(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Confetti show={showConfetti} onComplete={() => setShowConfetti(false)} />
      <SignupPopup isOpen={showSignupPopup} onClose={handleSignupClose} onSubmit={handleSignupSubmit} />

      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">RewardsHub</span>
          </div>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={handleSignupClick}
          >
            Acceder
          </Button>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto text-center max-w-4xl">
          {showScratchCard ? (
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-balance">
                Has sido seleccionado para ganar dinero evaluando videos
              </h1>
              <ScratchCard onComplete={handleScratchComplete} />
            </div>
          ) : (
            <div className="mb-8">
              {showReward && (
                <div className="animate-in fade-in-0 zoom-in-95 duration-500">
                  <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20 text-lg px-4 py-2 animate-pulse">
                    🎉 ¡Has ganado $33.91!
                  </Badge>
                </div>
              )}
              <div className="text-6xl font-bold text-primary mb-2 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
                $33.91
              </div>
              <p className="text-muted-foreground text-lg mb-6">Tu saldo actual disponible</p>
            </div>
          )}

          {!showScratchCard && (
            <>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Has sido seleccionado para ganar dinero evaluando videos
              </h1>

              <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                Conectamos anunciantes con usuarios como tú para evaluar videos y thumbnails. Gana recompensas reales
                vía PayPal por tu opinión honesta.
              </p>

              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 mb-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 shadow-lg"
                onClick={handleSignupClick}
              >
                <DollarSign className="w-5 h-5 mr-2" />
                ¡Haz click aquí y comienza!
              </Button>

              <p className="text-sm text-muted-foreground">
                Completa 5 evaluaciones más para desbloquear tu primer pago
              </p>
            </>
          )}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">¿Quiénes somos?</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Somos una plataforma que conecta anunciantes con usuarios reales para obtener feedback valioso sobre sus
            contenidos. Tu opinión ayuda a mejorar la calidad de los videos y thumbnails, mientras tú ganas dinero por
            cada evaluación completada.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">¿Cómo funciona?</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Te registras</h3>
              <p className="text-muted-foreground">Crea tu cuenta gratuita en menos de 2 minutos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ves videos y thumbnails</h3>
              <p className="text-muted-foreground">Evalúa contenido de alta calidad desde tu dispositivo</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Das tu opinión</h3>
              <p className="text-muted-foreground">Comparte tu feedback honesto y detallado</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Recibes recompensas vía PayPal</h3>
              <p className="text-muted-foreground">Cobra tus ganancias de forma rápida y segura</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Preguntas Frecuentes</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">¿Cuánto puedo ganar?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Puedes ganar entre $0.50 y $5.00 por evaluación, dependiendo de la complejidad. Los usuarios activos
                  ganan un promedio de $50-200 por mes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">¿Cómo retiro mi dinero?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Los pagos se realizan vía PayPal cada viernes. El mínimo para retirar es $10. El proceso es automático
                  y seguro.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">¿Necesito experiencia previa?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  No necesitas experiencia. Solo requieres ser mayor de 18 años, tener acceso a internet y dar opiniones
                  honestas sobre el contenido.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">¿Es gratis participar?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  Completamente gratis. Nunca te pediremos dinero por adelantado. Tú ganas dinero, no lo gastas.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Lo que dicen nuestros usuarios
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2016%20de%20jun.%20de%202025%2C%2009_43_18-aZWhlMqwckxd668Em7p4PIIGMQt0Jk.png"
                    alt="María González"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">María González</h4>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "En 3 meses he ganado más de $400. Es perfecto para generar ingresos extra desde casa."
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatars-000652081152-ddbg70-t500x500.jpg-0sAOTPo8Jc78UEJpvQ8WQZpVYJN18t.jpeg"
                    alt="Carlos Ruiz"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">Carlos Ruiz</h4>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Plataforma confiable y pagos puntuales. Lo recomiendo totalmente."
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ayanna-pressley-posing-outside-xun2ns1ite7b37n3.jpg-8NIPErYDVhgZsc6QH1pzh0UOHmPgKL.jpeg"
                    alt="Ana López"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">Ana López</h4>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Trabajo flexible que se adapta a mi horario. Ideal para estudiantes."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">RewardsHub</span>
              </div>
              <p className="text-primary-foreground/80">
                La plataforma líder para ganar dinero evaluando contenido digital.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Términos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground transition-colors">
                    Chat en Vivo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">FB</span>
                </div>
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">TW</span>
                </div>
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm">IG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80 mb-2">© 2024 RewardsHub. Todos los derechos reservados.</p>
            <p className="text-sm text-primary-foreground/60">
              No estamos afiliados a YouTube ni a ninguna otra plataforma de video.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
