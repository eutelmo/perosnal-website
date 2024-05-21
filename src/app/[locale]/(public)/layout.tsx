import React from "react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telmo J. Moura",
  description: "Web/Mobile Developer Personal Web Site",
  icons: {
    icon: "assets/iconSite.png",
  },
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: "en" | "pt";
  };
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
