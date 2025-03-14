"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Globe, Mail, User, Layout } from "lucide-react"
import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Ovo će biti zamijenjeno sa stvarnim Figma dizajnima koje ćete dostaviti
const templates = [
  {
    id: "template1",
    name: "Moderan dizajn",
    description: "Moderan i minimalistički dizajn sa fokusom na sadržaj.",
    previewImage: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "template2",
    name: "Klasičan dizajn",
    description: "Tradicionalni dizajn sa sidebar navigacijom i jasnom strukturom.",
    previewImage: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "template3",
    name: "Kreativni dizajn",
    description: "Inovativni dizajn sa modernim elementima i animacijama.",
    previewImage: "/placeholder.svg?height=200&width=300",
  },
]

export default function PostavkePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState("template1")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Ovdje će biti logika za slanje podataka na server i primjenu izabranog template-a
    console.log(`Primjena template-a: ${selectedTemplate}`)

    setTimeout(() => {
      setIsSubmitting(false)
      // Prikazati poruku o uspjehu
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Postavke</h1>

      <Tabs defaultValue="opste">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="opste" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>Opšte</span>
          </TabsTrigger>
          <TabsTrigger value="korisnici" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Korisnici</span>
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </TabsTrigger>
          <TabsTrigger value="template" className="flex items-center gap-2">
            <Layout className="h-4 w-4" />
            <span>Template</span>
          </TabsTrigger>
        </TabsList>

        {/* Opšte postavke */}
        <TabsContent value="opste">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="school-name">Naziv škole</Label>
                <Input id="school-name" defaultValue="Srednja škola" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school-slogan">Slogan škole</Label>
                <Input id="school-slogan" defaultValue="Znanje je moć" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school-address">Adresa</Label>
                <Input id="school-address" defaultValue="Ulica škole 123, Grad" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school-phone">Telefon</Label>
                <Input id="school-phone" defaultValue="+387 00 000 000" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school-email">Email</Label>
                <Input id="school-email" type="email" defaultValue="info@skola.edu" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school-description">Opis škole</Label>
                <Textarea
                  id="school-description"
                  rows={5}
                  defaultValue="Naša škola pruža kvalitetno obrazovanje već više od 50 godina..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school-logo">Logo škole</Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                    Logo
                  </div>
                  <Input id="school-logo" type="file" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Spremanje..." : "Spremi promjene"}
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>

        {/* Korisnici */}
        <TabsContent value="korisnici">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Administratori</h2>
                <Button>Dodaj korisnika</Button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Ime
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Uloga
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Akcije</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">Administrator</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">admin@skola.edu</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">Administrator</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Aktivan
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-primary hover:text-primary-dark mr-4">Uredi</button>
                        <button className="text-red-600 hover:text-red-900">Obriši</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Email postavke */}
        <TabsContent value="email">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="smtp-host">SMTP Host</Label>
                <Input id="smtp-host" defaultValue="smtp.example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-port">SMTP Port</Label>
                <Input id="smtp-port" defaultValue="587" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-user">SMTP Korisnik</Label>
                <Input id="smtp-user" defaultValue="info@skola.edu" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smtp-password">SMTP Lozinka</Label>
                <Input id="smtp-password" type="password" defaultValue="********" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="from-email">Email za slanje</Label>
                <Input id="from-email" type="email" defaultValue="info@skola.edu" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="from-name">Ime za slanje</Label>
                <Input id="from-name" defaultValue="Srednja škola" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="use-smtp" />
                <Label htmlFor="use-smtp">Koristi SMTP za slanje emaila</Label>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Spremanje..." : "Spremi promjene"}
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>

        {/* Template */}
        <TabsContent value="template">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Izaberite template za web sajt</h2>
                <p className="text-sm text-gray-500">
                  Izaberite jedan od ponuđenih dizajna za frontend vašeg web sajta. Promjena template-a će promijeniti
                  kompletan izgled sajta prema izabranom Figma dizajnu.
                </p>

                <RadioGroup value={selectedTemplate} onValueChange={setSelectedTemplate} className="space-y-6 pt-4">
                  {templates.map((template) => (
                    <div key={template.id} className="relative">
                      <RadioGroupItem value={template.id} id={template.id} className="sr-only" />
                      <Label
                        htmlFor={template.id}
                        className={`block cursor-pointer rounded-lg border-2 p-4 ${
                          selectedTemplate === template.id
                            ? "border-primary"
                            : "border-transparent hover:border-gray-200"
                        }`}
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/3">
                            <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-100">
                              <Image
                                src={template.previewImage || "/placeholder.svg"}
                                alt={template.name}
                                width={300}
                                height={200}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="md:w-2/3 space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-medium">{template.name}</span>
                              {selectedTemplate === template.id && (
                                <span className="text-sm font-medium text-primary">Trenutno aktivan</span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">{template.description}</p>
                            <div className="pt-4">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => window.open(`/preview/${template.id}`, "_blank")}
                              >
                                Pregledaj
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Primjena..." : "Primijeni template"}
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

