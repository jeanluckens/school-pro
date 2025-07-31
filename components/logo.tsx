import React from 'react';
import Link from "next/link";
import { GraduationCap, RabbitIcon } from 'lucide-react';

export default function Logo({variant="dark"}:{variant?:"dark" | "light"; }) {
  if(variant==="light"){
    return (
    <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-blue-500 rounded-full p-1">
            <span className="text-white font-bold text-xl"></span>
            <RabbitIcon/>
            <GraduationCap/>
        </div>
        <span className="font-bold text-xl"><span className='text-blue-500'>LeLapinBlanc</span> School</span>
     </Link>
    )
  }else{
    return (
    <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-white rounded-full p-1">
            <span className="text-blue-800 font-bold text-xl"></span>
            <RabbitIcon/>
            <GraduationCap/>
        </div>
        <span className="font-bold text-xl"><span className='text-blue-100'>LeLapinBlanc</span> School</span>
    </Link>
  )
  }
}
