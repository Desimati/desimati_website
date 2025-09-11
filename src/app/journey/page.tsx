"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-100"
        style={{ height: "90vh" }}
      >
        <div className="container-fluid h-100 px-3 position-relative">
          <div
            className="w-100 h-100 position-relative"
            style={{ borderRadius: "2px", overflow: "hidden" }}
          >
            <Image
              src="/Images/0urjourney.png"
              alt="about us"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="position-absolute"
              style={{
                fontFamily: "var(--font-playfair)",
                bottom: "30px",
                left: "40px",
                color: "#FFE9A5",
                fontSize: "3rem",
                fontWeight: "500",
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                margin: 0,
                lineHeight: "1.2",
              }}
            >
              Connecting farmers to users
            </motion.h2>
          </div>
        </div>
      </motion.div>

      <div className="container my-5">
        {/* Row 1 */}
        <div className="row pt-2 align-items-center">
          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/Images/our1.png"
              alt="about"
              width={550}
              height={350}
              className="img-fluid p-2 m-2"
            />
          </motion.div>

          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="p-2"
              style={{ color: "#553500", marginTop: "10px", fontFamily: "var(--font-outfit)", fontSize: "18px", fontStyle: "normal", lineHeight: "25px", maxWidth: "615px" }}
            >
              <p>Our Journey</p>
              At Desimati, our story begins with a simple belief: farmers come
              first.
              <br />
              <br />
              Back in 2016, we started as vegetable farmers ourselves. Working
              closely with the soil and the seasons, we saw firsthand the
              challenges farmers faced — growing healthy produce with care, only
              to struggle with unfair prices, limited reach, and broken supply
              chains.
              <br />
              <br />
              By 2017, we identified a critical gap in the supply chain: while
              farmers were producing quality food, it was getting lost in
              inefficiencies before reaching businesses and consumers. We
              stepped in to bridge this gap, supplying fresh farm produce to
              hotels and restaurants.
            </p>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="row align-items-center my-4">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p
              className="p-5 m-2"
              style={{ color: "#553500", marginTop: "10px", fontFamily: "var(--font-outfit)", fontSize: "18px", fontStyle: "normal", lineHeight: "25px", maxWidth: "615px",}}
            >
              In 2020, we became pioneers in farm gate sales across Central
              India. For the first time, farmers were assured of a fair purchase
              price right at their fields, without middlemen dictating terms.
              This innovation not only helped farmers earn more but also gave
              them better opportunities to sell their produce across India.
              <br />
              <br />
              Our mission has always been larger than business. We are proud to
              be a major employer of women from disadvantaged backgrounds,
              empowering them with stable jobs in sorting, packaging, and
              logistics. Their contribution forms the backbone of our operations
              and embodies our values of inclusivity and dignity of work.
            </p>
          </motion.div>

          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/Images/our2.png"
              alt="about"
              width={550}
              height={350}
              className="img-fluid"
            />
          </motion.div>
        </div>

        {/* Row 3 */}
        <div className="row align-items-center my-4 mb-5">
          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/Images/our3.png"
              alt="about"
              width={550}
              height={350}
              className="img-fluid p-2 m-2"
            />
          </motion.div>

          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="p-2 m-2"
              style={{ color: "#553500", marginTop: "10px", fontFamily: "var(--font-outfit)", fontSize: "18px", fontStyle: "normal", lineHeight: "25px", maxWidth: "615px" }}

            >
              From expanding to corporate vendors in 2021, starting our own
              farms in 2022, and supplying to quick commerce platforms in 2025,
              our journey has been driven by a single purpose: to transform the
              farm-to-fork ecosystem with fairness, efficiency, and innovation.
              <br />
              <br />
              At every step, we remain committed to our primary objective —
              helping farmers thrive while delivering quality, affordable food
              to every table.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
