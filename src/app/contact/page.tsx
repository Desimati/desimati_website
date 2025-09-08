"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, ChangeEvent, FormEvent, useState } from "react";
import { restrictToIndianMobile } from "../utils/FormValidators";

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    query: string;
}

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
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const [formData, setFormData] = useState<ContactFormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        query: "",
    });

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        formControls.set("hidden");
    }, [formControls]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) {
                newErrors[key] = "This field is required";
            }
        });
        if (!checkboxChecked) {
            newErrors.checkbox = "You must agree to receive news and tips.";
        }
        if (formData.phone && formData.phone.length !== 10) {
            newErrors.phone = "Phone number must be 10 digits";
        }
        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("✅ Message sent successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    company: "",
                    service: "",
                    query: ""
                });
            } else {
                alert("❌ Something went wrong. Try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("⚠️ Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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
                            onSubmit={handleSubmit}
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
                                        name="firstName"
                                        className="form-control"
                                        style={{ backgroundColor: "#FFE69A" }}
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.firstName && (
                                        <div style={{ color: "red", fontSize: "0.75rem", marginTop: "0.2rem" }}>
                                            {errors.firstName}
                                        </div>
                                    )}
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
                                        name="lastName"
                                        className="form-control"
                                        style={{ backgroundColor: "#FFE69A" }}
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.lastName && (
                                        <div style={{ color: "red", fontSize: "0.75rem", marginTop: "0.2rem" }}>
                                            {errors.lastName}
                                        </div>
                                    )}
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
                                        name="email"
                                        className="form-control"
                                        style={{ backgroundColor: "#FFE69A" }}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && (
                                        <div style={{ color: "red", fontSize: "0.75rem", marginTop: "0.2rem" }}>
                                            {errors.email}
                                        </div>
                                    )}
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
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        onKeyDown={restrictToIndianMobile}
                                        minLength={10}
                                        maxLength={10}
                                        style={{ backgroundColor: "#FFE69A" }}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phone && (
                                        <div style={{ color: "red", fontSize: "0.75rem", marginTop: "0.2rem" }}>
                                            {errors.phone}
                                        </div>
                                    )}
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
                                        name="company"
                                        className="form-control"
                                        style={{ backgroundColor: "#FFE69A" }}
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.company && (
                                        <div style={{ color: "red", fontSize: "0.75rem", marginTop: "0.2rem" }}>
                                            {errors.company}
                                        </div>
                                    )}
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
                                        name="service"
                                        className="form-select fw-semibold"
                                        style={{ backgroundColor: "#FFE69A", color: "#553500" }}
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="BusinessInquiry">Business Inquiry</option>
                                        <option value="GeneralSupport">General Support</option>
                                    </select>
                                    {errors.service && (
                                        <div style={{ color: "red", fontSize: "0.75rem", marginTop: "0.2rem" }}>
                                            {errors.service}
                                        </div>
                                    )}
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
                                    <textarea name="query" className="form-control" style={{ backgroundColor: "#FFE69A" }} value={formData.query} onChange={handleChange} required></textarea>
                                    {errors.query && (
                                        <div style={{ color: "red", fontSize: "0.75rem", marginTop: "0.2rem" }}>
                                            {errors.query}
                                        </div>
                                    )}
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
                                        checked={checkboxChecked}
                                        onChange={(e) => setCheckboxChecked(e.target.checked)}
                                    />{" "}
                                    Yes I would like to receive occasional news and tips on how to
                                    expand my business intentionally.
                                    {errors.checkbox && (
                                        <div style={{ color: "red", fontSize: "0.75rem", marginTop: "0.2rem" }}>
                                            {errors.checkbox}
                                        </div>
                                    )}
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn btn-xl text-light w-100 rounded-pill fw-semibold"
                                    style={{ backgroundColor: "#553500" }}
                                >
                                    {loading ? "Sending..." : "Contact us"}
                                </button>
                            </motion.div>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
