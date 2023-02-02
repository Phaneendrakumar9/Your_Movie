import React from 'react'
import Image from 'next/image'
import { Movie } from '../typings'
import {useRecoilState} from 'recoil'
import { modalState,movieState } from '../atoms/modalAtom'
import { DocumentData } from 'firebase/firestore'


interface Props{
    movie: Movie | DocumentData
}
function Thumbnail({movie}:Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  return (
    <div className=' relative h-46 min-w-[180px] cursor-pointertransition duration-200
    ease-out md:h-38 md:min-w-[260px]  md:hover:scale-105' onClick={() => { 
      setCurrentMovie(movie)
      setShowModal(true)
}}>
       <Image
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
              className="rounded-sm object-cover md:rounded"
              layout="fill" alt={''}/> 
              <h2 className='relative min-w-[180px] cursor-pointer transition duration-200
                 ease-out md:h-38 md:min-w-[260px]  md:hover:scale-105 pt-32 pl-2'>{movie?.title || movie?.name || movie?.original_name}</h2>
              
    </div>
    
  )
}

export default Thumbnail