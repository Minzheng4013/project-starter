function CompanyInfo(props) {
    return (
        <div ref={props.myRef} className="container-fluid text-center home-values-box home-company-container">
            <div className="home-who-we-are">Who we are</div>
            <p className="home-p">We are the goto website to share your thoughts, depression, and get empathy.</p>
            <br/>
            <div className="home-vision">Vision</div>  
            <p className="home-p">We see a world where everyone's thoughts are heard.</p>
        </div>
    );
  }
  
  export default CompanyInfo;
  