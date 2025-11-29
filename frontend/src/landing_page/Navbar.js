
import LogoIcon from "./LogoIcon";
import { Link } from "react-router-dom";


import React, { useState } from 'react';

export default function Navbar() {
  const [hoveredNav, setHoveredNav] = useState(null);

  const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/product" },
  { label: "Pricing", path: "/pricing" },
  { label: "Support", path: "/Support" }
];

  const styles = `
    .navbar-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      border-bottom: 1px solid #e5e7eb;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      z-index: 1000;
    }

    .navbar-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
    }

    .navbar-logo {
      font-size: 24px;
      font-weight: 700;
      color: #0a1a2f;
      letter-spacing: -0.5px;
      cursor: pointer;
    }

    .navbar-center {
      display: flex;
      align-items: center;
      gap: 40px;
      flex: 1;
      justify-content: center;
    }

    .navbar-nav-item {
      position: relative;
      font-size: 14px;
      font-weight: 500;
      color: #374151;
      cursor: pointer;
      transition: color 0.3s ease;
      padding: 8px 0;
    }

    .navbar-nav-item:hover {
      color: #2bc0a4;
    }

    .navbar-nav-item::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #2bc0a4;
      transition: width 0.3s ease-in-out;
    }

    .navbar-nav-item.active::after {
      width: 100%;
    }

    .navbar-nav-item:hover::after {
      width: 100%;
    }

    .navbar-right {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .btn-login {
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 500;
      color: #374151;
      background: transparent;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-login:hover {
      color: #2bc0a4;
      border-color: #2bc0a4;
    }

    .btn-signup {
      padding: 10px 24px;
      font-size: 14px;
      font-weight: 500;
      color: white;
      background-color: #0a806aff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(43, 192, 164, 0.2);
    }

    .btn-signup:hover {
      background-color: #178b72ff;
      box-shadow: 0 4px 8px rgba(43, 192, 164, 0.3);
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .navbar-center {
        display: none;
      }

      .navbar-inner {
        padding: 0 16px;
      }

      .navbar-logo {
        font-size: 20px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="navbar-container ">
        <div className="navbar-inner ">
          <div> <LogoIcon size={30} color="#2BC0A4" />
 <span className="navbar-logo">EquityFlow</span></div>
         

          <div className="navbar-center">
            {navItems.map((item) => (
              
              <Link
                key={item.label}
                to={item.path}
                className={`navbar-nav-item ${hoveredNav === item ? 'active' : ''}text-decoration-none`}
                onMouseEnter={() => setHoveredNav(item)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="navbar-right">
            <button className="btn-login">Login</button>
            <button className="btn-signup">Signup</button>
          </div>
        </div>
      </div>
    </>
  );
}
