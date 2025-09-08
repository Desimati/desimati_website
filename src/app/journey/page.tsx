"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

export default function About() {
  return (
    <div className="container-fluid position-relative">
      <Image
        src="/Images/0urjourney.png"
        alt="about us"
        width={1300}
        height={600}
        className="img-fluid p-2 m-2"
        priority
      />

      <h2
        className="position-absolute"
        style={{
          bottom: "30px",
          left: "60px",
          color: "#FFE9A5",
          fontSize: "3rem",
          fontWeight: "600",
          textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
        }}
      >
        Connecting farmers to users
      </h2>
    </div>
  );
}
