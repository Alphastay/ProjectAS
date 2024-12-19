import React, { useEffect, useState } from "react";
import "../styles/HotelReview.css";
import { useParams } from "react-router-dom";
import userprofile from "../assets/Userprofile.jpg";
import axios from "axios";

function HotelReview({ hotelId }) {
  const [reviews, setReviews] = useState([]);
  const [hotel, setHotel] = useState(null);
  const [newReview, setNewReview] = useState({
    title: "",
    rating: 0,
    comment: "",
  });

  useEffect(() => {
    const fetchHotelDetails = async () => {
      if (!hotelId) return;
      try {
        const response = await axios.get(
          `https://alphastay.vercel.app/api/hotel_details/${hotelId}`
        );
        const data = response.data;
        console.log("fetched data is ", data);
        console.log(data.success);
        if (data.success) {
          setHotel(data.hotel);
          setReviews(data.hotel.reviews || []);
        } else {
          console.error("error in fetching the data");
        }
      } catch (error) {
        console.error("error fetching the hotel reviews", error);
      }
    };

    fetchHotelDetails();
  }, [hotelId]);

  const reviewHandler = async (e) => {
    e.preventDefault();
    console.log("Review", newReview.title, newReview.comment, newReview.rating);
    try {
      let result = await axios.post(
        `http://localhost:4000/api/hotel_details/${hotelId}/review`,
        {
          title: newReview.title,
          comment: newReview.comment,
          rating: Number(newReview.rating),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = result.data;
      if (data.message === "Review added successfully") {
        // Add the new review from the server response
        setReviews([...reviews, data.review]);

        // Clear form
        setNewReview({ title: "", rating: 0, comment: "" });
        alert("Thank you for the review!");
      } else {
        alert("Review submission failed");
      }
    } catch (error) {
      console.error("Error while writing review", error);
      alert("Review failed,try again!!");
    }
  };

  return (
    <>
      <div className="section_container reviews" id="reviews">
        <div className="reviews_content">
          <h1>Reviews</h1>
          <p className="line" style={{ color: "red" }}>
            ━
          </p>
          <div className="review_grid">
            {reviews.map((review, index) => (
              <div key={index} className="review_box">
                <div className="review_header">
                  <img src={userprofile} alt="User" />
                  <div className="name">
                    <h3>Visitor</h3> {/* Replace with actual user name */}
                  </div>
                </div>
                <div className="review_content">
                  <h4>{review.title}</h4>
                  <p>{review.comment}</p>
                  <p>Rating: {review.rating}/5</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="section_container add_review" id="listing">
        <div class="add_review_content">
          <h3>Add a Review</h3>
          <form onSubmit={reviewHandler} className="review-form">
            <p class="rate-us">Rate Us :</p>
            <input
              type="text"
              className="input-field"
              placeholder="Title your Review"
              value={newReview.title}
              onChange={(e) =>
                setNewReview({ ...newReview, title: e.target.value })
              }
              required
            />
            <input
              type="number"
              className="input-field"
              min="1"
              max="5"
              placeholder="Rating (1-5)"
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({ ...newReview, rating: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Your review"
              className="textarea-field"
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default HotelReview;
