import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import { GetUserContext } from "../userContext.js";

function PostFormPage(props) {
  const navigate = useNavigate()
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [is_anonymous, setIs_anonymous] = useState(0)

  const user = GetUserContext().user
  console.log(user)

  let firstName = user?.firstName
  let lastName = user?.lastName
  let email = user?.email

  // useEffect(()=>{
  //   firstName = props.user.firstName
  //   lastName = props.user.lastName
  //   email = props.user.email
  // }, [props.user])
  
  useEffect(()=>{
    console.log(is_anonymous)
  }, [is_anonymous])


  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("/api/micro_posts", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content,
          firstName,
          lastName,
          email,
          is_anonymous
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Server error while creating a new micro post", error);
      setError(true);
    }
  };

  if (success) return <Navigate to="/feed" />;

  return (
    <div className="create-post create-background d-flex flex-row justify-content-center">
      {error && <ErrorAlert details={"Failed to save the content"} />}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input  
            type="text"
            placeholder="Add a post here..."
            value={content}
            className="post-new flex-grow"
            onChange={handleContentChange}
            autoFocus
          />
          
          <div className="postFormButton">
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </div>

          <div className="col-12">
            <label>anonymous</label>
            <input type="checkbox" onClick={()=>setIs_anonymous((prev)=>prev?0:1)}></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PostFormPage;