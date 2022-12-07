import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";

function MicroPostCard({ content, createdAt, id }) {
  const [likes, setLikes] = useState([]);
  const [allComment, setAllComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    } catch (error) {
      console.error("Error fetching all micro_posts", error);
    }
  }


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
  if (error) return <ErrorAlert details="Failed to fetch all micro posts" />;
  if (loading) return <LoadingSpinner />;

  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/" + id}>{content}</Link>
          <h1>Likes: {likes}</h1>
          <button onClick={addLike}>Like</button>
          <button onClick={removeLike}>Remove Like</button>
          {allComment.map((eachComment) => {
          return eachComment.comment_content;
        })}
        </div>
        <div className="card-footer small text-muted text-end">{createdAt}</div>
      </div>
    </div>
  );
}

export default MicroPostCard;
