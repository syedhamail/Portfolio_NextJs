'use client'

import React from "react";
import Typewriter from "typewriter-effect";
import Header from "./components/header";
export default function HomePage() {
  return(
    <main className="main">
      <Header />
      <title>Syed Hamail Portfolio</title>

        {/* Hero Section */}

        <section className="text-gray-400 mb-3">
      <div className="container mx-auto flex px-5 py-20  md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

        
      <h1 className="text-xl text-fuchsia-500 m-1 font-medium font-semibold"><i>Hello !!!</i></h1>
      {/*Typewriter Import*/}

      <h1 className="title-font text-6xl mb-4 font-medium text-white"><Typewriter
        options={{
    strings: ["I'm Syed"],
    autoStart: true,
    loop: true,
  }}
/><Typewriter
        options={{
    strings: ["Hamail"],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
     <br />
      <span className="ml-3 text-xl bg-fuchsia-500 w-60 h-9 text-center border-2 border-black text-black font-semibold rounded"><i>WEB DEVELOPER</i></span><br />
      <p className="mb-8 leading-relaxed text-white">A hard working individual looking for a challenging position where I can showcase my skills and
      contribute to the growth of the organization. I would like to enhance my technical and soft skills by taking up challenging assignments and
      expanding my knowledge.</p> 
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded " alt="hero" src="https://avatars.githubusercontent.com/u/160377450?v=4" width={350} height={350}/>
      </div>
      </div>
    </section>

    </main>
  )
}