import "./register.css"
import Labelrow from "./components/Labelrow.js"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../components/ErrorAlert.js";
function Registerpage(){
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')
    function redirect_login(){
        navigate("/login", {replace: true})
    }
    const defaultForm = {
        "First Name *": "",
        'Last Name *': "",
        "Email *": "",
        "Phone *": "",
        "Password *": "",
        "Confirm Password *": ""
    }

    const [form, setForm] = useState(defaultForm)

    async function signup(){
        //check passwords match
        if(form['Password *'] !== form['Confirm Password *'])
            return
        
        // jason format data how u want for the api
        const data = {
            "firstName": form['First Name *'],
            "lastName": form['Last Name *'],
            "email": form['Email *'],
            "phone": form['Phone *'],
            "password": form['Password *']
        }
        
        try {
            let response = await fetch("/api/auth/signup", {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...data
              }),
            });
            if (response.ok) {
              setSuccess(true);
            } else {
              let message = await response.json()
              let err =  message?.err?.errors[0].message
              setError(true);
              setErrorMsg(err)
              redirect_login()
            }
          } catch (error) {
            console.error("Server error while signing up", error);
            setError(true);
          }
    }

    // add styles to body only for the register page
    useEffect(()  => {
        document.body.classList.add('register-body');

        return () => {
            document.body.classList.remove('register-body');
        };
    });
    return (
        <div className="register-container ">
            {error && <ErrorAlert details={errorMsg} />}
            <legend className="register-title">Please type your information here</legend>
            <br/>
            <hr className="hr-register"/>
            <br/>
            <Labelrow form={form} setForm={setForm} label1="First Name *" label2="Last Name *" inputType="text"/>
            <Labelrow form={form} setForm={setForm} label1="Email *" label2="Phone *" inputType="text"/>
            <Labelrow form={form} setForm={setForm} label1="Password *" label2="Confirm Password *" inputType="password"/>
            <div className="d-flex align-items-center flex-column mt-3">
                <button className="register-btnclass signupBtn" type="button"
                    onClick={signup}>Sign up</button>
                <br/>
                <a className="a-register" href="#" onClick={redirect_login}>
                    <u><strong>Already have an account?</strong></u>
                </a>
            </div>
        </div>
    )
}

export default Registerpage;