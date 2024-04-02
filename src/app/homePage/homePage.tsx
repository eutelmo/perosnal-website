import React from "react";

//Utils
import Image from "next/image";
import photo1 from "../../../public/photo2.png";

//Components
import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="w-full min-h-min z-20 ">
          <div className="absolute mt-[10%] pl-[57%]">
            <p className="text-5xl text-custom-blue font-teko">
              Telmo J. Moura
            </p>
            <p className="text-8xl text-custom-blue font-lobster">
              Web/Mobile <br /> Developer
            </p>
          </div>
          <Image
            src={photo1}
            alt="Site Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              zIndex: "-1",
            }}
          />
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-white"></div>
        </div>
        <p>homePage</p>
      </div>
    </>
  );
}
