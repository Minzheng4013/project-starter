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
  let executeScroll = () => refs.visionRef.current.scrollIntoView()    
  // executeScroll = null;
  // useEffect(()=>{
  //   executeScroll = () => refs.visionRef.current.scrollIntoView() 
  //   console.log('in use effect')   
  // }, [refs.visionRef])

  return (
    <div className="Home">
      {/* <button onClick={executeScroll}></button> */}
        <Navbar refs={refs} executeScroll={executeScroll}/>
        <Welcome myRef={refs.welcomeRef}/>  
        {/* <div ref={refs.visionRef}></div> */}
        <CompanyInfo myRef={refs.visionRef}/>
        <div class="parallax"/>
        <About myRef={refs.aboutRef}/>
        <div class="parallax-2"/>
        <Features myRef={refs.featuresRef}/>
        <Join/>
    </div>
  );
}

export default Homepage;
