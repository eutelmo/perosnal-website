import React from "react";

//Utils
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

//Image
import imageNotFound from "../../../../public/assets/gif/404.gif";

export default function NotFound() {
  const t = useTranslations();
  return (
    <>
      <Header isMainHeader={true} />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-full max-w-xl">
          <p className="text-4xl text-custom-blue text-center font-mono font-bold">
            {t("notFoundPage.notFoundTitle")}
          </p>
          <p className="text-xl text-custom-blue text-center font-mono font-semibold">
            {t("notFoundPage.notFoundBody")}
          </p>
          <div className="w-full flex justify-center my-4">
            <Image
              src={imageNotFound}
              alt="Site-Icon"
              width={414}
              height={312}
              objectFit="cover"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
          <p className="text-4xl text-custom-blue text-center font-mono font-bold">
            {t("notFoundPage.notFoundSecondBody")}
          </p>
          <Link href="/">
            <p className="text-custom-blue underline text-center font-mono font-bold mt-4">
              {t("notFoundPage.notFoundReturn")}
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
