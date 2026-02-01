import { useEffect, useState } from "react";
import GenreChip from "../components/GenreChip";
import ConcertCard from "../components/EventCard";
import "./Concerts.css";

const genres = ["Rock", "Pop", "K-Pop", "Latin", "Country", "Alternative"];

export default function Concerts() {
  const [selectedGenre, setSelectedGenre] = useState("Rock");
  const [location, setLocation] = useState("");
  const [dates, setDates] = useState({ start: "", end: "" });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      () => setLocation("Live Location Enabled"),
      () => setLocation("Location not allowed")
    );
  }, []);

  return (
    <div className="concert-page">
      {/* HERO */}
      <section className="hero">
        <h1>CONCERTS</h1>
        <p>Feel the sound. Live.</p>
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
        <ConcertCard artist="Stone Ticket" tour="World Tour" />
        <ConcertCard artist="Tool" tour="Black Page Tour" />
        <ConcertCard artist="John Tork" tour="Live 2026" />
        <ConcertCard artist="Artis & Me" tour="Global Nights" />
      </section>
    </div>
  );
}
