"use client";
import { useState } from "react";
import "./../Style/Ourteam.css";

const members = [
  { img: "/Images/ourteam.png" },
  { img: "/Images/ourteam1.png" },
  { img: "/Images/ourteam2.png" },
  { img: "/Images/ourteam.png" },
  { img: "/Images/ourteam1.png" },
  { img: "/Images/ourteam2.png" },
  { img: "/Images/ourteam.png" },
];

export default function Team() {
  const [active, setActive] = useState(3); // middle by default

  return (
    <section className="team-section container-fluid px-4">
      <div className="section-heading">
        <h2 className="section-title">Our Team</h2>
        <img src="/Images/heading.png" alt="Decor" className="section-decor" />
      </div>

      <div className="cards-stage">
        {members.map((m, i) => {
          const offset = i - active;

          // Center card
          if (offset === 0) {
            return (
              <div
                key={i}
                className="tcard center"
                onMouseEnter={() => setActive(i)}
              >
                <img src={m.img} alt={`member-${i}`} className="tcard-avatar" />
              </div>
            );
          }

          // Left & Right spread (max 3 cards each side)
          const spread = 40; // horizontal distance between cards
          const lift = 30; // vertical curve
          const angle = offset * 20; // slight rotation

          const x = offset * spread;
          const y = Math.abs(offset) * lift;

          return (
            <div
              key={i}
              className="tcard"
              style={{
                transform: `translate(${x}px, -${150 - y}px) rotate(${angle}deg)`,
                zIndex: 10 - Math.abs(offset),
                opacity: Math.abs(offset) > 3 ? 0 : 1, // only 3 left/right visible
              }}
              onMouseEnter={() => setActive(i)}
            >
              <img src={m.img} alt={`member-${i}`} className="tcard-avatar" />
            </div>
          );
        })}

        {/* Base vector image */}
        <img
          src="/Images/vector7.png"
          alt="decor"
          className="team-decor-front"
        />
      </div>
    </section>
  );
}
