// app/layout.tsx - modified
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from './providers';
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barney Jin's Portfolio",
  description: "Personal portfolio of Peiyuan (Barney) Jin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="background">
            <div className="overlay">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}