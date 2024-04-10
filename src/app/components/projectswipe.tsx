"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//Components
import PortefolioComponent from "./portefolioComponent";

// Images
import backArrow from "../../../public/assets/icons/left-arrow.png";
import nextArrow from "../../../public/assets/icons/right-arrow.png";

interface RepositoryProps {
  name: string;
  language: string;
  html_url: string;
}

export default function Projectswipe() {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/eutelmo/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <div className="px-10 mb-9">
      <div className="flex justify-between items-center">
        <p className="text-3xl text-custom-blue font-bold mb-3">Projects</p>
        {/* <div className="flex mb-4">
          <div className="text-custom-blue font-bold cursor-pointer">
            <Image src={backArrow} width={40} height={40} alt="backArrow" />
          </div>
          <div className="text-custom-blue font-bold cursor-pointer">
            <Image src={nextArrow} width={40} height={40} alt="nextArrow" />
          </div>
        </div> */}
      </div>

      <div className="sm:block hidden">
        {repositories.length > 0 && (
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            navigation={true}
            modules={[Navigation]}
          >
            {repositories
              .filter((repository) => repository.name !== "eutelmo")
              .map((repository, index) => (
                <SwiperSlide key={`${index}_${repository.name}`}>
                  <PortefolioComponent
                    languages={repository.language}
                    title={repository.name}
                    html_url={repository.html_url}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>

      <div className="sm:hidden block">
        {repositories.length > 0 && (
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
          >
            {repositories
              .filter((repository) => repository.name !== "eutelmo")
              .map((repository, index) => (
                <SwiperSlide key={`${index}_${repository.name}`}>
                  <PortefolioComponent
                    languages={repository.language}
                    title={repository.name}
                    html_url={repository.html_url}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
