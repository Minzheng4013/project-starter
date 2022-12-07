function Labelrow(props){
    return(
        <div className="row mb-lg-3 mb-md-0">
          <div className="register-inner-box col-lg-6 col-md-12">
            <p>
            <div className="register-labels">{props.label1}</div>
            <input className="register-input-group register-input" type={props.inputType} />
            </p>
          </div>
          <div className="register-inner-box col-lg-6 col-md-12">
            <p>
            <div className="register-labels">{props.label2}</div>
            <input className="register-input-group register-input" type={props.inputType}/>
            </p>
          </div>
        </div>
    )
}
export default Labelrow;