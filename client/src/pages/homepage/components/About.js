// import '../profile_images/profile1.png'
function About(props) {
    return (
        <div ref={props.myRef} className="container-fluid text-center home-about-container">
            <div className="home-aboutheading home-heading-60 text-center">About Us</div>
            <div className="row mx-auto container home-container">
                <div className="col-md-4 col-sm-12">
                    <img className="img-fluid rounded-circle" alt="profile" src={require("../profile_images/profile1.png")}/>
                    <p className="home-heading-name home-p">Jason <br/>Wang</p>
                    <p className="home-p">Hello! My name is Jason, a senior at Hunter College studying computer science. I am a back end developer.</p>
                </div>
                <div className="col-md-4 col-sm-12">
                    <img className="img-fluid rounded-circle" alt="profile" src={require("../profile_images/profile2.png")}/>
                    <p className="home-heading-name home-p">Min<br/> Zheng</p>
                    <p className="home-p fontchange">Hey there! I am Min, a senior at the City College of New York studying computer science. I am a front end developer who enjoys biking and hiking.</p>
                </div>
                <div className="col-md-4 col-sm-12">
                    <img className="img-fluid rounded-circle" alt="profile" src={require("../profile_images/profile3.png")}/>
                    <p className="home-heading-name home-p">Vincenzo Cammilleri</p>
                    <p className="home-p">Hi! I’m Vincenzo! I’m a junior at the College of Staten Island studying computer science. I have an interest in front-end web development and I enjoy running and playing video games.</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default About;
  