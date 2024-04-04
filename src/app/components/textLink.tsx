"use client";
import React from "react";

interface TextLinkProp {
  url: string;
  text: string;
}

export default function TextLink({ url, text }: TextLinkProp) {
  return (
    <a href="">
      {/* <a href={url}> */}
      <div className="text-custom-blue font-teko px-2 text-xl hover:text-custom-yellow  cursor-pointer">
        <p>{text}</p>
      </div>
    </a>
  );
}
