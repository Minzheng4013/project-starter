import {useState, useEffect} from 'react';
import Comments from "./Comments"

const SingleComment = ({comment, replies, currentUserId, deleteComment}) =>{
  const canReplyToPost = Boolean(currentUserId); 
  const canDeletePost = currentUserId === comment.id; //only creator can delete own post
  const canEditPost = currentUserId === comment.id && !timeElapsed;
  const timeLimitEdit = 600000; //10 minutes in milliseconds
  const timeElapsed = new Date() - new Date(comment.createdAt) > timeLimitEdit; //here we will see if time since post has been posted elapsed 10 minutes
  


  



  return(
    <div className="single-comment">
      <div className="comment-image-container">
        <img src="/icons8-name-48.png"/>
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{comment.createdAt}</div>
        </div>
        <div className="comment-text">{comment.body}</div>

        {/*Action buttons*/}
        <div className="comment-actions">
          {canReplyToPost && <div className="comment-action">Reply</div>}

          {canEditPost && <div className="comment-action">Edit</div>}

          {canDeletePost && <div className="comment-action" onClick={() => deleteComment(comment.id)} >Delete</div>}
        </div>

        {replies.length > 0 && (
          <div className="replies"
          {...replies.map(reply => (
            <Comments comment={reply} key={reply.id} replies={[]} 
            currentUserId={currentUserId}/>
          ))}>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleComment;