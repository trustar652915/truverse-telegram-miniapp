import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Truverse</h1>
      <p style={styles.subtitle}>
        Play games. Watch content. Shop. Inside Telegram.
      </p>

    <div style={styles.grid}>
  <button style={styles.button} onClick={() => handleButtonClick("games")}>🎮 Games</button>
  <button style={styles.button} onClick={() => handleButtonClick("music")}>🎵 Music</button>
  <button style={styles.button} onClick={() => handleButtonClick("video")}>🎥 Video</button>
  <button style={styles.button} onClick={() => handleButtonClick("shop")}>🛍 Shop</button>
</div>


const handleButtonClick = (type) => {
  switch (type) {
    case "games":
      // Navigate to games page or open a modal
      break;
    case "music":
      // Navigate to music page or open a modal
      break;
    case "video":
      // Navigate to video page or open a modal
      break;
    case "shop":
      // Open Shopify store in a new tab or within the mini app
      window.open("https://yourshopifystore.com", "_blank");
      break;
    default:
      break;
  }
};


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

  npm install @tonconnect/sdk

  import { TonConnect } from "@tonconnect/sdk";
import { useState } from "react";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  const connectTON = async () => {
    const tonConnect = new TonConnect();
    await tonConnect.connect();
    setWalletConnected(true);
    // You can now use tonConnect to send/receive TON payments
  };

  return (
    <div style={styles.container}>
      {/* ... */}
      <button style={styles.button} onClick={connectTON}>
        {walletConnected ? "Wallet Connected" : "Connect TON Wallet"}
      </button>
      {/* ... */}
    </div>
  );
}

// Example: Fetch products from Shopify Storefront API
const fetchProducts = async () => {
  const res = await fetch("https://yourshopifystore.myshopify.com/api/2023-01/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": "YOUR_STOREFRONT_TOKEN",
    },
    body: JSON.stringify({
      query: `
        {
          products(first: 10) {
            edges {
              node {
                id
                title
                description
                images(first: 1) { edges { node { src } } }
              }
            }
          }
        }
      `,
    }),
  });
  const data = await res.json();
  // Render products in your UI
};


