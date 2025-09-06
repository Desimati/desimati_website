"use client";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Left Side */}
                <div
                    className="col-md-6 d-flex align-items-center"
                    style={{
                        backgroundColor: "#FFF5D9",
                        minHeight: "92vh",
                        paddingLeft: "7rem",
                        paddingRight: "7rem",
                    }}
                >
                    <div className="container py-5">
                        {/* Small heading */}
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-2"
                            style={{ color: "#B16E01", fontSize: "0.9rem" }}
                        >
                            Contact us
                        </motion.p>

                        {/* Big heading */}
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="fw-bold mb-3"
                            style={{
                                fontSize: "2.5rem",
                                color: "#553500",
                                fontFamily: "playfair display",
                            }}
                        >
                            How can we help ?
                        </motion.h1>

                        {/* Paragraph */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="mb-4"
                            style={{ color: "#553500", lineHeight: "1.7" }}
                        >
                            Lorem ipsum dolor sit amet consectetur. Dignissim enim faucibus blandit
                            massa non id. Nunc vitae dictum senectus pharetra. Feugiat dui suspendisse
                            laoreet vitae nibh purus quis tellus. Elementum orci vivamus ultricies
                            quis arcu amet faucibus sed odio. Augue vestibulum nisl tortor vel sapien
                            sollicitudin. In massa.
                        </motion.p>

                        {/* Responsive Images */}
                        <div
                            className="position-relative"
                            style={{ width: "100%", height: "300px", marginBottom: "4rem" }}
                        >
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                src="/Images/contact-person-img.jpg"
                                alt="Person talking"
                                className="img-fluid rounded-3 shadow-sm"
                                style={{
                                    position: "absolute",
                                    top: "5%",
                                    left: "20%",
                                    width: "40%",
                                    height: "auto",
                                    objectFit: "contain",
                                    backgroundColor: "#FFF5D9",
                                }}
                            />
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                src="/Images/contact-building-img.jpg"
                                alt="Building"
                                className="img-fluid rounded-3 shadow-sm"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    width: "40%",
                                    height: "auto",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="col-md-6 p-0"
                >
                    <img
                        src="/Images/contact-bg-img.png"
                        alt="Farm Image"
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
