import type { Metadata } from "next";
import "@/app/styles/globals.css";
import {Providers} from "./providers";

export const metadata: Metadata = {
  title: "Darwin Gutierrez - Portfolio",
  description: "This is the personal portfolio of Darwin Gutierrez, a software engineer based in the Netherlands.",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body className="bg-gradient-to-b from-gray-900 to-black min-h-screen dark:text-black text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
