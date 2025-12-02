"use client"

import React from "react"
import { useState } from "react"

export default function SupportPortal() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  return (
    <>


      {/* Hero Section */}
      <section className="hero-section mt-5">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">Search for an answer or browse help topics to create a ticket</h1>

            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>

            <div className="quick-links">
              <a href="#tracking">Track account opening</a>
              <a href="#segment">Track segment activation</a>
              <a href="#margins">Intraday margins</a>
              <a href="#kite">Kite user manual</a>
            </div>
          </div>

          <div className="featured-section">
            <h3 className="featured-title">Featured</h3>
            <div className="featured-links">
              <a href="#takeovers">1. Current Takeovers and Delisting – January 2024</a>
              <a href="#intraday">2. Latest Intraday leverages - MIS & CO</a>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Topics Section */}
      <section className="ticket-section">
        <div className="ticket-container">
          <h2 className="section-title">To create a ticket, select a relevant topic</h2>

          <div className="topics-grid">
            {/* Account Opening */}
            <div className="topic-card">
              <div className="topic-header">
                <div className="topic-icon">+</div>
                <h3>Account Opening</h3>
              </div>
              <div className="topic-links">
                <a href="#online">Online Account Opening</a>
                <a href="#offline">Offline Account Opening</a>
                <a href="#company">Company, Partnership and HUF Account Opening</a>
                <a href="#nri">NRI Account Opening</a>
              </div>
            </div>
            <div className="topic-card">
              <div className="topic-header">
                <div className="topic-icon">+</div>
                <h3>Coin EquityFlow</h3>
              </div>
              <div className="topic-links">
                <a href="#online">Understanding Mutual Funds</a>
                <a href="#offline">About Coin</a>
                <a href="#company">Government Securities</a>
                <a href="#nri">MOVING TO COIN</a>
              </div>
            </div> <div className="topic-card">
              <div className="topic-header">
                <div className="topic-icon">+</div>
                <h3>Bank Accounts</h3>
              </div>
              <div className="topic-links">
                <a href="#online">Adding Funds</a>
                <a href="#offline">Fund Withdrawal</a>
                <a href="#company">eMandates</a>
                <a href="#nri">Adding Bank Accounts</a>
              </div>
            </div>
            <div className="topic-card">
              <div className="topic-header">
                <div className="topic-icon">+</div>
                <h3>Console</h3>
              </div>
              <div className="topic-links">
                <a href="#online">Reports</a>
                <a href="#offline">Portfolio</a>
                <a href="#company">IPO</a>
                <a href="#nri">Referral Program</a>
              </div>
            </div>

            {/* Your Account */}
            <div className="topic-card">
              <div className="topic-header">
                <div className="topic-icon user-icon">👤</div>
                <h3>Your EquityFlow Account</h3>
              </div>
              <div className="topic-links">
                <a href="#credentials">Login Credentials</a>
                <a href="#modification">Account Modification and Segment Addition</a>
                <a href="#dp">DP ID and bank details</a>
                <a href="#profile">Your Profile</a>
              </div>
            </div>

            {/* Trading */}
            <div className="topic-card">
              <div className="topic-header">
                <div className="topic-icon chart-icon">📊</div>
                <h3>Your EquityFlow Account</h3>
              </div>
              <div className="topic-links">
                <a href="#margin">Margin/leverage, Product and Order types</a>
                <a href="#kite-web">Kite Web and Mobile</a>
                <a href="#faqs">Trading FAQs</a>
                <a href="#reports">Reports</a>
              </div>
            </div>
          </div>
        </div>

      </section>

    

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background-color: #f8f9fb;
          color: #1a1a2e;
        }

       

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #2563eb 0%, #0ea5a5 100%);
          padding: 3rem 2rem;
          color: white;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-title {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0;
        }

        .search-form {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .search-input {
          flex: 1;
          padding: 0.9rem 1.25rem;
          border: none;
          border-radius: 30px;
          font-size: 0.95rem;
          background: white;
          color: #1a1a2e;
          min-width: 300px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .search-input::placeholder {
          color: #999;
        }

        .search-input:focus {
          outline: none;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }

        .search-btn {
          background: white;
          color: #0ea5a5;
          border: none;
          padding: 0.9rem 1.75rem;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .search-btn:hover {
          background: #f0f9f9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .quick-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.9rem;
        }

        .quick-links a {
          color: white;
          text-decoration: none;
          border-bottom: 2px solid white;
          padding-bottom: 0.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .quick-links a:hover {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.5rem;
        }

        .featured-section {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .featured-title {
          margin: 0 0 1rem 0;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .featured-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .featured-links a {
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          line-height: 1.4;
          transition: all 0.3s ease;
          cursor: pointer;
          padding: 0.5rem;
          border-left: 3px solid transparent;
          padding-left: 0.75rem;
          display: block;
        }

        .featured-links a:hover {
          border-left-color: white;
          transform: translateX(4px);
        }

        /* Ticket Section */
        .ticket-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .ticket-container {
          width: 100%;
        }

        .section-title {
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0 0 2.5rem 0;
          color: #1a1a2e;
        }

        .topics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .topic-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .topic-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          transform: translateY(-4px);
        }

        .topic-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
        }

        .topic-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #0ea5a5 0%, #159e88 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          font-weight: 700;
        }

        .topic-header h3 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 700;
          color: #1a1a2e;
        }

        .topic-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .topic-links a {
          color: #0ea5a5;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          cursor: pointer;
          padding: 0.5rem 0.75rem;
          border-left: 3px solid transparent;
          border-radius: 4px;
          display: block;
        }

        .topic-links a:hover {
          color: #159e88;
          border-left-color: #0ea5a5;
          background: #f0f9f9;
          transform: translateX(4px);
        }

        /* Footer */
        .footer {
          background: #1a1a2e;
          color: #e0e0e0;
          padding: 3rem 2rem;
          margin-top: 4rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-section h4 {
          margin: 0;
          font-size: 1rem;
          font-weight: 700;
          color: white;
        }

        .footer-section a {
          color: #e0e0e0;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          cursor: pointer;
          display: block;
        }

        .footer-section a:hover {
          color: #0ea5a5;
          transform: translateX(4px);
        }

        .footer-section p {
          margin: 0;
          font-size: 0.9rem;
          color: #999;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .featured-section {
            grid-column: 1 / -1;
          }

          .topics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            flex-wrap: wrap;
            padding: 0.75rem 1rem;
            gap: 1rem;
          }

          .navbar-links {
            gap: 1rem;
            flex: 1 1 100%;
            order: 3;
          }

          .navbar-buttons {
            gap: 0.75rem;
          }

          .hero-section {
            padding: 2rem 1rem;
          }

          .hero-title {
            font-size: 1.5rem;
          }

          .search-form {
            flex-direction: column;
          }

          .search-input {
            width: 100%;
            min-width: unset;
          }

          .search-btn {
            width: 100%;
          }

          .ticket-section {
            padding: 2rem 1rem;
          }

          .section-title {
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
          }

          .topics-grid {
            grid-template-columns: 1fr;
          }

          .footer {
            padding: 2rem 1rem;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </>
  )
}
