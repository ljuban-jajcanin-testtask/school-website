"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Postavke", href: "/admin/postavke", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
        <div className="flex items-center flex-shrink-0 px-4">
          <Link href="/admin" className="font-bold text-xl text-primary">
            Srednja škola
          </Link>
        </div>
        <div className="mt-5 flex-1 flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href
              const Icon = link.icon

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100",
                  )}
                >
                  <Icon className={cn("mr-3 flex-shrink-0 h-5 w-5", isActive ? "text-white" : "text-gray-500")} />
                  {link.name}
                </Link>
              )
            })}
          </nav>
          <div className="px-2 pb-4">
            <button className="w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100">
              <LogOut className="mr-3 flex-shrink-0 h-5 w-5 text-gray-500" />
              Odjava
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

