import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props{
   title:string
   
   // movie: Movie |DocumentData[]
   movies:Movie[],
}
function Row({title,movies}:Props) {
  const rowRef= useRef<HTMLDivElement>(null)
  const[isMoved,setIsMoved]=useState(false)
  const handleClick=(direction :string)=>{
    setIsMoved(true)
    if(rowRef.current){
      const{scrollLeft,clientWidth}=rowRef.current

      const scrollTo =
      direction==="left"
      ? scrollLeft-clientWidth
      :scrollLeft+clientWidth
      rowRef.current.scrollTo({left:scrollTo,behavior:'smooth'})
    }
  }
  
  return (
    <div className='h-56 space-y-0.5 md:space-y-2  '>
        <h2 className='w-56 cursor-pointer text-sm font-bold text-[#e5e5e5] transition duration-200 hover:text-white md:text-xl'>{title}</h2>
        <div className='group relative md:-ml-2 '>
            <ChevronLeftIcon  className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9
            cursor-pointer transition hover:scale-125 group-hover: opacity-100 ${!isMoved }`}
             onClick={()=>handleClick("left")}/>
            <div>
            <div  
            ref ={rowRef} className='flex  scrollbar-hide items-center space-x-0.5 overflow-x-scroll  md:space-x-2.5 md:p-2  '>
              {movies.map((movie) =>(
                <Thumbnail key={movie.id} movie={movie}/>
                 
              ))}
            </div>
            </div>
            <ChevronRightIcon className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9
            cursor-pointer transition hover:scale-125 group-hover: opacity-100'
            onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}

export default Row