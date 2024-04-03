import React from "react";
import Image from "next/image";

// Image
import Adventure from "../../../public/assets/gif/giphy.gif";
import DownloadFile from "./downloadFile";

export default function ResumeBox() {
  return (
    <div className="px-10 mb-9 ">
      <div className="bg-custom-yellow rounded-lg h-auto p-5 flex">
        <div className="w-[50%] pr-10">
          <div className=" h-[100%]  flex justify-center  flex-col">
            <p className="text-xl  font-teko text-custom-baby-blue ">
              curriculum vitae
            </p>
            <p className="text-4xl text-left font-teko text-custom-blue font-semibold">
              Sabe mais sobre a minha jornada
            </p>

            <p className="text-base text-custom-blue text-justify ">
              Nesta jornada profissional, sou como o Frodo, enfrentando reuniões
              e desafios como se fossem a Mount Doom. Enfrentei bugs como se
              fossem Orcs e aprendi com sábios mestres do YouTube. Com meu mapa
              do tesouro repleto de experiências e humor afiado, estou pronto
              para ser o Gandalf da vossa equipe - menos barba, mais habilidades
              técnicas!
            </p>

            <DownloadFile />
          </div>
        </div>

        <div className="w-[50%] flex justify-center">
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
