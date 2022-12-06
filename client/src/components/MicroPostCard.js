import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Comments from '../components/Comments';

//import {Date} from "prismic-react"
//import { RichText, Date } from 'react-router-dom';


//create micropostcard.css to style each card
function MicroPostCard({ content, createdAt, id }) {
  const [like, setCount, setClicked, click, incrementLikes] = useState(0);

  

  return (

    createdAt= new Date(),
    //createdAt = Date(document.data.event_date).toString(),
    

    <div className="col-lg">
      <div className="card mb-4 shadow">
        <div className="card-body card-text color:black">
          <div className="card">
          <p to={"/posts/" + id}>{content}</p>
          </div>
        </div>
        <div className="card-footer small text-muted text-end">{createdAt.toLocaleString()/*createdAt*/}</div>

          <button
            onClick={() => {
              setCount(!like);
              {/*setCount(like+1);*/}
              setClicked(like);
          }}
            onAnimationEnd={() => setClicked(0)}
            className={cn("like-wrapper", {like,click,})}
            >
            <div className="like">
              <span>Like</span>
              <span className={cn("suffix", {like})}>d!</span>
            </div>
          </button>
          {/*<label className="num-likes">{like}</label>*/}

          <div>
          <label className='comment-title medium text-muted text-end'>Comments</label>
            <Comments currentId="1"/>
            
          </div>

        </div>

          

      </div>
  );
}

export default MicroPostCard;
