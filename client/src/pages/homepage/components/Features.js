import featureImage1 from "../Photoes/Psy.png"
import featureImage2 from "../Photoes/pic2.png"
import featureImage3 from "../Photoes/pic3.png"
function Features(props) {
    return (
    <div ref={props.myRef} class="d-flex flex-column align-items-center features">
        <div className="container row feature-container d-flex justify-content-around">
            <img className="col-lg-7 col-md-12 img-fluid" src={featureImage1}/>
            <div className="row col-lg-5 col-md-12 text-left feature-text">
                <div className="feature-title">Consult our Forums</div>
                <div className="feature-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>

        <div className="container row feature-container mx-auto">
            <img className="col-lg-7 col-md-12 img-fluid" src={featureImage2}/>
            <div className="row col-lg-5 col-md-12 order-lg-first text-left feature-text">
                <div className="feature-title">Share your Stress</div>
                <div className="feature-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>

        <div className="container row feature-container">
            <img className="col-lg-7 col-md-12" src={featureImage3}/>
            <div className="row col-lg-5 col-md-12 text-left feature-text">
                <div className="feature-title">Recieve Help</div>
                <div className="feature-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Features;
  