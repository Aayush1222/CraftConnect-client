import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SendOtpPage.scss"; // Add a separate SCSS file for this page

const SendOtpPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/api/auth/send-otp", { email });
      setMessage(response.data.message);
      navigate("/verify-otp", { state: { email } });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    }
  };

  return (
    <div className="send-otp">
      <form onSubmit={handleSendOtp}>
        <h1>Send OTP</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send OTP</button>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default SendOtpPage;
