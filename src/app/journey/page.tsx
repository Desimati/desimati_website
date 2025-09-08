"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

export default function About() {
  return (
    <div className="container my-4">
      <div className="text-center">
        <Image
          src="/Images/about3.png"
          alt="about us"
          width={1400}   // max width for large screens
          height={600}   // keeps aspect ratio
          className="img-fluid w-100 h-auto"
          priority   // ✅ load fast
        />
      </div>
    </div>
  );
}
