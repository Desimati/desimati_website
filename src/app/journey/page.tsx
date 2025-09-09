"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

export default function About() {
  return (
    <>
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

      <div className="container my-4">
        <div className="row pt-2 align-items-center">
          <div className="col-md-6 text-center">
            <Image
              src="/Images/our1.png"
              alt="about"
              width={600}
              height={400}
              className="img-fluid p-2 m-2"
            />
          </div>
          <div className="col-md-6">
            <p className="p-2 pt-4" style={{ color: "#553500", marginTop: "20px" }}>
              Our Journey<br /><br />

              At Desimati, our story begins with a simple belief: farmers come first.<br /><br />

              Back in 2016, we started as vegetable farmers ourselves.
              Working closely with the soil and the seasons, we saw firsthand the challenges farmers faced — growing healthy produce with care,
              only to struggle with unfair prices, limited reach, and broken supply chains.<br /><br />

              By 2017, we identified a critical gap in the supply chain:
              while farmers were producing quality food,
              it was getting lost in inefficiencies before reaching businesses and consumers. We stepped in to bridge this gap,
              supplying fresh farm produce to hotels and restaurants.

            </p>
          </div>
        </div>

        <div className="row align-items-center my-4">
          <div className="col-md-6">
            <p className="p-2 m-2" style={{ color: "#553500", marginTop: "20px" }}>
              In 2020, we became pioneers in farm gate sales across Central India. For the first time,
              farmers were assured of a fair purchase price right at their fields, without middlemen dictating terms. This innovation not only helped farmers
              earn more but also gave them better opportunities to sell their produce across India.<br /><br />

              Our mission has always been larger than business. We are proud to be a major employer of women from disadvantaged backgrounds,
              empowering them with stable jobs in sorting, packaging, and logistics. Their contribution forms the backbone of our operations and embodies our values of inclusivity and dignity of work.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <Image
              src="/Images/our2.png"
              alt="about"
              width={600}
              height={400}
              className="img-fluid"
            />
          </div>
        </div>


        <div className="row align-items-center my-4">
          <div className="col-md-6 text-center">
            <Image
              src="/Images/our3.png"
              alt="about"
              width={600}
              height={400}
              className="img-fluid p-2 m-2"
            />
          </div>
          <div className="col-md-6">
            <p style={{ color: "#553500", marginTop: "20px" }}>
              From expanding to corporate vendors in 2021, starting our own farms in 2022, and supplying to quick commerce platforms in 2025,
              our journey has been driven by a single purpose: to transform the farm-to-fork ecosystem with fairness, efficiency, and innovation.<br /><br />

              At every step, we remain committed to our primary objective — helping farmers thrive while delivering quality, affordable food to every table.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
