"use client";
import { useEffect } from "react";
import "./../Style/Home.css";


export default function Home() {

   useEffect(() => {
    const track = document.querySelector(".partners-track");
    if (track && track.children.length === 5) {
      track.innerHTML += track.innerHTML;
    }
  }, []);
  
  return (
    <section className="hero-section">
      <div className="hero-content container-fluid px-4">
        <h1 className="hero-title">
          We deliver fresh to <br /> your home
        </h1>

        <p className="hero-subtext">
          Desimati brings just-harvested fruits and vegetables straight from
          trusted growers to consumers, kitchens, and brands across India.
          Transparent sourcing, cold-chain care, and fair prices.
        </p>

        <div className="hero-buttons">
          <button className="btn-order">Order from Us</button>
          <button className="btn-playstore">
            <img src="/Images/playstore.png" alt="Playstore" />
          </button>
        </div>
        <button className="btn-enquiry">Enquiry for business</button>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">2000+</span>
            <span className="stat-text">tons of goods supplied</span>
          </div>
          <div className="stat">
            <span className="stat-number">2M+</span>
            <span className="stat-text">orders delivered</span>
          </div>
        </div>
      </div>

      <div className="hero-partners">
        <div className="partners-track">
          <img src="/Images/instamart.png" alt="Swiggy" />
          <img src="/Images/blinkit.png" alt="Blinkit" />
          <img src="/Images/reliance.png" alt="Reliance Fresh" />
          <img src="/Images/kfc.png" alt="KFC" />
          <img src="/Images/dominos.png" alt="Dominos" />
        </div>
      </div>

    </section>
  );
}
