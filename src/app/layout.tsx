import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";



export const metadata: Metadata = {
  title: 'AERRATRIC TECHNOLOGY INC | Intelligent Software for Sustainable Growth',
  description: 'AERRATRIC TECHNOLOGY INC designs modern SaaS platforms, AI, and digital transformation solutions to streamline operations, enhance user experiences, and support long-term business scalability.',
  keywords: ["SaaS, AI, digital transformation, software development, scalable platforms, intelligent automation, cloud, devops, enterprise solutions, Colorado Springs"],
  openGraph: {
    "title": "AERRATRIC TECHNOLOGY INC | Intelligent Software for Sustainable Growth",
    "description": "AERRATRIC TECHNOLOGY INC designs modern SaaS platforms, AI, and digital transformation solutions to streamline operations, enhance user experiences, and support long-term business scalability.",
    "url": "https://aerrartictechnology.com",
    "siteName": "AERRATRIC TECHNOLOGY INC",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/abstract-background-with-soft-flowing-or-1774468580598-e41bfd3d.png",
        "alt": "Abstract digital transformation background"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "AERRATRIC TECHNOLOGY INC | Intelligent Software for Sustainable Growth",
    "description": "AERRATRIC TECHNOLOGY INC designs modern SaaS platforms, AI, and digital transformation solutions to streamline operations, enhance user experiences, and support long-term business scalability.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/abstract-background-with-soft-flowing-or-1774468580598-e41bfd3d.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunito.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
