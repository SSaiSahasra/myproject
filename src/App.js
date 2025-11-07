import React from "react";
import Navbar from "./components/Navbar";
import './App.css';

function FeedbackForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted! Thank you.");
  };

  return (
    <div className="feedback-container">
      <form onSubmit={handleSubmit}>
        <h3>Feedback Form</h3>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Feedback" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Enhancing Citizen & Politician Interaction</h1>
        <p className="intro-text">Welcome to <span>Team 8's Personalized Project</span></p>
        <p><span>2400032940</span> - S Sai Sahasra</p>
        <p><span>2400030258</span> - Degala Divya</p>
        <p><span>2400030266</span> - V Kusmanjali</p>
        <FeedbackForm />
      </div>
    </div>
  );
}

export default App;
