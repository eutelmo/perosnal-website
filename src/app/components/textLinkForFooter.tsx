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
  const currentPath = usePathname();

  return (
    <Link href={url}>
      <div
        className={`text-${
          currentPath === url ? "custom-baby-blue" : "custom-blue"
        } font-teko px-2 text-xl hover:opacity-70 cursor-pointer`}
      >
        <p>{text}</p>
      </div>
    </Link>
  );
}
