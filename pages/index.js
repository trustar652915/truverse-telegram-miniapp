import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      webApp.ready();
      setUser(webApp.initDataUnsafe.user);
    }
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Truverse</h1>
      <p style={styles.subtitle}>
        Play games. Watch content. Shop. Inside Telegram.
      </p>
      {user ? (
        <p>Hello, {user.first_name}!</p>
      ) : (
        <p>Loading Telegram user info...</p>
      )}
      <div style={styles.grid}>
        <button style={styles.button}>🎮 Games</button>
        <button style={styles.button}>🎵 Music</button>
        <button style={styles.button}>🎥 Video</button>
        <button style={styles.button}>🛍 Shop</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0b0b0b",
    color: "#ffffff",
    padding: "24px",
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "16px",
    opacity: 0.7,
    marginBottom: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  button: {
    padding: "20px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "none",
    background: "#1f1f1f",
    color: "#fff",
    cursor: "pointer",
  },
};
