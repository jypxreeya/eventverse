import { useState } from "react";
import "./Booking.css";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.mobile) {
      setError("⚠️ Please fill all the fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/book-ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          eventName: "Concert Event",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Booking failed");
      }

      alert("🎉 Ticket booked! Confirmation mail sent 📩");
      setForm({ name: "", email: "", mobile: "" });
    } catch (err) {
      console.error("Booking error:", err);
      setError("❌ Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-bg">
      <div className={`booking-card ${error ? "shake" : ""}`}>
        <h1>Book Your Ticket</h1>
        <p className="subtitle">One step closer to the vibe ✨</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
        />

        <input
          type="text"
          value="Concert Event"
          disabled
          className="disabled"
        />

        {error && <p className="error">{error}</p>}

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
}
