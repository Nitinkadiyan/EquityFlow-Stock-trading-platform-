import React from 'react';

export default function Hero1() {
   const handleExploreDashboard = () => {
  if (document.cookie.includes("token")) {
    // user is logged in
    window.location.href = "https://equityflow-stock-trading-platform-svt3.onrender.com";
  } else {
    // user NOT logged in
    window.location.href = "/signup";
    alert("To explore Stocks, You must create an account");

  }
};

  const styles = `
    .hero-section {
      min-height: 100vh;
      margin-top: 64px;
      background: linear-gradient(135deg, #0a1a2f 0%, #0d2740 50%, #2bc0a4 100%);
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-background-lines {
      position: absolute;
      inset: 0;
      opacity: 0.08;
      pointer-events: none;
    }

    .hero-blur-top {
      position: absolute;
      top: 80px;
      left: 40px;
      width: 384px;
      height: 384px;
      background-color: rgba(43, 192, 164, 0.3);
      border-radius: 50%;
      filter: blur(120px);
      pointer-events: none;
    }

    .hero-blur-bottom {
      position: absolute;
      bottom: 80px;
      right: 40px;
      width: 384px;
      height: 384px;
      background-color: rgba(43, 192, 164, 0.3);
      border-radius: 50%;
      filter: blur(120px);
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 1024px;
      margin: 0 auto;
      padding: 48px 24px;
      text-align: center;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 9999px;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-bottom: 32px;
    }

    .hero-badge-text {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }

    .hero-badge-dot {
      width: 6px;
      height: 6px;
      background-color: #2bc0a4;
      border-radius: 50%;
    }

    .hero-h1 {
      font-size: 56px;
      font-weight: 700;
      color: white;
      margin-bottom: 24px;
      line-height: 1.2;
      letter-spacing: -1px;
    }

    .hero-subtext {
      font-size: 18px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 48px;
      line-height: 1.6;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }

    .btn-primary {
      padding: 16px 32px;
      font-size: 16px;
      font-weight: 600;
      color: white;
      background-color: #0d7765ff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 8px 16px rgba(43, 192, 164, 0.3);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .btn-primary:hover {
      background-color: #0b6f5eff;
      box-shadow: 0 12px 24px rgba(58, 200, 174, 0.4);
      transform: translateY(-2px);
    }

    .btn-secondary {
      padding: 16px 32px;
      font-size: 16px;
      font-weight: 600;
      color: white;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-secondary:hover {
      background-color: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      margin-top: 96px;
      padding-top: 48px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-stat-item {
      text-align: center;
    }

    .hero-stat-value {
      font-size: 32px;
      font-weight: 700;
      color: white;
      margin-bottom: 8px;
    }

    .hero-stat-label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.7);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    @media (max-width: 768px) {
      .hero-h1 {
        font-size: 36px;
      }

      .hero-subtext {
        font-size: 16px;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .btn-primary, .btn-secondary {
        width: 100%;
      }

      .hero-stats {
        grid-template-columns: 1fr;
        gap: 24px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className="hero-section">
        <div className="hero-blur-top" />
        <div className="hero-blur-bottom" />

        <div className="hero-background-lines">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                height: '1px',
                backgroundColor: 'white',
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">Real-time market analytics powered by AI</span>
          </div>

          <h1 className="hero-h1">
            The Modern Stock Trading Platform.
          </h1>

          <p className="hero-subtext">
            Placeholder for your exact subtext. Please provide the exact text from your image.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Get Started
              <span style={{ fontSize: '18px' }}>→</span>
            </button>
            <button className="btn-secondary"onClick={handleExploreDashboard}>
              Explore Markets
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="hero-stat-value">$2.5B+</div>
              <div className="hero-stat-label">Trading Volume</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-value">500K+</div>
              <div className="hero-stat-label">Active Traders</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-value">99.9%</div>
              <div className="hero-stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
