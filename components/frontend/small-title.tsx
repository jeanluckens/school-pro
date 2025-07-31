import { Sparkles } from 'lucide-react'
import React from 'react'

export default function SmallTitle({title}:{title:string}) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
        <Sparkles className="w-4 h-4 text-pink-500" />
        <span className="text-gray-600 text-sm font-medium">{title}</span>
    </div>
  )
}
