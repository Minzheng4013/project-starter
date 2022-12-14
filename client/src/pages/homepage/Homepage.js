import { useEffect, useRef, useState } from "react";
import About from "./components/About.js";
import CompanyInfo from "./components/CompanyInfo.js";
import Features from "./components/Features.js";
import Join from "./components/Join.js";
import Navbar from "./components/Navbar.js";
import Welcome from "./components/Welcome.js";
import './hp.css'

function Homepage() {
  // add styles to body only for the home page
  useEffect(()  => {
    document.body.classList.add('home-body');

    return () => {
        document.body.classList.remove('home-body');
    };
  });

  // for scrolling when you click on navbar items, doesn't work so far
  let refs = {
    homeRef: useRef(null),
    welcomeRef: useRef(null),
    visionRef: useRef(null),
    aboutRef: useRef(null),
    featuresRef: useRef(null),
  }

  const visionRef = useRef(null)

  // let executeScroll = (ref) => () => {
  //   refs[ref].current.scrollIntoView()   
  // }

  let scrollVision = () => visionRef?.current?.scrollIntoView()

  useEffect(()=>console.log(visionRef.current), [visionRef])

  return (
    <div className="Home">
        <Navbar ref={visionRef}/>
        <Welcome/>  
        <CompanyInfo ref={visionRef}/>
        <div class="parallax"/>
        <About/>
        <div class="parallax-2"/>
        <Features/>
        <Join/>
    </div>
  );
}

export default Homepage;
