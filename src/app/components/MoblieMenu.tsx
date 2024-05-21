import React from "react";

//Utils
import { useTranslations } from "next-intl";
import { LanguagePicker } from "./language-switcher";
import TextLink from "./textLink";

type menuProps = {
  isOpen: boolean;
};

export default function MobileMenu({ isOpen }: menuProps) {
  const t = useTranslations();

  return (
    <>
      {isOpen ? (
        <div className="p-5 py-5 w-full max-h-20 backdrop-blur-sm bg-custom-blue flex items-center absolute justify-between z-[-1]">
          <TextLink
            isMainHeader={true}
            url="/about"
            text={t("links.aboutMe")}
          />
          <TextLink
            isMainHeader={false}
            url="/projects"
            text={t("links.projects")}
          />
          <LanguagePicker />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
