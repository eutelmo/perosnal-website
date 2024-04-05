import React from "react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header isMainHeader={false}/>

      <div className="min-h-[100vh]">
        <p>About</p>
      </div>

      <Footer />
    </>
  );
}
