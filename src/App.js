// import React, { useState } from 'react';
// import '../src/App.css'
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine, faBox, faTachometerAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import icons
// import Home from './Home';
// import RegionDistribution from './Components/RegionDistribution';

// const App = () => {
//   // State to control sidebar visibility
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Function to toggle sidebar
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <Router>
//       <div className="d-flex">
//         {/* Sidebar Menu */}
//         <nav className={`bg-light sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//           <div className="d-flex justify-content-between align-items-center">
//             <h4>Dashboard Menu</h4>
//             <button className="btn btn-light" onClick={toggleSidebar}>
//               <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
//             </button>
//           </div>
//           <ul className="nav flex-column">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 <FontAwesomeIcon icon={faChartLine} className="me-2" />
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard">
//                 <FontAwesomeIcon icon={faBox} className="me-2" />
//                 Dashboard
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/other">
//                 <FontAwesomeIcon icon={faBox} className="me-2" />
//                 Other Component
//               </Link>
//             </li>
//             {/* Add more links as needed */}
//           </ul>
//         </nav>

//         {/* Main Content */}
//         <div className="col-md-10">
//           {/* Header */}
//           <header className="bg-primary text-white text-center py-3">
//             <h1>Sales Dashboard</h1>
//           </header>

//           {/* Routes */}
//           <main className="p-3">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/other" element={<RegionDistribution />} />
//             </Routes>
//           </main>
//         </div>
//       </div>

//       {/* Sidebar Toggle Button for Mobile View */}
//       <button 
//         className="btn btn-primary d-md-none" 
//         style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 1000 }} 
//         onClick={toggleSidebar}
//       >
//         <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
//       </button>
//     </Router>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine, faBox, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import icons
// import Home from './Home';
// import Dashboard from './pages/Dashboard';
// import RegionDistribution from './Components/RegionDistribution';

// const App = () => {
//   // State to manage the visibility of the sidebar
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // Function to toggle the sidebar visibility
//   const toggleSidebar = () => {
//     setIsSidebarOpen(isSidebarOpen);
//   };

//   return (
//     <Router>
//       <div className="d-flex">
//         {/* Sidebar Menu */}
//         <nav className={`bg-light sidebar ${isSidebarOpen ? 'open' : 'closed'} p-3`}>
//           <div className="d-flex justify-content-between align-items-center">
//             <h4>Menu</h4>
//             <button className="btn btn-light" onClick={toggleSidebar}>
//               <FontAwesomeIcon icon={faTimes} /> {/* Close button for sidebar */}
//             </button>
//           </div>
//           <ul className="nav flex-column mt-4">
//             <li className="nav-item">
//               <Link className="nav-link" to="/" onClick={toggleSidebar}>
//                 <FontAwesomeIcon icon={faChartLine} className="me-2" />
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard" onClick={toggleSidebar}>
//                 <FontAwesomeIcon icon={faBox} className="me-2" />
//                 Dashboard
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/region" onClick={toggleSidebar}>
//                 <FontAwesomeIcon icon={faBox} className="me-2" />
//                 Region Distribution
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Main Content */}
//         <div className="col-md-10">
//           {/* Header */}
//           <header className="bg-primary text-white text-center py-3">
//             <button className="btn btn-primary d-md-none" onClick={toggleSidebar}>
//               <FontAwesomeIcon icon={faBars} /> {/* Toggle button for mobile */}
//             </button>
//             <h1>Sales Dashboard</h1>
//           </header>

//           {/* Routes */}
//           <main className="p-3">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/region" element={<RegionDistribution />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../src/pages/sidebar';
import Home from '../src/Home';
import Dashboard from './pages/Dashboard';
import RegionDistribution from './Components/RegionDistribution';
import Header from './pages/Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="content p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/others" element={<RegionDistribution />} />
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}

export default App;
