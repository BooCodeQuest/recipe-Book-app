import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Sidebar from '../components/Sidebar.jsx';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="p-4">Welcome to the Recipe Book!</div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
