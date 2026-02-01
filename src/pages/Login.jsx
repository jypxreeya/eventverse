import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [showRoles, setShowRoles] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login-page">
      
      {/* LEFT IMAGE */}
      <div className="image-section">
        <div className="image-overlay"></div>
      </div>

      {/* HEADER */}
      <div className="header">
        <h2 className="logo">EventVerse</h2>

        <button
          className="login-btn"
          onClick={() => setShowRoles(!showRoles)}
        >
          Login
        </button>
      </div>

      {/* CENTER CONTENT */}
      <div className="content">
        <h1>Book Events. Feel the Vibe.</h1>

        <p className="tagline">
          Discover concerts, shows, and experiences near you.
        </p>

        <button
          className="view-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          View More
        </button>

        {showMore && (
          <div className="more-text">
            <p className="animate-item">🎵 Concerts & Live Music</p>
            <p className="animate-item">🎤 Comedy & Stand-up Shows</p>
            <p className="animate-item">🎭 Debates & Theatre</p>
            <p className="animate-item">📺 TV Shows & Specials</p>
            <p className="animate-item">👨‍👩‍👧 Family & Kids Events</p>
            <p className="animate-item highlight">
              Book tickets instantly. No hassle.
            </p>
          </div>
        )}
      </div>

      {/* ROLE SELECTION */}
      {showRoles && (
        <div className="role-box">
          <div
  className="role active"
  onClick={() => navigate("/main")}
>
  User
  <span>Book your tickets</span>
</div>


          <div className="role disabled">
            Admin
            <span>Manage platform</span>
          </div>

          <div className="role disabled">
            Event Host
            <span>Create events</span>
          </div>
        </div>
      )}
    </div>
  );
}
