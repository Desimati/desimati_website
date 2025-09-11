"use client";
import { useEffect, useState } from "react";
import "./../Style/Ourteam.css";

const members = [
  { img: "/Images/ashishB.png" },
  { img: "/Images/dhruvC.png" },
  { img: "/Images/diptimanB.png" },
  { img: "/Images/hansaC.png" },
  { img: "/Images/nitanshB.png" },
  { img: "/Images/pramodC.png" },
  { img: "/Images/sakshiB.png" },
  { img: "/Images/rohitC.png" },
  { img: "/Images/shubhamB.png" },
  { img: "/Images/sagarC.png" },
];

export default function Team() {
  const [active, setActive] = useState(3);
  const total = members.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 2000);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="container-fluid px-4">
      <div className="section-heading">
        <h2 className="section-title">Our Team</h2>
        <img src="/Images/heading.png" alt="Decor" className="section-decor" />
      </div>

      <div className="cards-stage team-section ">
        {members.map((m, i) => {
          let offset = i - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          if (Math.abs(offset) > 3) return null;

          const spread = 20; // horizontal curve
          const lift = 40; // vertical curve
          const angle = offset * 15; // slight rotation

          const x = offset * spread;
          const y = Math.abs(offset) * lift;

          return (
            <div
              key={i}
              className={`tcard ${offset === 0 ? "center" : ""}`}
              style={{
                transform: `translate(${x}px, -${150 - y}px) rotate(${angle}deg)`,
                zIndex: 10 - Math.abs(offset),
              }}
            >
              <img src={m.img} alt={`member-${i}`} className="tcard-avatar" />
            </div>
          );
        })}

        <img
          src="/Images/vector7.png"
          alt="decor"
          className="team-decor-front"
        />
      </div>
    </section>
  );
}
