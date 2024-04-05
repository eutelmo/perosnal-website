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
          <div className="pt-48 px-9 flex">
            <div className="w-[50%]">
              <p className="text-custom-baby-blue text-3xl font-teko font-semibold">
                Olá sou o Telmo J. Moura
              </p>
              <p className=" mt-2 font-sans leading-6">
                Sou um entusiasta de tecnologia e desenvolvedor de software com
                uma forte experiência em TypeScript, JavaScript e frameworks
                como ReactJS, VueJS e React Native. Com um histórico de projetos
                desafiadores e uma abordagem orientada para soluções, estou
                comprometido em impulsionar a inovação e o progresso na
                indústria de tecnologia.
              </p>
              <p className="mt-2 font-sans leading-6">
                🌏 Além da minha paixão pela tecnologia, tenho um sonho antigo
                de viver na Austrália. Estou sempre atento a oportunidades que
                me aproximem desse objetivo, enquanto continuo aprimorando
                minhas habilidades e conhecimentos no campo do desenvolvimento
                de software.
              </p>
              <p className="mt-2 font-sans leading-6">
                💼 Estou aberto a novas conexões profissionais, discussões sobre
                projetos empolgantes e oportunidades de colaboração. Seja você
                um entusiasta da tecnologia como eu ou tenha insights sobre
                oportunidades na Austrália, adoraria ter uma conversa!
              </p>
              <p className="mt-2 font-sans leading-6">
                📬 Sinta-se à vontade para me enviar uma mensagem para
                networking, consultas ou oportunidades de colaboração. Vamos
                criar conexões significativas e impulsionar o sucesso juntos.
              </p>
            </div>
            <div className="w-[50%] flex-col justify-center items-center relative">
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
              <div className="absolute bottom-0 -mb-[4%] mr-[17%] right-0 bg-custom-yellow w-[30%] h-[10%] z-50 flex justify-center items-center"></div>
            </div>
          </div>
        </div>

           {/* Swipe with Portefolio */}
           <Projectswipe />
        <p>About</p>
      </div>

      <Footer />
    </>
  );
}
