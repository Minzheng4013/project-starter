import { useNavigate } from "react-router-dom";

function Join(){
    const navigate = useNavigate()
    return (
        <div class="text-center home-community-box">
            <div className="home-heading-60 home-ending">Join our Community Today</div>
            <button className="home-buttonend" onClick={()=>navigate("/register", {replace: true})}>Sign Up</button>
        </div>
    )
}

export default Join;