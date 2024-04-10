"use client";

import Link from "next/link";
import React from "react";

interface BodyProps {
  isFooter: boolean;
}

export default function DownloadFile({ isFooter }: BodyProps) {
  return (
    <>
      {isFooter ? (
        <a href="/pdf/TelmoMouraResume.pdf" download>
          <div className="flex items-center">
            <p className="sm:text-xl text-2xl text-left font-teko underline text-custom-blue">
              Download my CV
            </p>
          </div>
        </a>
      ) : (
        <a href="/pdf/TelmoMouraResume.pdf" download>
          <div className="flex items-center">
            <p className="mt-[3%]">👉</p>
            <p className="text-xl text-left font-teko underline mt-4 text-custom-blue">
              Curriculum vitae here
            </p>
            <p className="mt-[3%]">👈</p>
          </div>
        </a>
      )}
    </>
  );
}
