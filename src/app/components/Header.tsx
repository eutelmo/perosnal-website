import React from "react";
import Image from "next/image";

import testImage from "../../../public/iconSite.png";

function Header() {
  return (
    <div className="p-5 py-5 w-full max-h-20 bg-transparent flex items-center absolute justify-between z-50">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-lg overflow-hidden">
          <Image src={testImage} alt="Site Icon" fill={false} />
        </div>
        <div>
          <p className="font-bold text-custom-yellow text-lg leading-5 ml-2">
            Telmo J.
          </p>
          <p className="font-bold text-custom-yellow text-lg leading-5 ml-2">
            Moura
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-reverse">
        <div className="text-custom-blue font-semibold px-2 hover:font-bold cursor-pointer">
          <p>SOBRE MIM</p>
        </div>
        <div className="text-custom-blue font-semibold px-2 hover:font-bold cursor-pointer">
          <p>PROJETOS</p>
        </div>
        <div className="text-custom-blue font-semibold px-2 hover:font-bold cursor-pointer">
          <p>CONTACTOS</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
