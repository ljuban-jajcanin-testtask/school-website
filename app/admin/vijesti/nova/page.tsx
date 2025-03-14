"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function NovaVijestPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Ovdje će biti logika za slanje podataka na server

    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/admin/vijesti")
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Nova vijest</h1>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Naslov</Label>
            <Input id="title" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Sadržaj</Label>
            <Textarea id="content" rows={10} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Slika</Label>
            <Input id="image" type="file" />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/vijesti")}
              disabled={isSubmitting}
            >
              Odustani
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Spremanje..." : "Spremi"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

