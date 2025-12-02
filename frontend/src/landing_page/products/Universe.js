export default function Universe() {
  const partnerLogos = [
    { name: "Alpha Markets", initials: "AM" },
    { name: "TradePro", initials: "TP" },
    { name: "InvestHub", initials: "IH" },
    { name: "FinanceFlow", initials: "FF" },
    { name: "SecureVault", initials: "SV" },
    { name: "QuotePulse", initials: "QP" },
  ]

  return (
    <div style={styles.container}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .showcase-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #ffffff 0%, #f0faf8 100%);
          min-height: 100vh;
          padding: 60px 20px;
        }

        .hero-section {
          text-align: center;
          margin-bottom: 80px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #0A1A2F;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .hero-subtitle {
          font-size: 18px;
          color: #6b7280;
          font-weight: 400;
          line-height: 1.6;
        }

        .company-showcase {
          background: white;
          border-radius: 16px;
          padding: 60px 40px;
          margin: 0 auto 80px;
          max-width: 900px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          justify-items: center;
        }

        .company-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .company-logo {
          width: 100px;
          height: 100px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 42px;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .company-logo:hover {
          transform: scale(1.05);
        }

        .logo-equity {
          background: linear-gradient(135deg, #2BC0A4 0%, #159E88 100%);
        }

        .logo-partner {
          background: linear-gradient(135deg, #0A1A2F 0%, #1a3a4a 100%);
        }

        .company-name {
          font-size: 24px;
          font-weight: 700;
          color: #0A1A2F;
          margin-bottom: 8px;
        }

        .company-desc {
          font-size: 14px;
          color: #9ca3af;
          line-height: 1.5;
        }

        .partners-section {
          margin: 0 auto 80px;
          max-width: 1000px;
        }

        .section-title {
          text-align: center;
          font-size: 28px;
          font-weight: 700;
          color: #0A1A2F;
          margin-bottom: 12px;
        }

        .section-subtitle {
          text-align: center;
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 50px;
        }

        .logos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .logo-item {
          background: white;
          border-radius: 12px;
          padding: 32px 20px;
          text-align: center;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .logo-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          border-color: #2BC0A4;
        }

        .logo-placeholder {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #2BC0A4 0%, #159E88 100%);
          border-radius: 8px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 700;
          color: white;
        }

        .logo-name {
          font-size: 14px;
          font-weight: 600;
          color: #0A1A2F;
        }

        .cta-section {
          background: linear-gradient(135deg, #0A1A2F 0%, #1a3a4a 100%);
          border-radius: 16px;
          padding: 80px 40px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          box-shadow: 0 8px 32px rgba(10, 26, 47, 0.2);
        }

        .cta-title {
          font-size: 36px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .cta-subtitle {
          font-size: 16px;
          color: #d1d5db;
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          background: linear-gradient(135deg, #2BC0A4 0%, #159E88 100%);
          color: white;
          border: none;
          padding: 16px 48px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(43, 192, 164, 0.3);
          letter-spacing: 0.5px;
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 24px rgba(43, 192, 164, 0.4);
        }

        .cta-button:active {
          transform: scale(0.98);
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 36px;
          }

          .hero-subtitle {
            font-size: 16px;
          }

          .company-showcase {
            grid-template-columns: 1fr;
            padding: 40px 24px;
            gap: 32px;
          }

          .logos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .logo-item {
            padding: 24px 16px;
          }

          .cta-section {
            padding: 60px 24px;
          }

          .cta-title {
            font-size: 28px;
          }

          .cta-subtitle {
            font-size: 15px;
          }

          .section-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .showcase-container {
            padding: 40px 16px;
          }

          .hero-title {
            font-size: 28px;
          }

          .hero-subtitle {
            font-size: 14px;
          }

          .company-showcase {
            padding: 32px 16px;
            gap: 24px;
          }

          .company-logo {
            width: 80px;
            height: 80px;
            font-size: 36px;
          }

          .company-name {
            font-size: 20px;
          }

          .logos-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .cta-section {
            padding: 40px 20px;
          }

          .cta-title {
            font-size: 24px;
          }

          .cta-button {
            padding: 14px 32px;
            font-size: 15px;
            width: 100%;
          }

          .section-title {
            font-size: 20px;
          }

          .section-subtitle {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="showcase-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">EquityFlow Universe</h1>
          <p className="hero-subtitle">
            Extend your trading and investment experience with our trusted partner ecosystem
          </p>
        </div>

        {/* Company Showcase */}
        <div className="company-showcase">
          <div className="company-card">
            <div className="company-logo logo-equity">EF</div>
            <h3 className="company-name">EquityFlow</h3>
            <p className="company-desc">Advanced trading platform with real-time analytics and seamless execution</p>
          </div>

          <div className="company-card">
            <div className="company-logo logo-partner">FI</div>
            <h3 className="company-name">FinvestIQ</h3>
            <p className="company-desc">Intelligent portfolio management and AI-driven market insights</p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="partners-section">
          <h2 className="section-title">Trusted by Leading Brokers</h2>
          <p className="section-subtitle">Seamless integration with India's most reliable financial platforms</p>

          <div className="logos-grid">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="logo-item">
                <div className="logo-placeholder">{logo.initials}</div>
                <p className="logo-name">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2 className="cta-title">Join India's Fastest Growing Trading Platform</h2>
          <p className="cta-subtitle">Simple onboarding, powerful tools, and a seamless trading experience.</p>
          <button className="cta-button">Sign Up Now</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
  },
}
