"use client";
import React, { useEffect, useState } from "react";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortefolioComponent from "../components/portefolioComponent";

interface RepositoryProps {
  name: string;
  language: string;
  html_url: string;
}

export default function PortefolioPage() {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/eutelmo/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <>
      <Header isMainHeader={false} />
      {/* Desktop */}
      <div className="sm:block hidden min-h-[100vh]">
        <div className="w-full bg-custom-blue min-h-[35vh] z-20"></div>
        <div className="pt-48 px-9 -mt-[25%]">
          <p className="font-teko text-5xl">Projects</p>
          <div className="grid grid-cols-5 gap-4">
            {repositories
              .filter((repository) => repository.name !== "eutelmo")
              .map((repository, index) => (
                <PortefolioComponent
                  key={index}
                  languages={repository.language}
                  title={repository.name}
                  html_url={repository.html_url}
                />
              ))}
            {Array.from({ length: 5 - (repositories.length % 5) }).map(
              (_, index) => (
                <div key={repositories.length + index}></div>
              )
            )}
          </div>
        </div>
      </div>

      {/* MObile sm:block hidden */}
      <div className="sm:hidden block min-h-[100vh]">
        <div className="w-full bg-custom-blue min-h-[50vh] z-20"></div>
        <div className="-mt-[80%] px-9 ">
          <p className="font-teko text-4xl">Projects</p>
          <div className="flex flex-col">
            {repositories
              .filter((repository) => repository.name !== "eutelmo")
              .map((repository, index) => (
                <PortefolioComponent
                  key={index}
                  languages={repository.language}
                  title={repository.name}
                  html_url={repository.html_url}
                />
              ))}
           
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
