import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Srednja škola</h1>
      <p className="mb-8">Dobrodošli na web sajt naše škole</p>
      <Link href="/admin" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Admin Panel
      </Link>
    </main>
  )
}

