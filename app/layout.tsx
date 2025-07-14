import React from "react"; // Fix: use full import instead of 'import type'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gnanadeep Gumpula - Studio",
  description: "Full Stack Developer & Creative Technologist",
  generator: "Gnanadeep Gumpula",
  applicationName: "Gnanadeep Gumpula Portfolio",
  keywords: [
    "Gnanadeep Gumpula",
    "Portfolio",
    "Full Stack Developer",
    "Creative Technologist",
    "Web Development",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Game Development",
    "Mobile Development",
    "Cloud Computing",
    "Open Source",
    "Tech Speaker",
    "Mentorship",
    "Tech Community"
  ],
  authors: [{ name: "Gnanadeep Gumpula", url: "https://gnanadeepgumpula.vercel.app" }],
  creator: "Gnanadeep Gumpula",
  openGraph: {
    title: "Gnanadeep Gumpula - Studio",
    description: "Full Stack Developer & Creative Technologist",
    url: "https://gnanadeepgumpula.vercel.app",
    siteName: "Gnanadeep Gumpula studio",
    images: [
      {
        url: "/Gnanadeepstudio Logo.png",
        width: 1200,
        height: 630,
        alt: "Gnanadeep Gumpula Studio"
      }
    ],
    locale: "en_US"
  }
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
