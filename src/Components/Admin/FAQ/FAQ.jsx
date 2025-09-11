import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FAQ.css";

const FAQ = () => {
  const [reviews, setReviews] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Add Review form state
  const [newTitle, setNewTitle] = useState("");
  const [newParagraph, setNewParagraph] = useState("");

  // Edit form state
  const [editTitle, setEditTitle] = useState("");
  const [editParagraph, setEditParagraph] = useState("");

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Handle Add new review
  const handleAdd = async () => {
    if (!newTitle || !newParagraph) return alert("All fields are required");
    try {
      await axios.post("http://localhost:5005/api/reviews", {
        title: newTitle,
        paragraph: newParagraph,
      });
      setNewTitle("");
      setNewParagraph("");
      fetchReviews();
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  // Handle Edit
  const handleEdit = (review) => {
    setEditingId(review._id);
    setEditTitle(review.title);
    setEditParagraph(review.paragraph);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditTitle("");
    setEditParagraph("");
  };

  const handleSave = async (id) => {
    try {
      await axios.put(`http://localhost:5005/api/reviews/${id}`, {
        title: editTitle,
        paragraph: editParagraph,
      });
      handleCancel();
      fetchReviews();
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await axios.delete(`http://localhost:5005/api/reviews/${id}`);
        fetchReviews();
      } catch (error) {
        console.error("Error deleting review:", error);
      }
    }
  };

  return (
    <div className="askedquestions-container">
      <h2 className="askedquestions-title">Customer Reviews</h2>

      <div className="askedquestions-list">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="askedquestions-item">
              {editingId === review._id ? (
                <div className="askedquestions-edit">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <textarea
                    value={editParagraph}
                    onChange={(e) => setEditParagraph(e.target.value)}
                  />
                  <div className="askedquestions-edit-buttons">
                    <button onClick={() => handleSave(review._id)}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="askedquestions-question">{review.title}</div>
                  <div className="askedquestions-answer">{review.paragraph}</div>
                  <div className="askedquestions-actions">
                    <button onClick={() => handleEdit(review)}>Edit</button>
                    <button onClick={() => handleDelete(review._id)}>Delete</button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>

      {/* ========================= */}
      {/* Add New Review Section */}
      {/* ========================= */}
      {editingId === null && (
        <div className="askedquestions-admin-panel">
          <h3>Add New Review</h3>
          <input
            type="text"
            placeholder="Review Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            placeholder="Review Paragraph"
            value={newParagraph}
            onChange={(e) => setNewParagraph(e.target.value)}
          />
          <button onClick={handleAdd}>Add Review</button>
        </div>
      )}
    </div>
  );
};

export default FAQ;
