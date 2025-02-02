import React from 'react';
import '../pages/Header.css';  // Custom styles for header


function Header() {
  return (
    <nav className="navbar navbar-dark bg-warning px-3">
      <div className="d-flex align-items-center gap-4">
        {/* Sample logo (can replace with your own logo URL) */}
        <img src='DataVisualization.png' alt="Logo" className="logo me-2" />
        {/* <img src="https://via.placeholder.com/40" alt="Logo" className="logo me-2" /> */}
        {/* Application Name */}
        <span className="navbar-brand mb-0 h1">Data Visualization App</span>
      </div>
    </nav>
  );
}

export default Header;
