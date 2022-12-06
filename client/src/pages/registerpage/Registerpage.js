import "./register.css"
import Labelrow from "./components/Labelrow.js"
function Registerpage(){
    return (
        <div class="register-container">
            <legend class="title">Please type your information here</legend>
            <br/>
            <hr/>
            <br/>
            <Labelrow label1="First Name *" label2="Last Name *" inputType="text"/>
            <Labelrow label1="Email *" label2="Phone *" inputType="text"/>
            <Labelrow label1="Password *" label2="Confirm Password *" inputType="password"/>
            <div className="d-flex align-items-center flex-column mt-3">
                <button className="btnclass signupBtn" type="button">Sign up</button>
                <br/>
                <a href="#"><u><strong>Already have an account?</strong></u></a>
            </div>
        </div>
    )
}

export default Registerpage;