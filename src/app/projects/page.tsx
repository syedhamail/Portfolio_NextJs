import { SiVercel } from "react-icons/si";
import Header from "../components/header";

export default function Projects() {
  return (
    <div>
      <Header />

      {/* Project Section */}

      <section className="text-gray-400">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-2 text-white">
                PROJECT{`'`}S
              </h1>
              <div className="h-1 w-20 bg-fuchsia-500 rounded"></div>
            </div>
          </div>

          {/*1st line*/}
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://images.template.net/wp-content/uploads/2017/05/Resume3.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-fuchsia-400 text-xs font-medium title-font">
                  BUILD A RESUME WITH EASE
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Resume Builder
                </h2>
                <p className="leading-relaxed text-base">
                  Create a standout resume effortlessly with our user-friendly
                  resume builder, designed to help you land your dream job.
                </p>

                <div className="p-2 mt-3 w-full">
                  <a href="https://job-winning-resume-maker-one.vercel.app/">
                    <button className="flex justify-center mx-auto text-white bg-fuchsia-500 border-0 py-1 px-5 focus:outline-none hover:bg-fuchsia-600 transition duration-200 ease-in-out  rounded text-lg">
                      <SiVercel className="vercel bg-black rounded-full px-1.5 pb-0.5 flex justify-center" />
                      DEMO
                    </button>
                    <br />
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://www.autismresources.co.nz/images/600503/pid2583609/TT1_20cm_Time_Timer_NEW_.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-fuchsia-400 text-xs font-medium title-font">
                  TRACK TIME EFFORTLESSLY
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Countdown Timer
                </h2>
                <p className="leading-relaxed text-base">
                  A countdown timer helps track remaining time with precision,
                  keeping you on schedule for deadlines or events.
                </p>

                <div className="p-2 mt-3 w-full ">
                  <a href="https://countdown-timer-nextjs-beta.vercel.app/">
                    <button className="flex justify-center mx-auto text-white bg-fuchsia-500 border-0 py-1 px-5 focus:outline-none hover:bg-fuchsia-600 transition duration-200 ease-in-out  rounded text-lg">
                      <SiVercel className="vercel bg-black rounded-full px-1.5 pb-0.5 flex justify-center" />
                      DEMO
                    </button>
                    <br />
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://play-lh.googleusercontent.com/eWm9nbI5DPc56RlvdSRy4wRHQWxEYv4J8GJr8-b1er-g6AvmzJLJXecNYxG4QITf0A"
                  alt="content"
                />
                <h3 className="tracking-widest text-fuchsia-400 text-xs font-medium title-font">
                  STAY UPDATED
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Weather Widget
                </h2>
                <p className="leading-relaxed text-base">
                  A weather widget provides real-time forecasts, helping you
                  plan your day with ease, accuracy, and convenience.
                </p>

                <div className="p-2 mt-3 w-full ">
                  <a href="https://weather-widget-nextjs-omega.vercel.app/">
                    <button className="flex justify-center mx-auto text-white bg-fuchsia-500 border-0 py-1 px-5 focus:outline-none hover:bg-fuchsia-600 transition duration-200 ease-in-out  rounded text-lg">
                      <SiVercel className="vercel bg-black rounded-full px-1.5 pb-0.5 flex justify-center" />
                      DEMO
                    </button>
                    <br />
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/html-css-website.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-fuchsia-400 text-xs font-medium title-font">
                  DESIGN. CODE. CREATE.
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Html & Css Website
                </h2>
                <p className="leading-relaxed text-base">
                  HTML & CSS website allows you to create visually appealing and
                  responsive web pages with ease and flexibility.
                </p>

                <div className="p-2 mt-3 w-full ">
                  <a href="https://html-css-website-beta.vercel.app/">
                    <button className="flex justify-center mx-auto text-white bg-fuchsia-500 border-0 py-1 px-5 focus:outline-none hover:bg-fuchsia-600 transition duration-200 ease-in-out  rounded text-lg">
                      <SiVercel className="vercel bg-black rounded-full px-1.5 pb-0.5 flex justify-center" />
                      DEMO
                    </button>
                    <br />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*2nd line*/}
          <div className="flex flex-wrap -m-4 mt-10">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/e-commerce_website.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-fuchsia-400 text-xs font-medium title-font">
                  DESIGN. CODE. CREATE.
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  E-Commerce Website
                </h2>
                <p className="leading-relaxed text-base">
                  An E-commerce website allows businesses to sell online,
                  offering customers convenient shopping and secure payment
                  options.
                </p>

                <div className="p-2 mt-3 w-full">
                  <a href="https://e-commerce-website-iota-black.vercel.app/">
                    <button className="flex justify-center mx-auto text-white bg-fuchsia-500 border-0 py-1 px-5 focus:outline-none hover:bg-fuchsia-600 transition duration-200 ease-in-out  rounded text-lg">
                      <SiVercel className="vercel bg-black rounded-full px-1.5 pb-0.5 flex justify-center" />
                      DEMO
                    </button>
                    <br />
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/blog.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-fuchsia-400 text-xs font-medium title-font">
                  DESIGN. CODE. CREATE.
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Blog
                </h2>
                <p className="leading-relaxed text-base">
                  A blog is a digital space where individuals share ideas,
                  stories, expertise, and updates on various topics.
                </p>

                <div className="p-2 mt-3 w-full ">
                  <a href="https://dynamic-blog-peach.vercel.app/">
                    <button className="flex justify-center mx-auto text-white bg-fuchsia-500 border-0 py-1 px-5 focus:outline-none hover:bg-fuchsia-600 transition duration-200 ease-in-out  rounded text-lg">
                      <SiVercel className="vercel bg-black rounded-full px-1.5 pb-0.5 flex justify-center" />
                      DEMO
                    </button>
                    <br />
                  </a>
                </div>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/giaic_hackathon_e-commerce-website.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-fuchsia-400 text-xs font-medium title-font">
                  DESIGN. CODE. CREATE.
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  E-Commerce Website
                </h2>
                <p className="leading-relaxed text-base">
                  An E-commerce website allows businesses to sell online,
                  offering customers convenient shopping and secure payment
                  options.
                </p>

                <div className="p-2 mt-3 w-full ">
                  <a href="https://giaic-hackathon-e-commerce-website.vercel.app/">
                    <button className="flex justify-center mx-auto text-white bg-fuchsia-500 border-0 py-1 px-5 focus:outline-none hover:bg-fuchsia-600 transition duration-200 ease-in-out  rounded text-lg">
                      <SiVercel className="vercel bg-black rounded-full px-1.5 pb-0.5 flex justify-center" />
                      DEMO
                    </button>
                    <br />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
