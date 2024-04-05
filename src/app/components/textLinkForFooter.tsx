"use client";
import React from "react";

interface TextLinkProp {
  url: string;
  text: string;
  isMainHeader: boolean;
}

export default function TextLinkForFooter({ url, text }: TextLinkProp) {
  return (
    <a href={url}>
      <div className="text-custom-blue font-teko px-2 text-xl hover:opacity-70 cursor-pointer">
        <p>{text}</p>
      </div>
    </a>
  );
}
