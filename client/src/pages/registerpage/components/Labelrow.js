function Labelrow(props){
  const onChange = (e)=>{
    props.setForm((prevForm)=>{
      const newForm = {...prevForm}
      newForm[e.target.getAttribute("input_label")] = e.target.value
      return newForm
    })
  }
    return(
        <div className="row mb-lg-3 mb-md-0">
          <div className="register-inner-box col-lg-6 col-md-12">
            <p>
            <div className="register-labels">{props.label1}</div>
            <input className="register-input-group register-input" 
              type={props.inputType} 
              value={props.form[props.label1]}
              input_label={props.label1}
              onChange={onChange}/>
            </p>
          </div>
          <div className="register-inner-box col-lg-6 col-md-12">
            <p>
            <div className="register-labels">{props.label2}</div>
            <input className="register-input-group register-input" 
              type={props.inputType} 
              value={props.form[props.label2]}
              input_label={props.label2}
              onChange={onChange}/>
            </p>
          </div>
        </div>
    )
}
export default Labelrow;