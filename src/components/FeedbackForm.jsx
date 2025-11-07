import React, { useState } from "react";

function FeedbackForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted: " + message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Feedback Form</h3>
      <textarea
        placeholder="Type your feedback here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        cols="50"
        required
      />
      <br />
      <button type="submit">Send Feedback</button>
    </form>
  );
}

export default FeedbackForm;
