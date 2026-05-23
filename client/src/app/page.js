import dynamic from "next/dynamic";

import Banner from "./components/Banner";
import Features from "./components/Features";
// import CiaSection from "./components/CiaSection";
const CiaSection =dynamic(()=> import("./components/CiaSection"))
export default function Home() {
  return (
   <>
   <Banner/>
   <Features/>
   <CiaSection/>
   </>
  );
}
