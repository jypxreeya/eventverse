import { useState, useEffect } from "react";
import GenreChip from "../components/GenreChip";
import EventCard from "../components/EventCard";
import "./Theatre.css";

const genres = ["Drama", "Musical", "Opera", "Comedy", "Experimental"];

export default function Theatre() {
  const [selectedGenre, setSelectedGenre] = useState("Drama");
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState({ start: "", end: "" });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      () => setLocation("Live Location Enabled"),
      () => setLocation("Location not allowed")
    );
  }, []);

  return (
    <div className="theatre-page">
      {/* HERO */}
      <section className="hero">
        <h1>THEATRE SHOWS</h1>
        <p>Experience Live Drama & Musical Performances</p>
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
        <EventCard artist="Hamlet" show="Classic Drama" />
        <EventCard artist="Les Misérables" show="Musical Tour" />
        <EventCard artist="The Phantom of the Opera" show="Opera" />
        <EventCard artist="Comedy Night" show="Improvised Theatre" />
      </section>
    </div>
  );
}
