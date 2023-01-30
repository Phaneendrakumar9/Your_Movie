import React from 'react'
import Image from 'next/image'
import { Movie } from '../typings'
import {useRecoilState} from 'recoil'
import { modalState,movieState } from '../atoms/modalAtom'



interface Props{
    // movie: Movie |DocumentData
    movie:Movie
}
function Thumbnail({movie}:Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  return (
    <div className=' relative h-40 min-w-[180px] cursor-pointertransition duration-200
    ease-out md:h-38 md:min-w-[260px]  md:hover:scale-105' onClick={() => { 
      setCurrentMovie(movie)
      setShowModal(true)
}}>
       <Image
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
              className="rounded-sm object-cover md:rounded"
              layout="fill" alt={''}/> 
              
    </div>
    
  )
}

export default Thumbnail