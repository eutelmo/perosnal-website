import React from "react";

//Utils
import Image from "next/image";

interface portefolioProfs {
  title: string;
  languages: string;
}

// export default function PortefolioComponent({ props }: { props: portefolioProfs }){
export default function PortefolioComponent() {
  return (
    <>
      <div>
        <Image
          src="https://source.unsplash.com/random/?typescript,code"
          alt="Site-Icon"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        <p>portefolioComponent</p>
      </div>
    </>
  );
}
