import React, { useState } from "react";
/* import comments from "../comments"; */


const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, 
      name: 'Sarah H.', 
      rating: 5, 
      comment: "Little Lemon is a hidden gem! The Greek Salad is a burst of Mediterranean sunshine, and the Bruschetta is an absolute delight. Top it off with the Lemon Bliss Dessert, and you're in culinary heaven. Five stars for flavor and ambiance!", 
      photo: 'https://i.ibb.co/HTxyjS0/Sarah-H-AI.png'},
    { id: 2, 
      name: 'Alex M.', 
      rating: 5, 
      comment: "Little Lemon captures the essence of the Mediterranean beautifully. The Bruschetta was a perfect start, and the Greek Salad was a refreshing journey. The Lemon Bliss Dessert was the sweet ending I didn't know I needed. A solid five-star experience!", 
      photo: 'https://i.ibb.co/0K47D5w/AlexM-AI.png' },
    { id: 3, 
      name: 'Javier G.', 
      rating: 5, 
      comment: "Exceptional! Little Lemon's weekly specials exceeded my expectations. The Greek Salad was a flavor explosion, the Bruschetta was perfection, and the Lemon Bliss Dessert was simply divine. A must-try for any food enthusiast!", 
      photo: 'https://i.ibb.co/LvNzTj4/Javier-G-Ai.png' }, 
    { id: 3, 
      name: 'Emily P.', 
      rating: 4.5, 
      comment: "Little Lemon is my new favorite spot! The Chef Specials are a culinary masterpiece. The Greek Salad is so fresh, the Bruschetta is a burst of summer, and the Lemon Bliss Dessert is pure bliss. Five stars for a delightful dining experience!", 
        photo: 'https://i.ibb.co/hmgG0PT/Emily-P-AI.png' },   // Add more reviews as needed
  ]);

  return (
    <div className="reviews-container">
      <h2 className="reviews-heading">Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <img src={review.photo} alt={`${review.name}'s profile`} className="profile-photo" />
            <div className="review-content">
              <h3 className="review-name">{review.name}</h3>
              <div className="review-rating">Rating: {review.rating}</div>
              <p className="review-comment">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
