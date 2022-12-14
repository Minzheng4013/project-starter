import React, { useState, useEffect } from "react";
import MicroPostCard from "../components/MicroPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

import "./PostsListPage.css";
import { GetUserContext } from "../userContext.js";
import { useNavigate } from "react-router-dom";

function PostsListPage() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const user = GetUserContext().user
  console.log(user)
   useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let response = await fetch("/api/micro_posts");
        let allPosts = await response.json();
        setPosts(allPosts);
        setLoading(false);
      } catch (error) {
        <div id="postError">
        console.error("Error fetching all micro_posts", error);
        setError(true);
        </div>
      }
    }
    getData();
    return () => {
      // clean up function
    };
  }, []);
  if (error) return <ErrorAlert details="Failed to fetch all micro posts" />;
  if (loading) return <LoadingSpinner />;

  // let demoposts = [{content:"post #1 demo", createdAt:2, id:1 },
  // {content:"post #2 demo", createdAt:2, id:2 }, {content:"post #3 demo", createdAt:2, id:3 } ];

  //let [count,setClick] = useState(0);


  return (
    <div className="post-feed container-fluid text-center">
      <div className="row justify-content-center">
        <div className="feedTitle">
        {/*<h1>Your Post Feed</h1>*/}
        </div>
        
        <div className="row">
          <div className="col-2">
            <div className="side-bar d-flex flex-column flex-shrink-0 p-3" >
            <label className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
              <div className="side-bar-title">
                <span className="bar-title">SideBar</span>
              </div>
            </label>
      
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <li >
                  <a href="/home" id="main" className="nav-link link dark">Main Page</a>
                </li>
                <li>
                {/* href="/posts/new"  */}
                  <a onClick={()=> navigate("/posts/new", {replace: true})} id="main" className="nav-link link dark">Create a Post</a>
                </li>
                <li>
                  <a href="/feed" id="main" className="nav-link link dark">Post Feed</a>
                </li>
                <li>
                  <a href="#" id="main" className="nav-link link dark">Profile</a>
                </li>
                <li>
                  <a href="#" id="main" className="nav-link link dark">Friends</a>
                </li>
                <li>
                  <a href="#" id="main" className="nav-link link dark">Groups</a>
                </li>
                <li>
                  <a href="#" id="main" className="nav-link link dark settings" >Settings</a>
                </li>
              </li>
            </ul>
            
          </div>
  </div>
          
          
          <div className="col-8">
          {/*demoposts*/posts.map((entryData) => (
          <MicroPostCard {...entryData} key={entryData.id} />
        ))}
          </div>
          <div className="col-2">
            <div className="side-bar d-flex flex-column flex-shrink-0 p-3" >
            <label className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
              <div className="side-bare-title">
                <span className="bar-title">Outreach</span>
              </div>
            </label>
      
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <li >
                  <div className="main-border">
                    <div className="dropdown"><a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle">
                      <strong>Doctor</strong>
                    </a>
                    <ul>
                      <li>
                        <a href="#" className="chat">
                          Chat
                        </a>
                      </li>
                      <li>
                        <a href="#" className="chat">
                          Phone Call
                        </a>
                      </li>
                      <li>
                        <a href="#" className="chat">
                          In-Person
                        </a>
                      </li>
                    </ul>
                    </div>
                    <li>
                    <a href="/home" id="main" className="nav-link link dark">About Us</a>
                    </li>
                    <li>
                    <a href="#" id="main" className="nav-link link dark">Contact Us</a>
                    </li>

                  </div>
                  
                </li>
                
              </li>
            </ul>
            
          </div>
          </div>

        </div>
       
        
      </div>

      

    </div>

  );
}

export default PostsListPage;