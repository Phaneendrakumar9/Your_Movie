import {BellIcon, SearchIcon} from"@heroicons/react/solid";
import Link from "next/link";
import {useState,useEffect} from 'react';
import useAuth from "../hooks/useAuth";
import { ChatAlt2Icon } from "@heroicons/react/outline";
import BasicMenu from "./BasicMenu";


function Header() {
    const [isScrolled,setIsScrolled] = useState(false)
    const { logout } = useAuth()
    useEffect(() =>{
     const handleScroll = ()=>{
        if(window.scrollY >0){
            setIsScrolled(true)
        }else{
            setIsScrolled(false)
        }
     }
     window.addEventListener("scroll",handleScroll)

     return () =>{
        window.removeEventListener('scroll',handleScroll)
     }
    },[])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
    <div className="flex items-center space-x-2 md:space-x-10 text-red-600 font-bold text-3xl">
    <div>Your Movie</div>

    <BasicMenu />

        <ul className="hidden space-x-6 md:flex">
            <li className="headerLink text-lg font-normal md:hover:font-black">Home</li>
            <li className="headerLink text-lg font-normal md:hover:font-black">TV Shows</li>
            <li className="headerLink text-lg font-normal md:hover:font-black">Movies</li>
            <li className="headerLink text-lg font-normal md:hover:font-black">New & Popular</li>
            <li className="headerLink text-lg font-normal md:hover:font-black">My List</li>
        </ul>
    </div>

    <div className="flex items-center space-x-4 font-serif text-lg">
       <div>
       <button className="text-lg font-normal "><SearchIcon className="hidden h-5 w-5 sm:inline"/> Search</button>
       </div>

       <Link href="/notifications">
          <BellIcon className=" h-6 w-6 hidden lg:inline xl:inline"/>
       </Link>

       <ChatAlt2Icon className=" h-6 w-6 hidden lg:inline xl:inline"/>
        <Link href="/account">
       <img
            src="https://bit.ly/3WLLjRt"
            alt=""
            className="cursor-pointer rounded-full h-8 w-8"
          />
       </Link>
    </div>
    </header>
  )
}

export default Header