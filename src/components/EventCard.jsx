export default function EventCard({ artist, show }) {
  return (
    <div className="event-card">
      <h2>{artist}</h2>
      <p>{show}</p>
      <button>Book Ticket</button>
    </div>
  );
}
