"use client";
import { useEffect } from "react";
import "./../Style/Home.css";
import Link from "next/link";


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
          <a href="https://gharaya.com/" target="_blank" className="btn-order">
            Order from Us
          </a>
          <a href="https://play.google.com/store/apps/details?id=co.median.android.kpeknb&pcampaignid=web_share" target="_blank" className="btn-playstore"><img src="/Images/playstore.png" alt="Playstore" /></a>
          <a href="https://apps.apple.com/in/app/gharaya/id6739162919" target="_blank"><img src="/Images/ios.png" alt="Playstore" className="btn-playstore" /></a>
        </div>

        <Link href="/contact" className="btn-enquiry">
          Enquiry for business
        </Link>

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
