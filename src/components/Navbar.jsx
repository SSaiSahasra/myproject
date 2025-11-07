import React from "react";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "pink", // navbar background
    color: "white",
    padding: "1rem 2rem",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 700
  };

  const titleStyle = {
    margin: 0,
    fontSize: "2rem"
  };

  return (
    <nav style={navbarStyle}>
      <h2 style={titleStyle}>Citizen Interaction Portal</h2>
    </nav>
  );
}

export default Navbar;
