function Labelrow(props){
    return(
        <div className="row mb-lg-3 mb-md-0">
          <div className="inner-box col-lg-6 col-md-12">
            <p>
            <div className="labels">{props.label1}</div>
            <input className="input-group" type={props.inputType} />
            </p>
          </div>
          <div className="inner-box col-lg-6 col-md-12">
            <p>
            <div className="labels">{props.label2}</div>
            <input className="input-group" type={props.inputType}/>
            </p>
          </div>
        </div>
    )
}
export default Labelrow;