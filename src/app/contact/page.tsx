"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { restrictToIndianMobile, validateIndianMobile } from "../utils/FormValidators";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function Contact() {
    const formControls = useAnimation();
    useEffect(() => {
        formControls.set("hidden");
    }, [formControls]);
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
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-2"
                            style={{ color: "#B16E01", fontSize: "0.9rem" }}
                        >
                            Contact us
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-3"
                            style={{
                                fontWeight: "400",
                                fontSize: "2.5rem",
                                color: "#553500",
                                fontFamily: "playfair display",
                            }}
                        >
                            How can we help ?
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="mb-4 fw-semibold"
                            style={{ color: "#553500" }}
                        >
                            Lorem ipsum dolor sit amet consectetur. Dignissim enim faucibus blandit
                            massa non id. Nunc vitae dictum senectus pharetra. Feugiat dui suspendisse
                            laoreet vitae nibh purus quis tellus. Elementum orci vivamus ultricies
                            quis arcu amet faucibus sed odio. Augue vestibulum nisl tortor vel sapien
                            sollicitudin. In massa.
                        </motion.p>

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
                    onAnimationComplete={() => {
                        formControls.start("show");
                    }}
                    className="col-md-6 p-0 position-relative d-flex justify-content-center align-items-center"
                    style={{ minHeight: "92vh", overflow: "hidden" }}
                >
                    <img
                        src="/Images/contact-bg-img.png"
                        alt="Farm Image"
                        className="w-100 h-100 position-absolute"
                        style={{ objectFit: "cover", top: 0, left: 0, zIndex: 0 }}
                    />

                    <div
                        className="position-relative"
                        style={{
                            backgroundColor: "#FFF5D9",
                            padding: "1.5rem",
                            borderRadius: "0.75rem",
                            maxWidth: "80%",
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                            zIndex: 1,
                        }}
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="mb-0 fw-semibold"
                            style={{ color: "#553500", lineHeight: "1.7" }}
                        >
                            Fill out the form and a sales or support expert will be in touch
                            right away.
                        </motion.p>

                        <motion.form
                            variants={containerVariants}
                            initial="hidden"
                            animate={formControls}
                        >
                            <motion.div variants={itemVariants} className="row mt-4">
                                <div className="col-md-6 mb-2">
                                    <label
                                        className="form-label fw-semibold"
                                        style={{ color: "#553500", fontSize: ".8rem" }}
                                    >
                                        First name*
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        style={{ backgroundColor: "#FFE69A" }}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label
                                        className="form-label fw-semibold"
                                        style={{ color: "#553500", fontSize: ".8rem" }}
                                    >
                                        Last name*
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        style={{ backgroundColor: "#FFE69A" }}
                                        required
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="row">
                                <div className="col-md-12 mb-2">
                                    <label
                                        className="form-label fw-semibold"
                                        style={{ color: "#553500", fontSize: ".8rem" }}
                                    >
                                        Email ID*
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        style={{ backgroundColor: "#FFE69A" }}
                                        required
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="row">
                                <div className="col-md-12 mb-2">
                                    <label
                                        className="form-label fw-semibold"
                                        style={{ color: "#553500", fontSize: ".8rem" }}
                                    >
                                        Phone number*
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        onKeyDown={restrictToIndianMobile}
                                        minLength={10}
                                        maxLength={10}
                                        style={{ backgroundColor: "#FFE69A" }}
                                        required
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="row">
                                <div className="col-md-12 mb-2">
                                    <label
                                        className="form-label fw-semibold"
                                        style={{ color: "#553500", fontSize: ".8rem" }}
                                    >
                                        Company name*
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        style={{ backgroundColor: "#FFE69A" }}
                                        required
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="row">
                                <div className="col-md-12 mb-2">
                                    <label
                                        className="form-label fw-semibold"
                                        style={{ color: "#553500", fontSize: ".8rem" }}
                                    >
                                        Service*
                                    </label>
                                    <select
                                        className="form-select fw-semibold"
                                        style={{ backgroundColor: "#FFE69A", color: "#553500" }}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="1">Sales</option>
                                        <option value="2">Support Expert</option>
                                    </select>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="row mb-4">
                                <div className="col-md-12 mb-2">
                                    <label
                                        className="form-label fw-semibold"
                                        style={{ color: "#553500", fontSize: ".8rem" }}
                                    >
                                        Enter your query*
                                    </label>
                                    <textarea className="form-control" style={{ backgroundColor: "#FFE69A" }} required></textarea>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <p
                                    style={{ color: "#553500", fontSize: ".8rem", marginBottom: "2.5rem" }}
                                    className="fw-semibold"
                                >
                                    <input
                                        type="checkbox"
                                        style={{ accentColor: "#FFE69A" }}
                                        className="me-1"
                                    />{" "}
                                    Yes I would like to receive occasional news and tips on how to
                                    expand my business intentionally.
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <button
                                    className="btn btn-xl text-light w-100 rounded-pill fw-semibold"
                                    style={{ backgroundColor: "#553500" }}
                                >
                                    Contact us
                                </button>
                            </motion.div>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
