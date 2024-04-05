"use client";
import React, { useEffect, useState } from "react";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

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

      <div className="min-h-[100vh]"></div>

      <Footer />
    </>
  );
}
