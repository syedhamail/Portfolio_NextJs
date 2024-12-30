import Header from "../components/header";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function ContactUs() {
  return (
    <div>
      <Header />

      <section className="text-gray-400">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-2xl font-medium font-mono title-font mb-2 text-white">
              GET IN TOUCH
            </h1>
            <h2 className="text-1xl text-fuchsia-500 tracking-widest font-bold font-medium title-font mb-1">
              <i>Let's Work Together</i>
            </h2>
          </div>

          {/* Contact Cards in a Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="px-8 py-6 border-l-2 border-gray-800">
              <FaPhone className="text-fuchsia-500 mx-auto text-4xl mb-4" />
              <p className="text-lg sm:text-xl text-white text-center font-medium title-font mb-2">
                Phone & Mobile
              </p>
              <p className="text-center text-white">
                +92 3363351905 <br />
                +92 3269241385
              </p>
            </div>

            {/* Email */}
            <div className="px-8 py-6 border-l-2 border-gray-800">
              <MdEmail className="text-fuchsia-500 mx-auto text-4xl mb-4" />
              <p className="text-lg sm:text-xl text-white text-center font-medium title-font mb-2">
                Email
              </p>
              <p className="text-center text-white">
                hamailsyed139@gmail.com <br />
                hamailbhai931@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="px-8 py-6 border-l-2 border-gray-800">
              <FaLocationDot className="text-fuchsia-500 mx-auto text-4xl mb-4" />
              <p className="text-lg sm:text-xl text-white text-center font-medium title-font mb-2">
                Address
              </p>
              <p className="text-center text-white">
                K-area korangi no.5 <br />
                Karachi, Pakistan
              </p>
            </div>

            {/* LinkedIn */}
            <div className="px-8 py-6 border-l-2 border-gray-800">
              <FaLinkedin className="text-fuchsia-500 mx-auto text-4xl mb-4" />
              <p className="text-lg sm:text-xl text-white text-center font-medium title-font mb-2">
                LinkedIn
              </p>
              <p className="text-center text-white">
                <a
                  href="https://www.linkedin.com/in/syed-hamail-025749304/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Profile
                </a>
              </p>
            </div>
          </div>

          {/* Footer Name */}
          <div className="text-center mt-10">
            <h1 className="text-2xl font-bold text-white">
              <b>SYED HAMAIL</b>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
