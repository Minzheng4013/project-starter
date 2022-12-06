import {useState, useEffect} from 'react';
import Comments from './SingleComment';
import CommentForm from './CommentForm';

//need a getComments() from api -- import getComments() as getComments()
//n a deleteComment from api -- import deleteComment as deleteCommentApi

 const Comment = ({ currentId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(backendComments => backendComments.parentID = null);

  const getReplies = commentId => {
    return backendComments.filter(backendComments => backendComments.parentID === commentId).sort((a,b) => new Date(a.createAt).getTime()-new Date(b.createAt).getTime())
  };

  const addComment = (text, parentID) => {
    console.log('addComment', text, parentID);
  };

  const deleteComment = (commentId) => {
    if(Window.confirm('Sure you want to delete this comment?')){
      deleteComment(commentId).then(() => {
        const updatedBackendComments = backendComments.filter(backendComments => backendComments.id !== commentId);
        setBackendComments(updatedBackendComments);
      });
    }
  }

  //console.log('backendComments', backendComments); //to test to see if works in inspect then console
  useEffect(() => {
    /*getComments().then((data => {
      setBackendComments(data);
    }));*/
  }, []);

  return (
    <div className='comments'>
      <label className='comment-title'>Comments</label>
      <div className='comment-form-title'>Write Comment</div>
      <CommentForm submitLabel="write" handleSubmit={addComment}/>
      <div className='comments-container'>
        {rootComments.map((rootComment) => (
          <Comments key={rootComment.id} comments={rootComment} replies={getReplies(rootComment.id)}
          currentUserId={currentId}
          deleteComment={deleteComment};
          />
        ))}

      </div>
    </div>
  );
}

export default Comment;