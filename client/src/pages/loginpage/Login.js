import { useEffect } from 'react';
import './style.css'
function Login(){
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
          <legend className="login-title">Welcome back</legend>
          <h className="login-h">To access the forums as well as psychologist and member areas</h>
          <p className="login-title1 login-p">Log into your account</p> 
          <p className="login-p">
            <label for="name"></label>
            <input className="login-input" type="text" id="name" name="name" placeholder="Email"/>
          </p>
          <p className="login-p">
          <label className="login-label"for="pwd"></label>
          <input className="login-input" type="password" id="pwd" name="pwd" placeholder="Password"/>
          </p>
            <input className="login-input" type="checkbox"/>remember me
            <br/><br/>
            <button className="login-btnclass" type="button" onclick="alert('Hello world!')">Log  In</button>
            <br/><br/>
            <a className="underclass">Forget your password</a>
          </div>  
        <img className="login-picture"src={require("../homepage/Photoes/image.jpg")}/>
      </div>
    )
}

export default Login;