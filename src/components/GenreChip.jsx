export default function GenreChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 20px",
        borderRadius: "30px",
        border: "none",
        background: active ? "#ff2cdf" : "#222",
        color: "white",
        fontWeight: "800",
        cursor: "pointer",
        transform: active ? "scale(1.1)" : "scale(1)",
        transition: "0.3s",
      }}
    >
      {label}
    </button>
  );
}
