import Header from "../components/header";

export default function Education() {
    return(
        <div>
            <Header/>
             {/* Education Section */}

          <section className="text-gray-400 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">EDUCATION</h1>
      <br />
      <div className="h-2 w-60 bg-fuchsia-500 rounded"></div>
      
      <br />
      <p className="mb-8 leading-relaxed text-justify text-white">Syed Hamail Mohi Uddin Qazi completed his Matriculation in 2020 from The Educator. 
      He then pursued an Intermediate degree, graduating in 2022 from Gov. Superior Science & Commerce College. Currently, Hamail is further 
      enhancing his skills by participating in the Governor Sindh Initiative’s Cloud Applied Generative AI program. His education reflects a 
      strong focus on both academic and technical growth. He continues to develop expertise in areas like web development and artificial intelligence.</p>     
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
    <h3 className="title-font  text-2xl mb-4 font-medium text-white border border-black border-spacing-1 text-center border-r-2 border-t-2 border-b-2 border-l-2">THE EDUCATOR</h3>
    <p className="title-font  mb-4  text-white font-sans text-center">MATRIC | 2020</p>

    <h3 className="title-font  text-2xl mb-4 font-medium text-white border border-black border-spacing-1 text-center border-r-2 border-t-2 border-b-2 border-l-2">GOV. SUPERIOR SCIENCE &
    COMMERCE COLLEGE</h3>
    <p className="title-font  mb-4  text-white font-sans text-center">INTER | 2022</p>

    <h3 className="title-font  text-2xl mb-4 font-medium text-white border border-black border-spacing-1 text-center border-r-2 border-t-2 border-b-2 border-l-2">GOVERNOR SINDH INITIATIVE</h3>
    <p className="title-font  mb-4  text-white font-sans text-center">Cloud Applied Generative AI | (Ongoing)</p>
      
    </div>
  </div>
</section>
        </div>
    )
}