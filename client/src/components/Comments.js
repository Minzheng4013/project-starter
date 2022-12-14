import {useState, useEffect} from 'react';
import Comments from './SingleComment';
import CommentForm from './CommentForm';

//need a getComments() from api -- import getComments() as getComments()
//n a deleteComment from api -- import deleteComment as deleteCommentApi

 const Comment = ({ currentId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(backendComments => backendComments.parentID = null);
  const [allComment, setAllComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const getReplies = commentId => {
  //   return backendComments.filter(backendComments => backendComments.parentID === commentId).sort((a,b) => new Date(a.createAt).getTime()-new Date(b.createAt).getTime())
  // };

  const addComment = (text, parentID) => {
    console.log('addComment', text, parentID);
    <Comments currentUserId={currentId}/>
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
    // async function getAllComments() {
    //   setLoading(true);
    //   try {
    //     let response = await fetch(`/api/comment_posts/${currentId}`);
    //     let allCommentPost = await response.json();
    //     setAllComment(allCommentPost);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error("Error fetching all micro_posts", error);
    //     setError(true);
    //   }
    // }
  }, []);

  return (
    <div className='comments'>
      
      {/*<div className='comment-form-title'>Write Comment</div>*/}
      <CommentForm submitLabel="write" handleSubmit={addComment}/>
      <div className='comments-container'>
        {rootComments.map((rootComment) => (
          <Comments key={rootComment.id} comments={rootComment}
          currentUserId={currentId}
          deleteComment={deleteComment}
          />
        ))}

      </div>
    </div>
  );
}

export default Comment;