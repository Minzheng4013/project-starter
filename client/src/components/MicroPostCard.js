import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import { Navigate } from "react-router-dom";

function MicroPostCard({ content, createdAt, id }) {
  const [likes, setLikes] = useState([]);
  const [allComment, setAllComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);
  const [liked, setLiked] = useState(false);

  async function addLike() {
    try {
      let response = await fetch(`/api/micro_posts/incrementLikes/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        }
      });
      let increaseLikes = await response.json();
      setLikes(increaseLikes.likesCounter);
      setLiked(true);
    } catch (error) {
      console.error("Error fetching all micro_posts", error);
    }
  }

  async function removeLike() {
    try {
      let response = await fetch(`/api/micro_posts/decrementLikes/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        }
      });
      let decreaseLikes = await response.json();
      setLikes(decreaseLikes.likesCounter);
      setLiked(false);
    } catch (error) {
      console.error("Error fetching all micro_posts", error);
    }
  }

  const handleSubmit = async (event) => {
    try {
      let response = await fetch("/api/comment_posts", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment_content: comment,
          post_id: id
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Server error while creating a new comment", error);
      setError(true);
    }
  };


  useEffect(() => {
    async function getLikes() {
      setLoading(true);
      try {
        let response = await fetch(`/api/micro_posts/totalLikes/${id}`);
        let totalLikes = await response.json();
        setLikes(totalLikes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all micro_posts", error);
        setError(true);
      }
    }
    async function getAllComments() {
      setLoading(true);
      try {
        let response = await fetch(`/api/comment_posts/${id}`);
        let allCommentPost = await response.json();
        setAllComment(allCommentPost);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all micro_posts", error);
        setError(true);
      }
    }
    getLikes();
    getAllComments();

    return () => {
      // clean up function
    };
  }, []);

  const handleContentChange = (event) => {
    setComment(event.target.value);
  };

  if (success) return <Navigate to="/" />;
  if (error) return <ErrorAlert details="Failed to fetch all micro posts" />;
  if (loading) return <LoadingSpinner />;

  return (
    <>
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/" + id}>{content}</Link>
          <h1>Likes: {likes}</h1>
          {(liked === false) ? <button onClick={addLike}>Like</button> : <button onClick={removeLike}>Liked</button>}
          {allComment.map((eachComment) => {
          return eachComment.comment_content;
        })}
        </div>
        <div className="card-footer small text-muted text-end">{createdAt}</div>
      </div>
    </div>
    <div className="col-10 col-md-8 col-lg-7">
      {error && <ErrorAlert details={"Failed to save the content"} />}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Add your words of wisdom here..."
            value={comment}
            className="form-control"
            onChange={handleContentChange}
            autoFocus
          />
          <button type="submit" className="btn btn-primary">
            Save Comment
          </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default MicroPostCard;
