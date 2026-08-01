import { useState } from "react";
import Form from "./Form";

function Home() {
  return <>
    <div style={{ 
      padding: "2rem", 
      textAlign: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{ 
        color: "#fff", 
        marginBottom: "1rem",
        fontSize: "3rem",
        fontWeight: "bold",
        textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
      }}>Welcome Home!</h1>
      <p style={{ 
        color: "#f0f0f0", 
        fontSize: "1.2rem",
        maxWidth: "500px",
        lineHeight: "1.6"
      }}>You have successfully logged in.</p>
    </div>
  </>
}

export default function App() {
  let [loggedIn, setLoggedIn] = useState(false);

  function handleLoginSuccess() {
    setLoggedIn(true);
  }

  return <>
    {loggedIn ? <Home /> : <Form onLoginSuccess={handleLoginSuccess} />}
  </>
}
