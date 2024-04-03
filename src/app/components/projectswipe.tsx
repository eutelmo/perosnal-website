"use client";
import React, { useEffect, useState } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Components
import PortefolioComponent from "./portefolioComponent";

interface RepositoryProps {
  name: string;
  description: string;
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
      <div>
        <p className="text-3xl text-custom-blue font-bold mb-3">Portefolio</p>
      </div>
      {repositories.length > 0 && (
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          // navigation
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {repositories.map((repository, index) => (
            <SwiperSlide key={`${index}_${repository.name}`}>
              <PortefolioComponent
                languages={repository.language}
                title={repository.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
