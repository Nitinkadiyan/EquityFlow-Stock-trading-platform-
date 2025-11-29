import React from 'react';

export default function HeroSection() {
   return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">We are building India's most investor-friendly trading experience.</h1>
        <p className="hero-subtitle">
          From powerful tools to transparent pricing, EquityFlow is designed to help every Indian invest smarter.
        </p>
        <div className="hero-divider"></div>
      </section>

      {/* Two Column Section */}
      <section className="content-section">
        <div className="content-left">
          <p className="content-paragraph">
            At EquityFlow, we started with one simple vision — to make investing in India effortless, transparent, and
            accessible for everyone.
          </p>
          <p className="content-paragraph">
            The Indian markets are evolving faster than ever, yet most platforms still make trading complicated,
            expensive, or overwhelming for beginners. We wanted to change that.
          </p>
          <p className="content-paragraph">
            So we built EquityFlow — a clean, fast, modern platform where investors can focus purely on making better
            decisions, not fighting with complex interfaces.
          </p>
          <p className="content-paragraph">
            Every feature, every design decision, and every update is guided by one principle: simplicity without
            compromise. We believe investing should empower you, not intimidate you.
          </p>
        </div>

        <div className="content-right">
          <div className="features-header">EquityFlow is built to bridge that gap.</div>
          <ul className="features-list">
            <li className="feature-item">
              <span className="checkmark">✓</span>
              <span className="feature-text">Real-time market data</span>
            </li>
            <li className="feature-item">
              <span className="checkmark">✓</span>
              <span className="feature-text">Smooth order execution</span>
            </li>
            <li className="feature-item">
              <span className="checkmark">✓</span>
              <span className="feature-text">Beginner-friendly insights</span>
            </li>
            <li className="feature-item">
              <span className="checkmark">✓</span>
              <span className="feature-text">Powerful tools for serious traders</span>
            </li>
            <li className="feature-item">
              <span className="checkmark">✓</span>
              <span className="feature-text">Zero clutter. Zero confusion. Just clarity.</span>
            </li>
          </ul>

          {/* Accent Box */}
          <div className="accent-box">
            <p>
              <span className="accent-highlight">Rainmatter</span>, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian capital markets ecosystem responsibly.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-container {
          background-color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          padding: 120px 40px 80px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #0A1A2F;
          line-height: 1.3;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #555555;
          line-height: 1.6;
          margin-bottom: 48px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #2BC0A4, transparent);
          max-width: 300px;
          margin: 0 auto;
        }

        /* Content Section */
        .content-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 40px;
        }

        .content-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .content-paragraph {
          font-size: 16px;
          color: #555555;
          line-height: 1.8;
          letter-spacing: 0.3px;
        }

        .content-right {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .features-header {
          font-size: 18px;
          font-weight: 600;
          color: #0A1A2F;
          margin-bottom: 12px;
        }

        .features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 16px;
          color: #555555;
          line-height: 1.6;
        }

        .checkmark {
          color: #2BC0A4;
          font-weight: 700;
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-text {
          flex: 1;
        }

        .accent-box {
          background: linear-gradient(135deg, rgba(43, 192, 164, 0.08) 0%, rgba(10, 26, 47, 0.04) 100%);
          border-left: 4px solid #2BC0A4;
          padding: 24px;
          border-radius: 8px;
          margin-top: 12px;
        }

        .accent-box p {
          font-size: 15px;
          color: #555555;
          line-height: 1.7;
        }

        .accent-highlight {
          color: #2BC0A4;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 24px 60px;
          }

          .hero-title {
            font-size: 32px;
            margin-bottom: 20px;
          }

          .hero-subtitle {
            font-size: 16px;
            margin-bottom: 40px;
          }

          .content-section {
            grid-template-columns: 1fr;
            gap: 60px;
            padding: 60px 24px;
          }

          .content-paragraph {
            font-size: 15px;
          }

          .feature-item {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 60px 16px 40px;
          }

          .hero-title {
            font-size: 24px;
            margin-bottom: 16px;
          }

          .hero-subtitle {
            font-size: 14px;
            margin-bottom: 32px;
          }

          .content-section {
            padding: 40px 16px;
            gap: 40px;
          }

          .content-paragraph {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}