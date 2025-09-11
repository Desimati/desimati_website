"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

export default function About() {
  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

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
              src="/Images/mainabout.png"
              alt="about us"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Section: Mission */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-5 mx-5"
      >
        <h2 className="mb-3" style={{ color: "#7E4E00", fontFamily: "var(--font-playfair)", fontSize: "35px",fontStyle: "normal", fontWeight: "500", lineHeight: "normal" }}>
          Our Mission
        </h2>
        <p
          className="px-0"
          style={{ color: "#553500",textAlign: "justify", fontFamily: "var(--font-outfit)", fontSize: "18px",fontStyle: "normal", lineHeight: "25px",letterSpacing: "0.18px" }}
        >
          At <span style={{ color: "#BBA82B" }}>Desimati</span>, our mission begins at the farm. We
          exist to empower farmers by ensuring they receive fair prices for their produce and access
          to better opportunities across India. By placing farmers at the heart of our work, we not
          only secure livelihoods but also create a sustainable chain of trust that extends from the
          soil to every household.
        </p>
      </motion.div>

      <div className="container">
        {/* Row 1 */}
        <motion.div
          className="row align-items-center my-5"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-md-6 text-center">
            <Image
              src="/Images/mainabout2.png"
              alt="about"
              width={450}
              height={350}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p className="p-3" style={{ color: "#553500",textAlign: "justify",fontFamily: "var(--font-outfit)", fontSize: "18px", fontWeight: "500",fontStyle: "normal", lineHeight: "25px",letterSpacing: "0.18px",maxWidth: "580px" }}>
              We are committed to delivering top-quality produce at the most affordable prices. From
              sorting and packaging to doorstep delivery, every process is designed to balance
              uncompromised freshness with cost-effectiveness. This value-first approach makes
              healthy food accessible to every family, while supporting businesses with dependable
              supply.
            </p>
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="row align-items-center my-5 flex-md-row-reverse"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-md-6 text-center">
            <Image
              src="/Images/mainabout4.png"
              alt="about"
              width={450}
              height={350}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p className="p-3" style={{ color: "#553500",textAlign: "justify",fontFamily: "var(--font-outfit)", fontSize: "18px", fontWeight: "500",fontStyle: "normal", lineHeight: "25px",letterSpacing: "0.18px",maxWidth: "580px" }}>
              Our mission goes beyond food — it is about people. By becoming a major employer of
              women from disadvantaged backgrounds, we invest in human potential, create dignity of
              work, and strengthen communities. Through fairness, inclusion, and innovation, we are
              redefining what it means to build a supply chain that truly serves everyone.
            </p>
          </div>
        </motion.div>

        {/* Section: Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="my-5"
        >
          <h2 className="mb-3" style={{ color: "#7E4E00",fontFamily: "var(--font-playfair)", fontSize: "35px",fontStyle: "normal", fontWeight: "500", lineHeight: "normal" }}>
            Our Vision
          </h2>         
        </motion.div>

        {/* Row 3 */}
        <motion.div
          className="row align-items-center my-5"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-md-6 text-center">
            <Image
              src="/Images/mainabout5.png"
              alt="about"
              width={450}
              height={350}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p className="p-3" style={{ color: "#553500",textAlign: "justify",fontFamily: "var(--font-outfit)", fontSize: "18px", fontWeight: "500",fontStyle: "normal", lineHeight: "25px",letterSpacing: "0.18px",maxWidth: "580px" }}>
              We envision a future where every farmer thrives, every customer enjoys fresh and
              affordable produce, and the supply chain is a seamless bridge rather than a barrier.
              Desimati aims to be the trusted name in transforming the farm-to-table experience
              across India by combining technology, transparency, and empathy.
            </p>
          </div>
        </motion.div>

        {/* Row 4 */}
        <motion.div
          className="row align-items-center my-5 flex-md-row-reverse"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-md-6 text-center">
            <Image
              src="/Images/mainabout6.png"
              alt="about"
              width={450}
              height={350}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p className="p-3" style={{ color: "#553500",textAlign: "justify",fontFamily: "var(--font-outfit)", fontSize: "18px", fontWeight: "500",fontStyle: "normal", lineHeight: "25px",letterSpacing: "0.18px",maxWidth: "580px" }}>
              Our vision is to create a model where fairness and quality are never compromised — a
              system where farmers prosper, customers save, and communities grow stronger. By
              digitising the supply chain and building meaningful experiences for end-users, we
              strive to make healthy, high-quality food accessible to all, while setting new
              benchmarks of efficiency and trust.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
