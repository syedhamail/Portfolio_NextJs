import Link from "next/link"

import { FaGithub } from "react-icons/fa6";
export default function Header(){
    return(
        <div className="header">
        <header className="text-gray-400 ">
        <div className="container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center">
         <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
           <span className="ml-3 text-xl bg-fuchsia-500 w-40 h-9 text-center border-2 border-black rounded text-lg ">PORTFOLIO</span>
         </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap text-white  items-center text-base justify-center ">
                <Link href={"/"}><h1 className="pr-8 hover:text-fuchsia-500">HOME</h1></Link>
                <Link href={"/about"}><h1 className="pr-8 hover:text-fuchsia-500">ABOUT US</h1></Link>
                <Link href={"/education"}><h1 className="pr-8 hover:text-fuchsia-500">EDUCATION</h1></Link>
                <Link href={"/projects"}><h1 className="pr-8 hover:text-fuchsia-500">PROJECT'S</h1></Link>
                <Link href={"/contact-us"}><h1 className="hover:text-fuchsia-500">CONTACT US</h1></Link>
    </nav>
        <div className="mt-6" >
          <a href="https://github.com/syedhamail">
            <button className="flex mx-auto text-black bg-fuchsia-500 font-semibold border-2 border-black py-1 px-5 focus:outline-none hover:bg-fuchsia-600 rounded text-lg">
            <FaGithub className="FaGithub" /> GITHUB</ button><br /></a>
        </div>
        
  </div>
  
</header>
</div>
    )
}

