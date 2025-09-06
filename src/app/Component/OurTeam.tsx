"use client";
import { useEffect, useState, useMemo } from "react";
import "./../Style/Ourteam.css";

const members = [
    {
        name: "Ashish Kushwaha",
        role: "Director – Operations",
        img: "/Images/ashish.png",
        quote:
            "Great work isn’t about doing more; it’s about doing what matters—with focus, passion, and persistence.",
    },
    { name: "Dhruv Malik", role: "Lead", img: "/Images/dhruv.png" },
    { name: "Rohit Nautiyal", role: "Manager", img: "/Images/rohit.png" },
    { name: " Diptiman Chowdhury", role: "Co-Founder", img: "/Images/diptiman.png" },
    { name: "Shubham", role: "Engineer", img: "/Images/shubham.png" },
];

export default function Team() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        const id = setInterval(() => {
            setActive((i) => (i + 1) % members.length);
        }, 3000);
        return () => clearInterval(id);
    }, [paused]);

    const getPosClass = (index: number) => {
        const n = members.length;
        const diff = (index - active + n) % n; // 0..n-1
        if (diff === 0) return "center";
        if (diff === 1) return "right1";
        if (diff === 2) return "right2";
        if (diff === n - 1) return "left1";
        if (diff === n - 2) return "left2";
        return "hidden";
    };

    return (
        <section className="team-section container-fluid px-4">
            <div className="section-heading">
                <h2 className="section-title">Our Team</h2>
                <img src="/Images/heading.png" alt="Decor" className="section-decor" />
            </div>

            <img src="/Images/vector1.png" className="decor decor-left" alt="" />
            <img src="/Images/vector2.png" className="decor decor-left" alt="" />
            <img src="/Images/vector3.png" className="decor decor-left" alt="" />
            <img src="/Images/vector4.png" className="decor decor-left" alt="" />
            <img src="/Images/vector5.png" className="decor decor-right" alt="" />
            <img src="/Images/vector6.png" className="decor decor-right" alt="" />
            <div
                className="cards-stage"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {members.map((m, i) => (
                    <article
                        key={m.name}
                        className={`tcard ${getPosClass(i)}`}
                        onClick={() => setActive(i)}
                    >
                        <div className="tcard-topbar">
                            <span className="tcard-name">{m.name}</span>
                        </div>

                        <img src={m.img} alt={m.name} className="tcard-avatar" />

                        <div className="tcard-role">{m.role}</div>

                        {m.quote && <div className="tcard-quote">“{m.quote}”</div>}
                    </article>
                ))}
            </div>
        </section>
    );
}
