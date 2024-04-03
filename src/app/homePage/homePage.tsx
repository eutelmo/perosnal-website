import React from "react";

//Utils
import Image from "next/image";

//Images
import photo1 from "../../../public/photo2.png";
import typescript from "../../../public/assets/icons/typescript.png";
import javascript from "../../../public/assets/icons/js.png";
import vue from "../../../public/assets/icons/vue.png";
import react from "../../../public/assets/icons/react.png";
import next from "../../../public/assets/icons/next-js.png";
import reactNative from "../../../public/assets/icons/react-native.png";

//Components
import Header from "../components/Header";
import ResumeBox from "../components/ResumeBox";
import PortefolioComponent from "../components/portefolioComponent";
import Projectswipe from "../components/projectswipe";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="w-full min-h-min z-20">
          <div className="absolute mt-[10%] pl-[57%]">
            <p className="text-5xl text-custom-blue font-teko">
              Telmo J. Moura
            </p>
            <p className="text-8xl text-custom-blue font-lobster">
              Front End <br /> Developer
            </p>
          </div>
          <Image
            src={photo1}
            alt="Site-Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100vh",
              // objectFit: "cover",
              zIndex: "-1",
            }}
          />
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-white"></div>
        </div>

        {/* stack section */}
        <div className="flex px-40 justify-between mt-10 mb-9">
          <div className="">
            <div className="flex">
              <div>
                <Image
                  src={javascript}
                  alt="Site Icon"
                  width={70}
                  height={70}
                  style={{
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                />
              </div>
              <div className="-ml-5">
                <Image
                  src={typescript}
                  alt="Site Icon"
                  width={70}
                  height={70}
                  style={{
                    objectFit: "cover",
                    zIndex: "2",
                    marginLeft: "-20",
                  }}
                />
              </div>
            </div>
            <p className="font-teko text-center text-custom-blue text-3xl mt-4 leading-3">
              language
            </p>
            <p className="font-teko text-center text-custom-baby-blue text-lg">
              Javascript, Typescript
            </p>
          </div>

          <div className="">
            <div className="flex">
              <div>
                <Image
                  src={vue}
                  alt="Site Icon"
                  width={70}
                  height={70}
                  style={{
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                />
              </div>
              <div className="-ml-9">
                <Image
                  src={react}
                  alt="Site Icon"
                  width={70}
                  height={70}
                  style={{
                    objectFit: "cover",
                    zIndex: "2",
                    marginLeft: "-20",
                  }}
                />
              </div>
              <div className="-ml-8">
                <Image
                  src={next}
                  alt="Site Icon"
                  width={70}
                  height={70}
                  style={{
                    objectFit: "cover",
                    zIndex: "2",
                    marginLeft: "-20",
                  }}
                />
              </div>
            </div>
            <p className="font-teko text-center text-custom-blue text-3xl mt-4 leading-3">
              Web
            </p>

            <p className="font-teko text-center text-custom-baby-blue text-lg ">
              Vue, React, Next
            </p>
          </div>

          <div className="">
            <div className="flex">
              <div>
                <Image
                  src={react}
                  alt="Site Icon"
                  width={70}
                  height={70}
                  style={{
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                />
              </div>
            </div>
            <p className="font-teko text-center text-custom-blue text-3xl mt-4 leading-4">
              Mobile
            </p>
            <p className="font-teko text-center text-custom-baby-blue text-lg">
              React Native
            </p>
          </div>
        </div>

        {/* Resume Component */}
        <ResumeBox />

        {/* Swipe with Portefolio */}
        <Projectswipe />
      </div>
    </>
  );
}
