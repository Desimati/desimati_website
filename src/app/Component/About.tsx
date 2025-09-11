"use client";
import { useEffect, useState } from "react";
import "./../Style/About.css";
import Image from "next/image";

export default function About() {
  const images = [
    "/Images/about.png",
    "/Images/about1.png",
    "/Images/about2.png",
    "/Images/about3.png",
    "/Images/about4.png",
    "/Images/about5.png",
    "/Images/about6.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-section container-fluid px-4">
      <div className="section-heading">
        <h2 className="section-title">About Us</h2>
        <Image
          src="/Images/heading.png"
          width={200}
          height={50}
          alt="Decor"
          className="section-decor"
        />
      </div>

      <p className="about-text">
        At <span className="highlight">Desimati</span>, we are reimagining how
        India buys and enjoys fruits and vegetables. By directly connecting
        farmers with consumers and businesses, we cut out middlemen to deliver
        produce that is fresher, safer, and more affordable. <br />
        Our verticals are as follows:-
      </p>

      <div className="about-content row">
        {/* LEFT SIDE SLIDER */}
        <div className="col-md-5 image-slider">
          {images.map((img, index) => (
            <div
              key={index}
              className={`about-image ${index === currentIndex ? "active" : ""}`}
            >
              <Image
                src={img}
                alt="Farmer"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="col-md-7">
          <div className="about-item">
            <Image src="/Images/about-heading.png" width={90} height={190} alt="Icon" />
            <div>
              <span>Farm To Business</span>
              <p className="mt-2">We sell farm fresh vegetables to businesses</p>
            </div>
          </div>
          <div className="about-item">
            <Image src="/Images/about-heading.png" width={90} height={190} alt="Icon" />
            <div>
              <span>Business To Business</span>
              <p className="mt-2">
                We also purchase and sale of fruits and vegetables for business
              </p>
            </div>
          </div>
          <div className="about-item">
            <Image src="/Images/about-heading.png" width={90} height={190} alt="Icon" />
            <div>
              <span>Direct To Consumer</span>
              <p className="mt-2">
                We also work on providing farm fresh veggies to consumers across
                India
              </p>
            </div>
          </div>
          <div className="about-item">
            <Image src="/Images/about-heading.png" width={90} height={90} alt="Icon" />
            <div>
              <span>Farming</span>
              <p className="mt-2">
                We also do extensive farming of specific vegetables
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
