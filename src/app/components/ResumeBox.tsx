import React from "react";
import Image from "next/image";

// Image
import Adventure from "../../../public/assets/gif/giphy.gif";
import DownloadFile from "./downloadFile";

export default function ResumeBox() {
  return (
    <div className="sm:px-10 px-5 mb-9">
      <div className="bg-custom-yellow rounded-lg h-auto p-5 flex sm:flex-row flex-col">
        <div className="sm:w-[50%] sm:pr-10">
          <div className=" h-[100%]  flex justify-center  flex-col">
            <p className="text-xl font-teko text-custom-baby-blue">
              curriculum vitae
            </p>
            <p className="text-4xl text-left font-teko text-custom-blue font-semibold">
              Learn more about my journey
            </p>

            <p className="text-base text-custom-blue text-justify">
              In this professional journey, I`m like Frodo, facing meetings and
              challenges as if they were Mount Doom. I`ve tackled bugs as if
              they were Orcs and learned from wise YouTube masters. With my
              treasure map full of experiences and sharp humor, I`m ready to be
              your team`s Gandalf - minus the beard, plus technical skills!
            </p>

            <DownloadFile isFooter={false} />
          </div>
        </div>

        <div className="sm:w-[50%] flex justify-center">
          <Image
            src={Adventure}
            alt="Site-Icon"
            width={314}
            height={212}
            objectFit="cover"
            style={{
              width: "90%",
              maxWidth: "100%",
              height: "auto",
              maxHeight: "300px",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
