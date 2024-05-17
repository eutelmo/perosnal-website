"use client";
import React from "react";
import Link from "next/link";

//Utils
import { usePathname } from "next/navigation";

interface TextLinkProp {
  url: string;
  text: string;
  isMainHeader: boolean;
}

export default function TextLinkForFooter({ url, text }: TextLinkProp) {
  function getCurrentPathWithoutPrefix(URLprefix: string) {
    const match = URLprefix.match(/^\/[a-z]{2}\//i);
    if (match) {
      return URLprefix.replace(match[0], "/");
    }

    return URLprefix;
  }
  const currentPath = usePathname();

  return (
    <Link href={url}>
      <div
        className={`text-${
          getCurrentPathWithoutPrefix(currentPath) === url
            ? "custom-baby-blue"
            : "custom-blue"
        } font-teko px-2 sm:text-xl text-2xl hover:opacity-70 cursor-pointer`}
      >
        <p>{text}</p>
      </div>
    </Link>
  );
}
