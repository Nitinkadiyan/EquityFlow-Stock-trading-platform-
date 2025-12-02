"use client"

import { useState } from "react"

export default function Hero() {
  const [isYearly, setIsYearly] = useState(false)

  const pricingTiers = [
    {
      title: "Starter",
      tagline: "Perfect for beginners",
      monthlyPrice: "0",
      yearlyPrice: "0",
      features: [
        "Free equity delivery",
        "Basic charting tools",
        "Market news & alerts",
        "10 watchlists",
        "Mobile app access",
      ],
      buttonText: "Get Started",
      buttonType: "primary",
      isPopular: false,
    },
    {
      title: "Active Trader",
      tagline: "For serious traders",
      monthlyPrice: "499",
      yearlyPrice: "4990",
      features: [
        "Intraday & F&O trades",
        "Advanced charting",
        "Priority support",
        "Unlimited watchlists",
        "API access",
        "Custom alerts",
      ],
      buttonText: "Choose Plan",
      buttonType: "primary",
      isPopular: true,
    },
    {
      title: "Pro",
      tagline: "Enterprise solutions",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      features: [
        "Everything in Active Trader",
        "Dedicated account manager",
        "Custom integrations",
        "Algo trading suite",
        "White-label options",
        "Priority onboarding",
      ],
      buttonText: "Contact Sales",
      buttonType: "secondary",
      isPopular: false,
    },
  ]

  const features = [
    { name: "Free Equity Delivery", starter: true, active: true, pro: true },
    { name: "Intraday Trading", starter: false, active: true, pro: true },
    { name: "F&O Trading", starter: false, active: true, pro: true },
    { name: "Direct Mutual Funds", starter: false, active: true, pro: true },
    { name: "Advanced Charts", starter: false, active: true, pro: true },
    { name: "API Access", starter: false, active: false, pro: true },
    { name: "24/7 Support", starter: false, active: false, pro: true },
  ]

  const faqs = [
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or downgrade your plan anytime. Changes take effect from the next billing cycle.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, all costs are transparent and displayed upfront. You only pay for what you choose.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, and net banking for easy transactions.",
    },
    {
      question: "Is there a cancellation fee?",
      answer: "No cancellation fees. You can cancel anytime with immediate effect.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied.",
    },
  ]

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          color: #333;
          background-color: #f9f9f9;
        }

        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        /* Hero Section */
        .hero {
          text-align: center;
          margin-bottom: 60px;
        }

        .hero h1 {
          font-size: 48px;
          font-weight: 700;
          color: #0A1A2F;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .hero p {
          font-size: 18px;
          color: #666;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        /* Metrics Row */
        .metrics {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .metric {
          text-align: center;
        }

        .metric-value {
          font-size: 28px;
          font-weight: 700;
          color: #2BC0A4;
          margin-bottom: 8px;
        }

        .metric-label {
          font-size: 14px;
          color: #666;
        }

        .metric-divider {
          width: 1px;
          height: 50px;
          background-color: #ddd;
        }

        /* Billing Toggle */
        .billing-toggle-container {
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
        }

        .billing-toggle {
          display: flex;
          background-color: #f0f0f0;
          border-radius: 30px;
          padding: 4px;
          gap: 8px;
        }

        .toggle-btn {
          padding: 10px 24px;
          border: none;
          background-color: transparent;
          color: #666;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border-radius: 26px;
          transition: all 0.3s ease;
        }

        .toggle-btn.active {
          background-color: #2BC0A4;
          color: white;
        }

        /* Pricing Cards Grid */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 80px;
        }

        .pricing-card {
          background: white;
          border-radius: 12px;
          padding: 40px 30px;
          border: 1px solid #e0e0e0;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .pricing-card:hover {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }

        .pricing-card.popular {
          border-color: #2BC0A4;
          box-shadow: 0 10px 40px rgba(43, 192, 164, 0.15);
          transform: scale(1.05);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #2BC0A4;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .card-title {
          font-size: 24px;
          font-weight: 700;
          color: #0A1A2F;
          margin-bottom: 8px;
          margin-top: 15px;
        }

        .card-tagline {
          font-size: 14px;
          color: #666;
          margin-bottom: 24px;
        }

        .card-price {
          font-size: 48px;
          font-weight: 700;
          color: #2BC0A4;
          margin-bottom: 8px;
        }

        .card-price-label {
          font-size: 14px;
          color: #666;
          margin-bottom: 32px;
        }

        .card-features {
          list-style: none;
          margin-bottom: 32px;
          flex-grow: 1;
        }

        .card-features li {
          padding: 12px 0;
          color: #444;
          font-size: 14px;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
        }

        .card-features li:before {
          content: '✓';
          color: #2BC0A4;
          font-weight: bold;
          margin-right: 12px;
          font-size: 16px;
        }

        .card-button {
          padding: 14px 24px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .btn-primary {
          background-color: #159E88;
          color: white;
        }

        .btn-primary:hover {
          background-color: #0d7a68;
          box-shadow: 0 4px 12px rgba(21, 158, 136, 0.3);
        }

        .btn-secondary {
          background-color: white;
          color: #0A1A2F;
          border: 2px solid #0A1A2F;
        }

        .btn-secondary:hover {
          background-color: #f5f5f5;
        }

        /* Feature Comparison */
        .feature-comparison {
          margin-bottom: 80px;
        }

        .comparison-title {
          font-size: 32px;
          font-weight: 700;
          color: #0A1A2F;
          text-align: center;
          margin-bottom: 40px;
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .comparison-table th,
        .comparison-table td {
          padding: 20px;
          text-align: center;
          font-size: 14px;
        }

        .comparison-table th {
          background-color: #0A1A2F;
          color: white;
          font-weight: 700;
        }

        .comparison-table td:first-child {
          text-align: left;
          background-color: #f9f9f9;
          color: #444;
          font-weight: 500;
        }

        .comparison-table tr:nth-child(even) td:first-child {
          background-color: #ffffff;
        }

        .check-icon {
          color: #2BC0A4;
          font-size: 20px;
          font-weight: bold;
        }

        /* FAQ Section */
        .faq-section {
          margin-bottom: 80px;
        }

        .faq-title {
          font-size: 32px;
          font-weight: 700;
          color: #0A1A2F;
          text-align: center;
          margin-bottom: 40px;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          margin-bottom: 16px;
          overflow: hidden;
        }

        .faq-question {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          color: #0A1A2F;
          transition: background-color 0.3s ease;
          user-select: none;
        }

        .faq-question:hover {
          background-color: #f5f5f5;
        }

        .faq-toggle {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2BC0A4;
          font-weight: bold;
        }

        .faq-answer {
          padding: 0 20px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          color: #666;
          line-height: 1.6;
        }

        .faq-answer.open {
          max-height: 500px;
          padding: 20px;
        }

        /* Trust Row */
        .trust-section {
          text-align: center;
          margin-bottom: 80px;
          padding: 40px 20px;
          background-color: white;
          border-radius: 12px;
        }

        .trust-text {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
        }

        .logos-row {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .logo-placeholder {
          width: 100px;
          height: 50px;
          background-color: #f0f0f0;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .logo-placeholder:hover {
          opacity: 0.6;
        }

        /* Final CTA */
        .final-cta {
          border-top: 1px solid #e0e0e0;
          padding-top: 60px;
          text-align: center;
        }

        .final-cta h2 {
          font-size: 36px;
          font-weight: 700;
          color: #0A1A2F;
          margin-bottom: 24px;
        }

        .cta-button {
          padding: 16px 48px;
          background-color: #159E88;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background-color: #0d7a68;
          box-shadow: 0 6px 20px rgba(21, 158, 136, 0.3);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .pricing-card.popular {
            grid-column: 1 / -1;
            max-width: 500px;
            margin: 0 auto;
          }

          .hero h1 {
            font-size: 36px;
          }

          .comparison-table th,
          .comparison-table td {
            padding: 16px 12px;
            font-size: 13px;
          }
        }

        @media (max-width: 768px) {
          .pricing-container {
            padding: 40px 16px;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .pricing-card.popular {
            grid-column: unset;
            transform: scale(1);
          }

          .hero h1 {
            font-size: 28px;
            margin-bottom: 12px;
          }

          .hero p {
            font-size: 16px;
            margin-bottom: 32px;
          }

          .metrics {
            gap: 24px;
          }

          .metric-value {
            font-size: 24px;
          }

          .metric-divider {
            display: none;
          }

          .comparison-table {
            font-size: 12px;
          }

          .comparison-table th,
          .comparison-table td {
            padding: 12px 8px;
          }

          .faq-title,
          .comparison-title {
            font-size: 24px;
          }

          .final-cta h2 {
            font-size: 24px;
          }

          .logos-row {
            gap: 20px;
          }

          .logo-placeholder {
            width: 80px;
            height: 40px;
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .pricing-container {
            padding: 30px 12px;
          }

          .hero h1 {
            font-size: 24px;
          }

          .hero p {
            font-size: 14px;
          }

          .metrics {
            flex-direction: column;
            gap: 16px;
          }

          .pricing-card {
            padding: 28px 20px;
          }

          .card-title {
            font-size: 20px;
          }

          .card-price {
            font-size: 36px;
          }

          .card-features li {
            font-size: 13px;
          }

          .billing-toggle {
            flex-direction: column;
          }

          .toggle-btn {
            padding: 12px 20px;
          }
        }
      `}</style>

      <div className="pricing-container mt-5 ">
        {/* Hero */}
        <section className="hero mt-5">
          <h1>Pricing Built for Every Trader</h1>
          <p>Simple, transparent pricing — no surprise fees. Choose what fits your trading style.</p>
        </section>

        {/* Metrics */}
        <div className="metrics">
          <div className="metric">
            <div className="metric-value">₹2.5B+</div>
            <div className="metric-label">Traded Daily</div>
          </div>
          <div className="metric-divider"></div>
          <div className="metric">
            <div className="metric-value">500K+</div>
            <div className="metric-label">Active Traders</div>
          </div>
          <div className="metric-divider"></div>
          <div className="metric">
            <div className="metric-value">99.9%</div>
            <div className="metric-label">Uptime</div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="billing-toggle-container">
          <div className="billing-toggle">
            <button className={`toggle-btn ${!isYearly ? "active" : ""}`} onClick={() => setIsYearly(false)}>
              Monthly
            </button>
            <button className={`toggle-btn ${isYearly ? "active" : ""}`} onClick={() => setIsYearly(true)}>
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingTiers.map((tier, idx) => (
            <div key={idx} className={`pricing-card ${tier.isPopular ? "popular" : ""}`}>
              {tier.isPopular && <div className="popular-badge">Most Popular</div>}
              <h3 className="card-title">{tier.title}</h3>
              <p className="card-tagline">{tier.tagline}</p>
              <div className="card-price">
                {tier.monthlyPrice === "Custom" ? "Custom" : `₹${isYearly ? tier.yearlyPrice : tier.monthlyPrice}`}
              </div>
              <p className="card-price-label">
                {tier.monthlyPrice === "Custom" ? "Contact for pricing" : isYearly ? "per year" : "per month"}
              </p>
              <ul className="card-features">
                {tier.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className={`card-button btn-${tier.buttonType}`}>{tier.buttonText}</button>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <section className="feature-comparison">
          <h2 className="comparison-title">Feature Comparison</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>Starter</th>
                <th>Active Trader</th>
                <th>Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx}>
                  <td>{feature.name}</td>
                  <td>{feature.starter ? <span className="check-icon">✓</span> : "—"}</td>
                  <td>{feature.active ? <span className="check-icon">✓</span> : "—"}</td>
                  <td>{feature.pro ? <span className="check-icon">✓</span> : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <span>{faq.question}</span>
                  <span className="faq-toggle">{openFaq === idx ? "−" : "+"}</span>
                </div>
                <div className={`faq-answer ${openFaq === idx ? "open" : ""}`}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="trust-section">
          <p className="trust-text">Trusted by 500K+ traders and top Indian brokers</p>
          <div className="logos-row">
            <div className="logo-placeholder">NSE</div>
            <div className="logo-placeholder">BSE</div>
            <div className="logo-placeholder">NCDEX</div>
            <div className="logo-placeholder">ICEX</div>
            <div className="logo-placeholder">MCXSX</div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <h2>Ready to trade smarter?</h2>
          <button className="cta-button">Create New Account</button>
        </section>
      </div>
    </main>
  )
}
