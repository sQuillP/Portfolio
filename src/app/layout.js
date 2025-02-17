import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

config.autoAddCss = false;


export const metadata = {
  title: "William Pattison",
  description: "Welcome to my website",
};

const rootfont = Open_Sans({
  subsets:['latin'],
  display:'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rootfont.className}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
