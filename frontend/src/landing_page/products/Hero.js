export default function Hero() {
  return (
    <>
      <section style={styles.heroContainer}>
        <div style={styles.heroContent}>
          <h1 style={styles.heading}>Powerful Trading Technology for Every Investor.</h1>
          <p style={styles.subtext}>Discover fast, intuitive, and reliable platforms built for modern trading.</p>
        </div>
      </section>
      <div style={styles.divider} />
     
    </>
  )
}

const styles = {
  heroContainer: {
    width: "100%",
    padding: "80px 20px",
    background: "linear-gradient(135deg, rgba(43, 192, 164, 0.08) 0%, rgba(10, 26, 47, 0.04) 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "400px",
    boxSizing: "border-box",
  },
  heroContent: {
    maxWidth: "800px",
    textAlign: "center",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#0A1A2F",
    margin: "0 0 20px 0",
    lineHeight: "1.3",
    fontFamily: '"Inter", "Segoe UI", sans-serif',
  },
  subtext: {
    fontSize: "18px",
    color: "#555",
    fontWeight: "400",
    margin: "0",
    lineHeight: "1.6",
    fontFamily: '"Inter", "Segoe UI", sans-serif',
  },
  divider: {
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, transparent 0%, #2BC0A4 50%, transparent 100%)",
    margin: "0",
  },
  "@media (maxWidth: 768px)": {
    heroContainer: {
      padding: "60px 16px",
      minHeight: "300px",
    },
    heading: {
      fontSize: "32px",
    },
    subtext: {
      fontSize: "16px",
    },
  },
  "@media (maxWidth: 480px)": {
    heroContainer: {
      padding: "40px 16px",
      minHeight: "250px",
    },
    heading: {
      fontSize: "24px",
    },
    subtext: {
      fontSize: "14px",
    },
  },
}
