import React from "react";
import comments from "../comments";


const Reviews = () => {
//   console.log(reviews[0]);
  return (
    <div className="review-container">
      <div className="review-header">
        <h2>Testimonials</h2>
        <button>Order Online</button>
      </div>
      <div className="cards2">
        {comments.map((comment) => (
          <div key={comment.id} className="review-items">
            <img src={comment.image} alt="" />
            <div className="review-content">
              <div className="heading2">
                <h5>{comment.title}</h5>
                <p>${comment.price}</p>
              </div>
              <p>{comment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
