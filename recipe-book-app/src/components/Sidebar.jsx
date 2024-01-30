import React from 'react';
import { Link } from 'react-router-dom'; 

function Sidebar() {
  return (
    <div className="p-4 bg-gray-200">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
