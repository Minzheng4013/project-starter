import { useState } from "react";
import "./CommentForm.css";

const CommentForm = ({comment, currentUserId, handleSubmit, submitLabel}) =>{
  const [text, setText] = useState('');
  const TextButtonDisabled = text.length===0;
  //const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const [allComment, setAllComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError, setSuccess] = useState(false);

  const onSubmit = event => {
    event.preventDefault()
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
            post_id: currentUserId
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
  }
  submitLabel = "Write";

  return(
    <form className="form" onSubmit={onSubmit}>
      <textarea className="comment-form-textarea" type="text"
            placeholder="Add a comment here..." value={text}
      onChange={(e) => setText(e.target.value)}>
      </textarea>
      <button className="comment-form-button" disableButton={TextButtonDisabled}>{submitLabel}</button>
    </form>
  );
};

export default CommentForm;
