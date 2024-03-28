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
      <div className="min-h-screen bg-slate-500">
        <div className="w-full min-h-min bg-red-600">
          <Image
            src={photo1}
            alt="Site Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100vh", objectFit: "cover"}}
          />
        </div>
        <p>homePage</p>
      </div>
    </>
  );
}
