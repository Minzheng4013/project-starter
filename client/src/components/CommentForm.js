import { useState } from "react";
import "./CommentForm.css";

const CommentForm = ({handleSubmit, submitLabel}) =>{
  const [text, setText] = useState('');
  const onSubmit = event => {
    event.preventDefault()
    handleSubmit(text);
  }
  submitLabel = "Write";

  return(
    <form onSubmit={onSubmit}>
      <textarea className="comment-form-textarea" type="text"
            placeholder="Add a comment here..." value={text}
      onChange={(e) => setText(e.target.value)}>
      </textarea>
      <button className="comment-form-button">{submitLabel}</button>
    </form>
  );
};

export default CommentForm;
