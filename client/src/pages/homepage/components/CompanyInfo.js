function CompanyInfo(props) {
    return (
        <div ref={props.myRef} className="container-fluid text-center values-box company-container">
            <div className="who-we-are">Who we are</div>
            <p>We are the goto website to share your thoughts, depression, and get empathy.</p>
            <br/>
            <div className="vision">Vision</div>  
            <p>We see a world where everyone's thoughts are heard.</p>
        </div>
    );
  }
  
  export default CompanyInfo;
  