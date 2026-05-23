

import { Josefin_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const Footer =dynamic(()=> import("./components/Footer"))
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});



export const metadata = {
  title: "Wanderlust",
  description: " A travel booking apps ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
          <Toaster />
      </body>
    </html>
  );
}
