import { useState } from "react";

export default function Form({ onLoginSuccess }) {
  let [formdata, setFormData] = useState({
    username: "",
    password: ""
  });

  let [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const correctUsername = "admin";
    const correctPassword = "1234";

    if (formdata.username === correctUsername && formdata.password === correctPassword) {
      setError("");
      onLoginSuccess();
    } else {
      setError("Invalid username or password");
    }
  }
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg,#f5f7fa,#c3cfe2)'
    },
    form: {
      width: 340,
      padding: 24,
      borderRadius: 8,
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    },
    title: { margin: 0, textAlign: 'center', color: '#333' },
    input: {
      padding: '10px 12px',
      borderRadius: 6,
      border: '1px solid #d7dbe0',
      outline: 'none',
      fontSize: 14
    },
    submit: {
      padding: '10px 12px',
      borderRadius: 6,
      border: 'none',
      background: 'linear-gradient(90deg,#4b6cb7,#182848)',
      color: '#fff',
      fontWeight: 600,
      cursor: 'pointer'
    },
    error: { color: '#c0392b', fontSize: 13, margin: 0, textAlign: 'center' }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <h2 style={styles.title}>Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formdata.username}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formdata.password}
          onChange={handleChange}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <input type="submit" value="LOGIN" style={styles.submit} />
      </form>
    </div>
  );
}
