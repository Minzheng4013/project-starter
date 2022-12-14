import { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import ErrorAlert from '../../components/ErrorAlert.js';
import './style.css'
import { GetUserContext } from '../../userContext.js';
function Login(props){
    const navigate = useNavigate()

    const save_login = GetUserContext().login

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')

    function redirect_post(){
      navigate("/feed", {replace: true})
    }

    async function login(){
      const data = {
        email: email,
        password: password
      }
      try {
        let response = await fetch("/api/auth/login", {
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
          const user = await response.json()
          save_login(user)
          redirect_post()

        } else {
          let message = await response.json()
          let err =  message?.err?.errors[0].message
          setError(true);
          setErrorMsg(err)
        }
      } catch (error) {
        console.error("Server error while logging in", error);
        setError(true);
      }
    }

    // add styles to body only for the login page
    useEffect(()  => {
      document.body.classList.add('login-body');

      return () => {
          document.body.classList.remove('login-body');
      };
    });
    return (
      <div className="login-box" action="index.php" method="post">
        <div className="login-container">
        {error && <ErrorAlert details={errorMsg} />}
          <legend className="login-title">Welcome back</legend>
          <h className="login-h">To access the forums as well as psychologist and member areas</h>
          <p className="login-title1 login-p">Log into your account</p> 
          <p className="login-p">
            <label for="name"></label>
            <input className="login-input" type="text" id="name" name="name" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </p>
          <p className="login-p">
          <label className="login-label"for="pwd"></label>
          <input className="login-input" type="password" id="pwd" name="pwd" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </p>
            <input className="login-input" type="checkbox"/>remember me
            <br/><br/>
            <button className="login-btnclass" type="button" onclick="alert('Hello world!')" 
              onClick={login}>Log  In</button>
            <br/><br/>
            <a className="underclass">Forgot your password?</a>
            <div className="a-register" href="#" onClick={()=>navigate("/register", {replace: true})}>
              <u><strong>Don't have an account?</strong></u>
            </div>
          </div>  
        <img className="login-picture"src={require("../homepage/Photoes/image.jpg")}/>
      </div>
    )
}

export default Login;