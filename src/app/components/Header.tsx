import React from "react";
import Image from "next/image";

import testImage from "../../../public/iconSite.png";

function Header() {
  return (
    <div className="p-5 py-5 w-auto max-h-20 bg-white flex items-center relative">
      <div className="w-20 h-20 rounded-lg overflow-hidden">
        <Image src={testImage} alt="Site Icon" fill={false} />
      </div>

      <div className="text-green-600">Header</div>
    </div>
  );
}

export default Header;
