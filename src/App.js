import React from "react";
import Navbar from "./components/Navbar";
import FeedbackForm from "./components/FeedbackForm";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Improve Interaction Between Citizens and Politicians</h1>
        <p>Welcome to <span>Team 8</span> Project</p>
        <p><span>2400032940</span> - S Sai Sahasra</p>
        <p><span>2400030258</span> - Degala Divya</p>
        <p><span>2400030266</span> - V Kusmanjali</p>
        <FeedbackForm />
      </div>
    </div>
  );
}

export default App;
