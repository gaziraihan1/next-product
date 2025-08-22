
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header/Header";
import { SessionProvider } from "next-auth/react";
import Providers from "./Providers";
import Footer from "@/components/Footer/Footer";


 const inter = Inter({
  subsets: ['latin']
 })
 

export const metadata = {
  title: "MyShop",
  description: "This is my shop website",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={` ${inter.className} antialiase`}
      >
<Providers>

        <header className="sticky top-0 left-0 shadow-md z-10 opacity-100 bg-white">
            <Header />
        </header>
        <main className="p-4 md:p-0 md:w-11/12 xl:w-10/12 mx-auto my-6 min-h-[85vh]">
        {children}
        </main>
        <footer>
          <Footer />
        </footer>
        </Providers>
      </body>
    </html>
  );
}
