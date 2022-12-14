import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = React.forwardRef((props, ref)=> {
    let [collapse, setCollapse] = useState(true)
    const navigate = useNavigate()
    function onClickCollapse(){
      setCollapse(!collapse);
    }

    useEffect(()=>console.log(ref.current), [ref])


    // const scrollHome = () => props.refs.homeRef.current.scrollIntoView()   
    // const scrollWelcome = () => props.refs.welcomeRef.current.scrollIntoView()   
    // const scrollVision = () => props.refs.visionRef.current.scrollIntoView()   
    // const scrollAbout = () => props.refs.aboutRef.current.scrollIntoView()   
    // const scrollFeatures = () => props.refs.featuresRef.current.scrollIntoView()   
    // onClick={()=>{console.log("hello"); console.log(props.executeScroll); props.executeScroll();}}
    return (
      <header>
      <nav className="home-navbar navbar navbar-expand-lg navbar-light">
        <div className="text-center">
          <img className="logo" src={require("../profile_images/logo.png")} alt="Logo"/>
          <div className="logotext">MenSense</div>
        </div>
  
        <button onClick={onClickCollapse} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={collapse?"collapse navbar-collapse":"navbar-collapse"} id="navbarNavDropdown">
          <ul className="navbar-nav nav-fill w-100">
            <li className="nav-item home-nav-item active">
              <a className="nav-link home-nav-link" href="#">HOME</a>
            </li>
            <li className="nav-item home-nav-item" onClick={() => {
              ref?.current?.scrollIntoView();
              console.log(ref)
              }}>
              <a className="nav-link home-nav-link" href="#" >VISION</a>
            </li>
            <li className="nav-item home-nav-item">
              <a className="nav-link home-nav-link" href="#">ABOUT</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Features
              </a> */}
              {/* <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Consult Forums</a>
                <a className="dropdown-item" href="#">Share your Stress</a>
                <a className="dropdown-item" href="#">Get Help</a>
              </div> */}
            {/* </li> */}
            <li className="nav-item home-nav-item">
              <a className="nav-link home-nav-link" href="#" onClick={()=>navigate("/login", {replace: true})}>LOGIN</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    );
  })
  
  export default Navbar;
  