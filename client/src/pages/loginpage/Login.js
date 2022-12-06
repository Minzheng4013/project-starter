import './style.css'
function Login(){
    return (
        <div className="box" action="index.php" method="post">
        <div className="container">
          <legend className="title">Welcome back</legend>
          <h>To access the forums as well as psychologist and member areas</h>
          <p className="title1">Log into your account</p> 
          <p>
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder="Email"/>
          </p>
          <p>
          <label for="pwd"></label>
          <input type="password" id="pwd" name="pwd" placeholder="Password"/>
          </p>
            <input type="checkbox" name="Professional" value = "Professional1"/>remember me
            <br/><br/>
            <button className="btnclass" type="button" onclick="alert('Hello world!')">Log  In</button>
            <br/><br/>
            <a className="underclass">Forget your password</a>
        </div>  
        <img className="picture"src={require("../homepage/Photoes/image.jpg")}/>
      </div>
    )
}

export default Login;