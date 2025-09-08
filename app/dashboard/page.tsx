"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DollarSign,
  Play,
  Award,
  Bell,
  LogOut,
  User,
  RefreshCw,
  Target,
  TrendingUp,
  Trophy,
  HelpCircle,
  MessageCircle,
  Shield,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react"

export default function Dashboard() {
  const [currentUser] = useState({
    name: "María González",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2016%20de%20jun.%20de%202025%2C%2009_43_18-aZWhlMqwckxd668Em7p4PIIGMQt0Jk.png",
  })

  const [balance] = useState(33.91)
  const [evaluationsLeft] = useState(5)
  const [completedToday] = useState(3)
  const [totalToday] = useState(5)
  const [userRank] = useState(35)

  const tasks = [
    { id: 1, title: "Evaluar thumbnail de producto tecnológico", reward: 2.5, completed: false },
    { id: 2, title: "Revisar video promocional de 30 segundos", reward: 1.75, completed: false },
    { id: 3, title: "Analizar thumbnail de canal de cocina", reward: 2.0, completed: true },
    { id: 4, title: "Evaluar video tutorial de fitness", reward: 3.25, completed: true },
    { id: 5, title: "Revisar thumbnail de contenido educativo", reward: 1.5, completed: true },
  ]

  const earnings = [
    { date: "2024-01-08", task: "Evaluación de thumbnail", amount: 2.5, status: "Completado" },
    { date: "2024-01-07", task: "Revisión de video", amount: 1.75, status: "Completado" },
    { date: "2024-01-06", task: "Análisis de contenido", amount: 3.0, status: "Completado" },
    { date: "2024-01-05", task: "Evaluación múltiple", amount: 4.25, status: "Completado" },
  ]

  const topUsers = [
    { name: "Carlos R.", earnings: 156.8 },
    { name: "Ana L.", earnings: 142.3 },
    { name: "Pedro M.", earnings: 138.9 },
    { name: "Sofia G.", earnings: 125.4 },
    { name: "Luis F.", earnings: 119.6 },
  ]

  const testimonials = [
    {
      name: "Carlos Ruiz",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatars-000652081152-ddbg70-t500x500.jpg-0sAOTPo8Jc78UEJpvQ8WQZpVYJN18t.jpeg",
      text: "Plataforma confiable y pagos puntuales. Lo recomiendo totalmente.",
    },
    {
      name: "Ana López",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ayanna-pressley-posing-outside-xun2ns1ite7b37n3.jpg-8NIPErYDVhgZsc4QH1pzh0UOHmPgKL.jpeg",
      text: "Trabajo flexible que se adapta a mi horario. Ideal para estudiantes.",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">RewardsHub</span>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                3
              </Badge>
            </Button>

            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <span className="hidden md:block text-sm font-medium">{currentUser.name}</span>
            </div>

            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              <span className="hidden md:block">Mi Cuenta</span>
            </Button>

            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              <span className="hidden md:block">Salir</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Balance Section */}
        <Card className="mb-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <DollarSign className="w-6 h-6 mr-2 text-primary" />
              Tu Saldo Actual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-primary mb-2">${balance.toFixed(2)}</div>
                <p className="text-muted-foreground">Disponible para retiro</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 mr-2 text-secondary" />
                  <span className="text-lg font-semibold">{evaluationsLeft} evaluaciones restantes</span>
                </div>
                <p className="text-muted-foreground">Para desbloquear saque</p>
              </div>

              <div className="text-center md:text-right">
                <div className="flex items-center justify-center md:justify-end mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-green-600" />
                  <span className="text-lg font-semibold">Viernes, 13 Sep</span>
                </div>
                <p className="text-muted-foreground">Próximo pago</p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                <RefreshCw className="w-4 h-4 mr-2" />
                Actualizar saldo
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Daily Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />🎯 Avaliações do dia
                </CardTitle>
                <div className="flex items-center space-x-4">
                  <Progress value={(completedToday / totalToday) * 100} className="flex-1" />
                  <span className="text-sm font-medium">
                    {completedToday}/{totalToday} concluídas
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {task.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <Play className="w-5 h-5 text-primary" />
                        )}
                        <div>
                          <h4 className="font-medium">{task.title}</h4>
                          <p className="text-sm text-muted-foreground">Recompensa: ${task.reward}</p>
                        </div>
                      </div>

                      {task.completed ? (
                        <Badge className="bg-green-100 text-green-800 border-green-200">Completado</Badge>
                      ) : (
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          Avaliar
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                {completedToday >= totalToday && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                    <h3 className="font-semibold text-green-800 mb-2">¡Felicitaciones!</h3>
                    <p className="text-green-700 mb-4">Has completado todas las evaluaciones del día</p>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Solicitar saque
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Earnings History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />📈 Histórico de ganhos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2">Data</th>
                        <th className="text-left py-2">Tipo de tarefa</th>
                        <th className="text-left py-2">Valor ganho</th>
                        <th className="text-left py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {earnings.map((earning, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-3 text-sm">{earning.date}</td>
                          <td className="py-3 text-sm">{earning.task}</td>
                          <td className="py-3 text-sm font-medium text-green-600">${earning.amount}</td>
                          <td className="py-3">
                            <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                              {earning.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <Button className="bg-green-600 hover:bg-green-700">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Solicitar saque
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        <Shield className="w-4 h-4 inline mr-1" />🔒 Pagamentos seguros via PayPal
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Pagamentos toda sexta-feira - mínimo $10</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Weekly Ranking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-primary" />🏆 Ranking semanal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Você está na posição</p>
                  <p className="text-2xl font-bold text-primary">#{userRank}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground">Top 5 Avaliadores</h4>
                  {topUsers.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium">{user.name}</span>
                      </div>
                      <span className="text-sm font-bold text-green-600">${user.earnings}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Help */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                  Ajuda rápida
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  FAQ
                </Button>

                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Suporte / Chat
                </Button>

                <div className="p-3 bg-muted/50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">💡 Dica do dia</h4>
                  <p className="text-xs text-muted-foreground">Dê feedback detalhado para aumentar seus ganhos!</p>
                </div>
              </CardContent>
            </Card>

            {/* Rotating Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Depoimentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Avatar className="w-12 h-12 mx-auto mb-3">
                    <AvatarImage src={testimonials[currentTestimonial].avatar || "/placeholder.svg"} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <p className="text-sm text-muted-foreground mb-2">"{testimonials[currentTestimonial].text}"</p>
                  <p className="text-xs font-medium">{testimonials[currentTestimonial].name}</p>

                  <div className="flex justify-center mt-3 space-x-1">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full ${index === currentTestimonial ? "bg-primary" : "bg-muted"}`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 px-4 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Términos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Redes sociales</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs">FB</span>
                </div>
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs">TW</span>
                </div>
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-xs">IG</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center md:justify-start mb-2">
                <Shield className="w-4 h-4 mr-2 text-green-600" />
                <span className="text-sm font-medium">🔒 Pagamentos seguros via PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
