import type React from "react"
import { Card } from "@/components/ui/card"
import { Users, BookOpen, Calendar } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Učenici"
          value="350"
          description="+5% u odnosu na prošlu godinu"
          icon={<Users className="h-8 w-8 text-primary" />}
        />
        <StatCard
          title="Nastavnici"
          value="42"
          description="Aktivni nastavnici"
          icon={<Users className="h-8 w-8 text-primary" />}
        />
        <StatCard
          title="Predmeti"
          value="28"
          description="Ukupan broj predmeta"
          icon={<BookOpen className="h-8 w-8 text-primary" />}
        />
        <StatCard
          title="Događaji"
          value="12"
          description="Planirani događaji ovog mjeseca"
          icon={<Calendar className="h-8 w-8 text-primary" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Nedavne vijesti</h2>
          <div className="space-y-4">
            {/* Ovdje će biti lista vijesti */}
            <p className="text-gray-500">Nema nedavnih vijesti</p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Nedavne poruke</h2>
          <div className="space-y-4">
            {/* Ovdje će biti lista poruka */}
            <p className="text-gray-500">Nema nedavnih poruka</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  description,
  icon,
}: {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-xs text-gray-500 mt-2">{description}</p>
        </div>
        <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
      </div>
    </Card>
  )
}

