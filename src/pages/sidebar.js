
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaBars } from 'react-icons/fa';
import '../pages/Sidebar.css';  // Custom styles for sidebar

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`d-flex flex-column bg-dark vh-150 sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <button className="btn btn-dark toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <ul className="nav flex-column">
        <li className="nav-item ">
          <Link to="/" className="nav-link text-white d-flex align-items-center bg-dark vh-300">
            <FaHome className="me-2" />
            {isOpen && <span className="sidebar-text">Home</span>}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link text-white d-flex align-items-center bg-dark vh-300">
            <FaChartBar className="me-2" />
            {isOpen && <span className="sidebar-text">Dashboard</span>}
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
