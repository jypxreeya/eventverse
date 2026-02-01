import { useState, useEffect } from "react";
import GenreChip from "../components/GenreChip";
import EventCard from "../components/EventCard";
import "./Comedy.css";

const genres = ["Stand-up", "Improv", "Sketch", "Satire", "Dark Comedy"];

export default function Comedy() {
  const [selectedGenre, setSelectedGenre] = useState("Stand-up");
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState({ start: "", end: "" });

  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      () => setLocation("Live Location Enabled"),
      () => setLocation("Location not allowed")
    );
  }, []);

  return (
    <div className="comedy-page">
      {/* HERO */}
      <section className="hero">
        <h1>STAND-UP COMEDY</h1>
        <p>Laugh Out Loud. Live.</p>
      </section>

      {/* GENRES */}
      <section className="genres">
        {genres.map((g) => (
          <GenreChip
            key={g}
            label={g}
            active={g === selectedGenre}
            onClick={() => setSelectedGenre(g)}
          />
        ))}
      </section>

      {/* FILTERS */}
      <section className="filters">
        <input
          type="text"
          placeholder="Select location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="date"
          onChange={(e) => setDates({ ...dates, start: e.target.value })}
        />
        <input
          type="date"
          onChange={(e) => setDates({ ...dates, end: e.target.value })}
        />
      </section>

      {/* RESULTS */}
      <section className="results">
        <EventCard artist="Funny Bones" show="World Tour" />
        <EventCard artist="Laugh Riot" show="Stand-up Special" />
        <EventCard artist="John Doe" show="Live Improv" />
        <EventCard artist="Comedy Night" show="Global Tour" />
      </section>
    </div>
  );
}
