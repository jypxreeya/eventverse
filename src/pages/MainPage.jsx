import "./MainPage.css";
import { useNavigate } from "react-router-dom";

const events = [
  { name: "Concerts", image: "/images/concert.jpg", path: "/concerts" },
  { name: "Stand-up Comedy", image: "/images/comedy.jpg", path: "/comedy" },
  { name: "Sports", image: "/images/sports.jpg", path: "/sports" },
  { name: "Theatre", image: "/images/theatre.jpg", path: "/theatre" },
];


export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <h1 className="title">Discover Events</h1>

      <div className="event-grid">
        {events.map((e) => (
  <div
    key={e.name}
    className="event-card"
    onClick={() => navigate(e.path)}  
  >
    <img src={e.image} alt={e.name} />
    <h2>{e.name}</h2>
  </div>
))}

      </div>
    </div>
  );
}
