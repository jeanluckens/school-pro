import React from 'react'
import SmallTitle from './small-title'

export default function SectionHeader({title,heading,description}:{title:string, heading:string, description:string}) {
  return (
    <div className="text-center mb-16">
        <SmallTitle title={title} />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {heading}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {description}
        </p>
    </div>
  )
}
