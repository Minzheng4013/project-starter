import "./register.css"
import Labelrow from "./components/Labelrow.js"
import { useEffect } from "react";
function Registerpage(){
    // add styles to body only for the register page
    useEffect(()  => {
        document.body.classList.add('register-body');

        return () => {
            document.body.classList.remove('register-body');
        };
    });
    return (
        <div className="register-container ">
            <legend className="register-title">Please type your information here</legend>
            <br/>
            <hr className="hr-register"/>
            <br/>
            <Labelrow label1="First Name *" label2="Last Name *" inputType="text"/>
            <Labelrow label1="Email *" label2="Phone *" inputType="text"/>
            <Labelrow label1="Password *" label2="Confirm Password *" inputType="password"/>
            <div className="d-flex align-items-center flex-column mt-3">
                <button className="register-btnclass signupBtn" type="button">Sign up</button>
                <br/>
                <a className="a-register" href="#"><u><strong>Already have an account?</strong></u></a>
            </div>
        </div>
    )
}

export default Registerpage;