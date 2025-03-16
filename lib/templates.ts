export interface Template {
  id: string
  name: string
  description: string
  previewImage: string
  // Ovdje će biti dodatne informacije o template-u, kao što su CSS, komponente, itd.
}

export const templates: Template[] = [
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

// Funkcija za dobijanje template-a po ID-u
export function getTemplateById(id: string): Template | undefined {
  return templates.find((template) => template.id === id)
}

// Funkcija za primjenu template-a
export async function applyTemplate(templateId: string): Promise<boolean> {
  // Ovdje će biti logika za primjenu template-a
  // Ovo će uključivati promjenu CSS-a, komponenti, itd.
  console.log(`Primjena template-a: ${templateId}`)

  // Simulacija uspješne primjene
  return true
}

