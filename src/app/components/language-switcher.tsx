"use client";

import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

//Images
import AustraliaFlag from "../../../public/AustraliaFlag.png";
import PortugalFlag from "../../../public/PortugalFlag.png";

export const LanguagePicker: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isAuflag, setFlag] = useState(locale === "en");

  const currentPath = usePathname();

  const extractLocaleAndPath = (URL: string) => {
    const match = URL.match(/^\/([a-z]{2})(\/.*)?$/i);
    if (match) {
      const [, locale, path] = match;
      if (path) {
        return [locale, path.slice(1)];
      } else {
        return [locale];
      }
    }
    return [];
  };

  const handleLocaleChange = () => {
    const [newLocale, ...path] = extractLocaleAndPath(currentPath);
    console.log("path", path);
    console.log("newLocale", newLocale);

    if (newLocale === locale) {
      console.log("newLocale", newLocale);
      setFlag(newLocale === "en");
      if (newLocale === "en") {
        document.cookie = `NEXT_LOCALE=pt; path=/; max-age=31536000; SameSite=Lax`;
        router.push(`/pt${path.length > 0 ? `/${path.join("/")}` : ""}`);
      } else {
        document.cookie = `NEXT_LOCALE=en; path=/; max-age=31536000; SameSite=Lax`;
        router.push(`/en${path.length > 0 ? `/${path.join("/")}` : ""}`);
      }
    }
  };

  return (
    <div className="flex space-x-4 items-center justify-center">
      <button onClick={() => handleLocaleChange()}>
        <Image
          src={!isAuflag ? AustraliaFlag : PortugalFlag}
          alt="Site-Icon"
          width={50}
          height={85}
          style={{
            objectFit: "cover",
          }}
        />
      </button>
    </div>
  );
};

export default LanguagePicker;
