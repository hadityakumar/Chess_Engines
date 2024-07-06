'use client'

import { Inter, Roboto_Mono, Montserrat } from "next/font/google";
import { PageTitleProvider } from '@/context/PageTitleContext.js';
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})


export default function RootLayout({ children }) {
  return (


    <html lang="en" className="className={`${inter.variable} ${montserrat.variable} ${roboto_mono.variable }`}">
      
      <body className={montserrat.className}>
        <div class="absolute inset-0 -z-10 min-h-[100%] w-full bg-white [background:radial-gradient(100%_100%_at_50%_10%,#fff_40%,#b58863)]">
          <PageTitleProvider>
            <Navbar />
            {children}
            <Footer/>
          </PageTitleProvider>
        </div>
      </body>

    </html>
  );
}
