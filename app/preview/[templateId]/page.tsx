import { getTemplateById } from "@/lib/templates"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export async function generateStaticParams() {
  // Ovo će generirati stranice za sve template-e
  const templates = [
    { templateId: "template1" },
    { templateId: "template2" },
    { templateId: "template3" }
  ];
  
  return templates;
}

export default function TemplatePreviewPage({ params }: { params: { templateId: string } }) {
  const template = getTemplateById(params.templateId)

  if (!template) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Preview header */}
      <header className="bg-primary text-white p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Pregled template-a: {template.name}</h1>
        <Link
          href="/admin/postavke?tab=template"
          className="px-4 py-2 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors"
        >
          Nazad na postavke
        </Link>
      </header>

      {/* Template preview */}
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-[16/9] w-full relative">
              <Image
                src={template.previewImage || "/placeholder.svg"}
                alt={template.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{template.name}</h2>
              <p className="text-gray-600 mb-4">{template.description}</p>
              <p className="text-sm text-gray-500">
                Ovo je pregled template-a. Kada implementiramo stvarne Figma dizajne, ovdje će biti prikazan kompletan
                izgled web sajta sa ovim template-om.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

