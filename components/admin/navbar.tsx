"use client"

import { useState } from "react"
import { Menu, Bell, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Otvori glavni meni</span>
            </Button>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Pretraga..."
                  className="pl-10 pr-4 py-2 border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="ml-4">
              <Bell className="h-6 w-6" />
              <span className="sr-only">Obavještenja</span>
            </Button>
            <div className="ml-4 flex items-center">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">A</div>
              <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">Administrator</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 flex">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6 text-white" />
                  <span className="sr-only">Zatvori meni</span>
                </Button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <span className="font-bold text-xl text-primary">Srednja škola</span>
                </div>
                <nav className="mt-5 px-2 space-y-1">{/* Ovdje će biti mobilni meni */}</nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

