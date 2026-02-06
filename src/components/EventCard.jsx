
import { useNavigate } from "react-router-dom";

export default function EventCard({ artist, tour }) {
  const navigate = useNavigate();

  return (
    <div className="event-card">
      <h2>{artist}</h2>
      <p>{tour}</p>

      <button
        className="book-btn"
        onClick={() => navigate("/booking")}
      >
        Book Ticket
      </button>
    </div>
  );
}
