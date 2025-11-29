"use client"

import { useState } from "react"

export default function Team() {
  const [hoveredId, setHoveredId] = useState(null)

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Arjun Sharma",
      role: "CEO & Founder",
      description: "Building India's fintech future with a vision for accessible investing.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
    },
    {
      id: 2,
      name: "Priya Desai",
      role: "CTO",
      description: "Tech architect passionate about creating seamless trading experiences.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    },
    {
      id: 3,
      name: "Vikram Patel",
      role: "Lead Engineer",
      description: "Building robust systems that power millions of transactions daily.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikram",
    },
    {
      id: 4,
      name: "Neha Iyer",
      role: "Product Designer",
      description: "Creating intuitive interfaces that make trading feel effortless.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=neha",
    },
    {
      id: 5,
      name: "Rohan Verma",
      role: "Trading Analyst",
      description: "Market expert ensuring real-time data accuracy and insights.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rohan",
    },
    {
      id: 6,
      name: "Aisha Khan",
      role: "Customer Success Lead",
      description: "Dedicated to ensuring every investor gets the support they need.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=aisha",
    },
  ]

  const leadershipMembers = [
    {
      id: 101,
      name: "Arjun Sharma",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in fintech, committed to democratizing investment in India.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
    },
    {
      id: 102,
      name: "Priya Desai",
      role: "CTO & Co-Founder",
      description: "Technology pioneer building scalable platforms for millions of users.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    },
  ]

  return (
    <div className="people-container">
      {/* Hero Section */}
      <section className="people-hero">
        <h1 className="people-hero-title">Meet the People Behind EquityFlow.</h1>
        <p className="people-hero-subtitle">
          A dedicated team on a mission to make investing simpler, smarter, and accessible for every Indian.
        </p>
        <div className="people-hero-divider"></div>
      </section>

      {/* Team Grid */}
      <section className="team-section">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-card"
              style={{
                transform: hoveredId === member.id ? "translateY(-8px)" : "translateY(0)",
                boxShadow:
                  hoveredId === member.id ? "0 20px 40px rgba(10, 26, 47, 0.12)" : "0 4px 12px rgba(10, 26, 47, 0.08)",
              }}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="team-card-image-wrapper">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="team-card-image" />
              </div>
              <h3 className="team-card-name">{member.name}</h3>
              <p className="team-card-role">{member.role}</p>
              <p className="team-card-description">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <h2 className="leadership-title">Leadership</h2>
        <div className="leadership-grid">
          {leadershipMembers.map((member) => (
            <div
              key={member.id}
              className="leadership-card"
              style={{
                transform: hoveredId === member.id ? "translateY(-8px)" : "translateY(0)",
                boxShadow:
                  hoveredId === member.id ? "0 20px 40px rgba(10, 26, 47, 0.12)" : "0 4px 12px rgba(10, 26, 47, 0.08)",
              }}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="leadership-card-image-wrapper">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="leadership-card-image" />
              </div>
              <h3 className="leadership-card-name">{member.name}</h3>
              <p className="leadership-card-role">{member.role}</p>
              <p className="leadership-card-description">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .people-container {
          background-color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        /* Hero Section */
        .people-hero {
          text-align: center;
          padding: 120px 40px 80px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .people-hero-title {
          font-size: 48px;
          font-weight: 700;
          color: #0A1A2F;
          line-height: 1.3;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
        }

        .people-hero-subtitle {
          font-size: 20px;
          color: #555555;
          line-height: 1.6;
          margin-bottom: 48px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .people-hero-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #2BC0A4, transparent);
          max-width: 300px;
          margin: 0 auto;
        }

        /* Team Section */
        .team-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 40px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }

        .team-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
          cursor: pointer;
          border: 1px solid rgba(10, 26, 47, 0.06);
        }

        .team-card-image-wrapper {
          margin-bottom: 24px;
          width: 120px;
          height: 120px;
          margin-left: auto;
          margin-right: auto;
          background: linear-gradient(135deg, rgba(43, 192, 164, 0.1) 0%, rgba(10, 26, 47, 0.05) 100%);
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .team-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-card-name {
          font-size: 18px;
          font-weight: 600;
          color: #0A1A2F;
          margin-bottom: 8px;
        }

        .team-card-role {
          font-size: 14px;
          color: #2BC0A4;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .team-card-description {
          font-size: 14px;
          color: #666666;
          line-height: 1.6;
        }

        /* Leadership Section */
        .leadership-section {
          background: linear-gradient(135deg, rgba(43, 192, 164, 0.05) 0%, rgba(10, 26, 47, 0.02) 100%);
          padding: 80px 40px;
          max-width: 100%;
        }

        .leadership-title {
          font-size: 36px;
          font-weight: 700;
          color: #0A1A2F;
          text-align: center;
          margin-bottom: 60px;
          letter-spacing: -0.5px;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 48px;
          max-width: 900px;
          margin: 0 auto;
        }

        .leadership-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 40px 32px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
          cursor: pointer;
          border: 1px solid rgba(10, 26, 47, 0.06);
        }

        .leadership-card-image-wrapper {
          margin-bottom: 28px;
          width: 140px;
          height: 140px;
          margin-left: auto;
          margin-right: auto;
          background: linear-gradient(135deg, rgba(43, 192, 164, 0.1) 0%, rgba(10, 26, 47, 0.05) 100%);
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .leadership-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .leadership-card-name {
          font-size: 20px;
          font-weight: 600;
          color: #0A1A2F;
          margin-bottom: 8px;
        }

        .leadership-card-role {
          font-size: 14px;
          color: #2BC0A4;
          font-weight: 600;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .leadership-card-description {
          font-size: 15px;
          color: #666666;
          line-height: 1.7;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .leadership-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .people-hero {
            padding: 80px 24px 60px;
          }

          .people-hero-title {
            font-size: 32px;
            margin-bottom: 20px;
          }

          .people-hero-subtitle {
            font-size: 16px;
            margin-bottom: 40px;
          }

          .team-section {
            padding: 60px 24px;
          }

          .team-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .leadership-section {
            padding: 60px 24px;
          }

          .leadership-title {
            font-size: 28px;
            margin-bottom: 48px;
          }

          .leadership-grid {
            gap: 32px;
          }

          .team-card,
          .leadership-card {
            padding: 28px 20px;
          }

          .team-card-image-wrapper {
            width: 100px;
            height: 100px;
          }

          .leadership-card-image-wrapper {
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 480px) {
          .people-hero {
            padding: 60px 16px 40px;
          }

          .people-hero-title {
            font-size: 24px;
            margin-bottom: 16px;
          }

          .people-hero-subtitle {
            font-size: 14px;
            margin-bottom: 32px;
          }

          .team-section {
            padding: 40px 16px;
          }

          .team-grid {
            gap: 24px;
          }

          .team-card-name {
            font-size: 16px;
          }

          .team-card-description {
            font-size: 13px;
          }

          .leadership-section {
            padding: 40px 16px;
          }

          .leadership-title {
            font-size: 22px;
            margin-bottom: 36px;
          }

          .leadership-card-name {
            font-size: 18px;
          }

          .leadership-card-description {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}
