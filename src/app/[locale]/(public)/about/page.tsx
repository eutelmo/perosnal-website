import React from "react";

//Utils
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

//Images
import profile from "../../../../../public/eu.png";
import Projectswipe from "../../../components/projectswipe";

export default function AboutPage() {
  const t = useTranslations();
  return (
    <>
      <Header isMainHeader={false} />

      <div className="min-h-[100vh]">
        <div className="w-full bg-custom-blue min-h-[100vh] z-20 mb-9">
          <div className="sm:pt-48 pt-32 pb-10 sm:pb-0 px-9 sm:flex">
            <div className="sm:w-[50%]">
              <p className="text-custom-baby-blue text-3xl font-teko font-semibold">
                {t("aboutMePage.aboutMeTitle")}
              </p>
              <p className="mt-2 font-sans text-white leading-6 text-justify">
                {t("aboutMePage.aboutMeBodyFirst")}
              </p>
              <p className="sm:mt-2 mt-4 text-white font-sans leading-6 text-justify">
                🌏 {t("aboutMePage.aboutMeBodySecond")}
              </p>
              <p className="sm:mt-2 mt-4 text-white font-sans leading-6 text-justify">
                💼 {t("aboutMePage.aboutMeBodyThird")}
              </p>
              <p className="sm:mt-2 mt-4 text-white font-sans leading-6 text-justify">
                📬 {t("aboutMePage.aboutMeBodyLast")}
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
