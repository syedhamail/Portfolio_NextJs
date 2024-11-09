import Header from "../components/header";
export default function about() {
  return (
    <div>
        <Header/>
    <div className="text-gray-400 ">
     <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded ml-9" alt="hero" src="https://avatars.githubusercontent.com/u/160377450?v=4" width={400} height={400}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">MY BIOGRAPHY</h1>
      
        <div className="h-2 w-40 bg-fuchsia-500 rounded"></div><br />
        <p className="mb-8 leading-relaxed text-white">Syed Hamail Mohi Uddin Qazi, born on March 12, 2004, is a dynamic and ambitious individual from Karachi.
           With a foundation in technical skills like HTML, CSS, Typescript, JavaScript, and NextJs, he has experience in mobile inspection and online trading.
           Hamail has worked in customer service and quality control, most recently at Techno Mobile Company. He holds an Intermediate degree from Gov. Superior Science & Commerce College and continues to enhance his skills in AI under the Governor Sindh Initiative.
           Hamail is fluent in English and Urdu and is eager to take on new challenges..</p>
      <h3 className="title-font  text-3xl mb-4 font-medium text-white">Skills & Interest</h3>
      <div className="flex justify-center">
      <span className="skill1">HTML, CSS</span>
      <span className="skill2">TYPESCRIPT</span>
      <span className="skill2">NEXT JS</span>
      </div><br />
      <div className="flex justify-center">
      <span className="skill1">REACT</span>
      <span className="skill2">MS OFFICE</span>
      <span className="skill2">TRADING</span>
      </div>
       </div>
     </div>
      </div>
    </div>
  );
}