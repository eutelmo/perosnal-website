"use client";
import React from "react";

interface TextLinkProp {
  url: string;
  text: string;
  isMainHeader: boolean;
}

export default function TextLink({ url, text, isMainHeader }: TextLinkProp) {
  return (
    <a href={url}>
    <div className={`text-${isMainHeader ? 'custom-blue' : 'white'} font-teko px-2 text-xl hover:text-custom-yellow cursor-pointer`}>
      <p>{text}</p>
    </div>
  </a>
  );
}
