import React from "react";

//Utils
import Image from "next/image";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Images
import profile from "../../../public/eu.png";
import Projectswipe from "../components/projectswipe";

export default function AboutPage() {
  return (
    <>
      <Header isMainHeader={false} />

      <div className="min-h-[100vh]">
        <div className="w-full bg-custom-blue min-h-[100vh] z-20 mb-9">
          <div className="sm:pt-48 pt-32 pb-10 sm:pb-0 px-9 sm:flex">
            <div className="sm:w-[50%]">
              <p className="text-custom-baby-blue text-3xl font-teko font-semibold">
                Olá sou o Telmo J. Moura
              </p>
              <p className="mt-2 font-sans text-white leading-6 text-justify">
                I`m a technology enthusiast and software developer with strong
                experience in TypeScript, JavaScript, and frameworks like
                ReactJS, VueJS, and React Native. With a background in
                challenging projects and a solution-oriented approach, I`m
                committed to driving innovation and progress in the technology
                industry.
              </p>
              <p className="sm:mt-2 mt-4 text-white font-sans leading-6 text-justify">
                🌏 Besides my passion for technology, I have a longstanding
                dream of living in Australia. I`m always on the lookout for
                opportunities that bring me closer to that goal while continuing
                to enhance my skills and knowledge in the field of software
                development.
              </p>
              <p className="sm:mt-2 mt-4 text-white font-sans leading-6 text-justify">
                💼 I`m open to new professional connections, discussions about
                exciting projects, and collaboration opportunities. Whether
                you`re a tech enthusiast like me, I`d love to have a
                conversation!
              </p>
              <p className="sm:mt-2 mt-4 text-white font-sans leading-6 text-justify">
                📬 Feel free to drop me a message for networking, inquiries, or
                collaboration opportunities.
              </p>
            </div>
            <div className="sm:w-[50%] flex-col justify-center items-center relative mt-5 sm:mt-0">
              <div className="z-10 flex justify-center items-center">
                <Image
                  src={profile}
                  alt="Site-Icon"
                  width={405}
                  height={305}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="absolute bottom-0 -mb-[4%] -mr-[10%] sm:mr-[17%]  right-0 bg-custom-yellow sm:w-[30%] w-[50%] h-[10%] z-50 flex justify-center items-center"></div>
            </div>
          </div>
        </div>

        {/* Swipe with Portefolio */}
        <Projectswipe />
      </div>

      <Footer />
    </>
  );
}
