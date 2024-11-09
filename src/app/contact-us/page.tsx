import Header from "../components/header";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function ContactUs() {
    return(
        <div>
            <Header/>

            {/* Contact Section */}  

        <section className="text-gray-400 ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-2xl font-medium font-mono title-font mb-2 text-white">GET IN TOUCH</h1>
      <h2 className="text-1xl text-fuchsia-500 tracking-widest font-bold font-medium title-font mb-1"><i>Let's Work Together</i></h2>
    
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <FaPhone className="FaPhone" /><br />
        <p className="text-lg sm:text-xl text-white text-center font-medium title-font mb-2">Phone & Mobile</p>
        <p className="text-center text-white">+92 3363351905 <br />+92 3269241385</p>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <MdEmail className="MdEmail" /><br />
        <p className="text-lg sm:text-xl text-white text-center font-medium title-font mb-2">Email</p>
        <p className="text-center text-white">hamailsyed139@gmail.com <br />hamailbhai931@gmail.com</p>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <FaLocationDot className="FaLocationDot" /><br />
        <p className="text-lg sm:text-xl text-white text-center font-medium title-font mb-2">Address</p>
        <p className="text-center text-white">K-area korangi no.5 <br />Karachi, Pakistan</p>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <FaLinkedin  className="FaLinkedin" /><br />
        <p className="text-lg sm:text-xl text-white text-center font-medium title-font mb-2">LinkedIn</p>
        <p className="text-center text-white" >https://www.linkedin.com/in/syed-hamail-025749304/</p>
      </div>
    </div>
    <h1 className="LN"><b>SYED HAMAIL</b></h1>
    </div>
    </section>

        </div>
    )
}