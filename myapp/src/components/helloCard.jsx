import { useState } from 'react';

function HelloCard() {
  const [name, setName] = useState("");

  // Function to pick background color based on first letter
  const getColorForName = (name) => {
    if (!name) return "#f9f5ff"; // Default

    const firstLetter = name.trim().charAt(0).toLowerCase();

    if (name.toLowerCase() === "radia") return "#e8d5f7"; // 💜 Special theme for Radia

    const colorMap = {
      a: "#ffe0e0",
      b: "#e0f7ff",
      c: "#e0ffe4",
      d: "#fff5cc",
      e: "#ffdacc",
      f: "#e0ccff",
      r: "#fce4ec", // light pink for other R names
      // add more if you like!
    };

    return colorMap[firstLetter] || "#f0f0f0"; // fallback
  };

  const backgroundColor = getColorForName(name);

  return (
    <div style={{
      padding: "2rem",
      maxWidth: "400px",
      margin: "2rem auto",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontFamily: "sans-serif",
      background: backgroundColor,
      transition: "background 0.5s ease"
    }}>
      <h2>Hello {name ? name : "👀"}!</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name..."
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "1rem"
        }}
      />
      <p style={{ marginTop: "1rem", color: "#555" }}>
        {name
          ? name.toLowerCase() === "radia"
            ? `You're glowing today, Radia ✨`
            : `Nice to meet you, ${name}! 🌟`
          : "I'm waiting... 👇"}
      </p>
    </div>
  );
}

export default HelloCard;
