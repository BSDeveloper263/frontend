import React, { useState, useEffect } from "react";

const SimpleLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.email}!`);
  };

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.height = "100vh";
    document.body.style.fontFamily = "'Poppins', sans-serif";
    document.body.style.background =
      "linear-gradient(135deg, #667eea, #764ba2)";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "15px",
        padding: "40px 50px",
        width: "320px",
        textAlign: "center",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
        animation: "fadeIn 0.8s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input:focus {
          border-color: #667eea;
          box-shadow: 0 0 5px rgba(102,126,234,0.5);
        }
        button:hover {
          background: #5a67d8;
        }
        @media (max-width: 480px) {
          div {
            width: 85% !important;
            padding: 30px 25px !important;
          }
        }
      `}</style>

      <h2 style={{ color: "#667eea", marginBottom: "25px" }}>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "15px",
            outline: "none",
            fontSize: "14px",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            outline: "none",
            fontSize: "14px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#667eea",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SimpleLogin;
