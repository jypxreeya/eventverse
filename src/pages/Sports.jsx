import { useState, useEffect } from "react";
import GenreChip from "../components/GenreChip";
import EventCard from "../components/EventCard";
import "./Sports.css";

const genres = ["Football", "Cricket", "Basketball", "Tennis", "Formula 1"];

export default function Sports() {
  const [selectedGenre, setSelectedGenre] = useState("Football");
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState({ start: "", end: "" });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      () => setLocation("Live Location Enabled"),
      () => setLocation("Location not allowed")
    );
  }, []);

  return (
    <div className="sports-page">
      {/* HERO */}
      <section className="hero">
        <h1>SPORTS EVENTS</h1>
        <p>Feel the Action. Live.</p>
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
        <EventCard artist="Team A vs Team B" show="Championship 2026" />
        <EventCard artist="National Cup" show="Football Finals" />
        <EventCard artist="Grand Slam" show="Tennis Open" />
        <EventCard artist="F1 Racing" show="World Tour" />
      </section>
    </div>
  );
}
