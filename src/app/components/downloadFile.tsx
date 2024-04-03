"use client";

import Link from "next/link";
import React from "react";

export default function DownloadFile() {
  return (
    <a href="/pdf/TelmoMouraResume.pdf" download>
      <p className="text-xl text-left font-teko underline mt-4 text-custom-blue">
        Curriculum vitae aqui
      </p>
    </a>
  );
}
