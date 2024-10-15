'use client'

import { Search, Menu, Settings, User, LogOut } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { auth } from "@/auth"
import UserMenu from "@/components/user-menu"

export async function HeaderComponent() {


  const session = await auth()

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#1E1E1E] text-white">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      {session &&
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search issues..."
              className="pl-8 bg-[#2C2C2C] border-0 text-white placeholder-gray-400 focus:ring-0 focus:border-gray-600"
            />
          </div>
        </div>}
      {
        session &&
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div>
              {session &&
                <UserMenu />
              }
            </div>
          </div>
        </div>}
    </header>
  )
}