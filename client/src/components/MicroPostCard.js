import React from "react";
import { Link } from "react-router-dom";
//import {Date} from "prismic-react"
//import { RichText, Date } from 'react-router-dom';


//create micropostcard.css to style each card
function MicroPostCard({ content, createdAt, id }) {
  return (

    createdAt= new Date(),
    //createdAt = Date(document.data.event_date).toString(),

    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text color:black">
          <div className="card">
          <p to={"/posts/" + id}>{content}</p>
          </div>
        </div>
        <div className="card-footer small text-muted text-end">{createdAt.toLocaleString()/*createdAt*/}</div>
      </div>
    </div>
  );
}

export default MicroPostCard;
