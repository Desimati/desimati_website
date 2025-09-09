"use client";
import { useState, useEffect } from "react";
import "./../Style/OurWorks.css";

const slides = [
  { img: "/Images/ourworks.png" },
  { img: "/Images/ourworks1.png" },
  { img: "/Images/ourworks2.png" },
];

export default function OurWorks() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ourworks-section container-fluid px-4">
      <div className="section-heading">
        <h2 className="section-title">Our Works</h2>
        <img src="/Images/heading.png" alt="Decor" className="section-decor" />
      </div>

      <div className="ourworks-slider">
        <div
          className="ourworks-slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="ourworks-slide">
              <img
                src={slide.img}
                alt={`ourworks-${index}`}
                className="ourworks-image"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="ourworks-text">
        Delivering fresh, quality farm produce through a smart, tech-driven
        supply chain — from local farms to your table, swiftly and sustainably.
      </p>
    </section>
  );
}
