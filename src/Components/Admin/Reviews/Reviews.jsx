import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ title: "", paragraph: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:5005/api/reviews";

  // Fetch all reviews
  const fetchReviews = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(API_URL);
      setReviews(res.data);
    } catch (err) {
      setError("Failed to fetch reviews.");
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit for add or edit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.paragraph.trim()) {
      setError("Both Title and Paragraph are required.");
      return;
    }
    setError("");

    try {
      if (isEditing) {
        await axios.put(`${API_URL}/${editId}`, form);
        setIsEditing(false);
        setEditId(null);
      } else {
        await axios.post(API_URL, form);
      }
      setForm({ title: "", paragraph: "" });
      fetchReviews();
    } catch (err) {
      setError("Failed to save the review.");
      console.error(err);
    }
  };

  // Handle delete review
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchReviews();
      } catch (err) {
        setError("Failed to delete the review.");
        console.error(err);
      }
    }
  };

  // Prepare edit
  const handleEdit = (review) => {
    setForm({ title: review.title, paragraph: review.paragraph });
    setEditId(review._id);
    setIsEditing(true);
    setError("");
  };

  // Cancel edit
  const cancelEdit = () => {
    setForm({ title: "", paragraph: "" });
    setEditId(null);
    setIsEditing(false);
    setError("");
  };

  return (
    <section className="review-section">
      <h2>Faqs</h2>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="paragraph"
          placeholder="Paragraph"
          value={form.paragraph}
          onChange={handleChange}
          rows={4}
        />
        {error && <p className="error-msg">{error}</p>}
        <div className="form-buttons">
          <button type="submit">{isEditing ? "Update Review" : "Add Review"}</button>
          {isEditing && (
            <button type="button" className="cancel-btn" onClick={cancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>

      {loading ? (
        <p className="loading">Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p className="no-reviews">No reviews found.</p>
      ) : (
        <div className="review-list">
          {reviews.map((review) => (
            <div key={review._id} className="review-card">
              <h3>{review.title}</h3>
              <p>{review.paragraph}</p>
              <div className="actions">
                <button className="edit-btn" onClick={() => handleEdit(review)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(review._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Reviews;
