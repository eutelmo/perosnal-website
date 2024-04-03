import React from "react";

//Utils
import Image from "next/image";

//Image
import photo1 from "../../../public/photo2.png";

interface PortefolioProfs {
  title: string;
  languages: string;
}

export default function PortefolioComponent({
  languages,
  title,
}: PortefolioProfs) {
  // export default function PortefolioComponent() {
  return (
    <>
      <div className="relative mb-5 h-[418px]">
        <div className="absolute mt-[90%] pl-[10%]">
          <div className="bg-custom-yellow px-1 w-auto inline-block">
            <p className="text-sm text-custom-blue font-teko">{languages}</p>
          </div>
          <p className="text-2xl text-white font-teko">{title}</p>
        </div>

        <Image
          src={`https://source.unsplash.com/random/developing,${languages}`}
          alt="Portefolio-IMG"
          width={20}
          height={418}
          unoptimized={true}
          style={{
            width: "100%",
            height: "418px",
            opacity: "1",
            zIndex: "1",
            borderRadius: "8px",
          }}
        />
      </div>
    </>
  );
}
