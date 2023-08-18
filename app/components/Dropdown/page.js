"use client"
import { useState } from 'react';
import Link from 'next/link';
import "./globals.css"

const DropdownButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        Product <span className="dropdown-icon">{isDropdownOpen ? '▲' : '▼'}</span>
      </button>
      <div className="dropdown-content">
        <Link href="/components/CC_machine"><p>CCM Solution</p></Link>
        <Link href="/components/Ladle"><p>Ladle Calculator</p></Link>
      </div>
    </div>
  );
};

export default DropdownButton;
