'use client'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, Play, Pause, MoreHorizontal, Briefcase } from "lucide-react"
import { auth } from "@/auth"

export async function TimeEntryListComponent() {

  const session = await auth()

  const timeEntries = [
    { id: "TE-001", project: "Website Redesign", description: "Homepage layout", startTime: "09:00 AM", duration: "2h 15m", status: "Completed" },
    { id: "TE-002", project: "Mobile App", description: "User authentication", startTime: "11:30 AM", duration: "1h 45m", status: "In Progress" },
    { id: "TE-003", project: "Database Optimization", description: "Query performance", startTime: "02:00 PM", duration: "3h 00m", status: "Completed" },
    { id: "TE-004", project: "Client Meeting", description: "Project planning", startTime: "04:30 PM", duration: "1h 00m", status: "In Progress" },
  ]

  return (
    <>
    {session && (<div className="p-4 bg-gray-900 text-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Time Entries
          <Badge variant="secondary" className="ml-2">{timeEntries.length}</Badge>
        </h2>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
      <div className="divide-y divide-gray-700">
        {timeEntries.map((entry) => (
          <div key={entry.id} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">{entry.id}</span>
              <div className="flex flex-col">
                <span className="font-medium">{entry.project}</span>
                <span className="text-sm text-gray-400">{entry.description}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-blue-500 text-white">
                <Clock className="w-3 h-3 mr-1" />
                {entry.startTime}
              </Badge>
              <Badge variant="secondary" className="bg-green-600">
                <Briefcase className="w-3 h-3 mr-1" />
                {entry.duration}
              </Badge>
              <Badge variant={entry.status === "Completed" ? "secondary" : "outline"} className={entry.status === "Completed" ? "bg-gray-600" : "text-yellow-400 border-yellow-400"}>
                {entry.status === "Completed" ? <Clock className="w-3 h-3 mr-1" /> : <Play className="w-3 h-3 mr-1" />}
                {entry.status}
              </Badge>
              <Button variant="ghost" size="icon">
                {entry.status === "In Progress" ? <Pause className="w-4 h-4 text-yellow-400" /> : <Play className="w-4 h-4 text-green-400" />}
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Button variant="ghost" className="mt-4 text-gray-400">
        + New Time Entry
      </Button>
    </div>)}
    </>
  )
}