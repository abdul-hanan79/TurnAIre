"use client"
import { useEffect, useState } from "react";
import { IMAGES } from "../../../../../public";
import LoadingImage from "./LoadingImage";
import { LandingPage } from "./LandingPage";


export const Hero: React.FC = () => {
  const [showLandingPage,setShowLandingPage]=useState(false)
  useEffect(()=>{
setTimeout(()=>{
  setShowLandingPage(true)
},3000)
  },[])
  return (
    <main className="h-[100vh] w-100">
      {!showLandingPage?<LoadingImage 
        src={IMAGES.logo}
        alt="Hero section decorative image"
      />:<LandingPage/>}
    </main>
  );
}

export default Hero;