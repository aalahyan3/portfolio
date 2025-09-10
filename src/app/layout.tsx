import type { Metadata } from "next";
import "./globals.css";
import { FiraCode, Quantico, Inter } from "@/fonts/fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "aalahyan3",
  description: "software engineer specializing in building exceptional digital experiences. Currently, I’m focused on improving my skills at different levels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://aalahyan3.tech/",
              name: "Ayoub Alahyane",
              publisher: {
                "@type": "Organization",
                name: "Ayoub Alahyane",
                logo: {
                  "@type": "ImageObject",
                  url: "https://aalahyan.tech/fav.png",
                },
              },
            }),
          }}
        />
      </head>
      <body
        className={`${Inter.variable} ${Quantico.variable} ${FiraCode.variable} antialiased`}
      >
        {children}
        <Analytics /> 
      </body>
    </html>
  );
}
