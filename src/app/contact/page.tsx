"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, ChangeEvent, FormEvent, useState } from "react";
import { restrictToIndianMobile } from "../utils/FormValidators";
import toast from "react-hot-toast";
import Image from "next/image";

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
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(10);

    const faqs = [
        {
            q: "What products does Desi Mati deliver?",
            a: "Desi Mati delivers a complete range of fresh fruits and vegetables, including leafy greens, exotic produce, and seasonal varieties. We also offer curated family packs and combo packs to meet everyday household needs.",
        },
        {
            q: "How do you ensure freshness and quality?",
            a: "We follow a strict “farm-to-home” approach. All produce is procured fresh from farmers and mandis on the same day and delivered directly to consumers without long storage, ensuring natural freshness and quality.",
        },
        {
            q: "Are your products sourced directly from farmers?",
            a: "Yes. Our produce is sourced directly from farmers and from local mandis, where farmers and farmer groups bring their fresh harvest daily. This ensures authenticity and supports local growers.",
        },
        {
            q: "What safety and hygiene measures do you follow?",
            a: "We handle all produce with care, maintaining proper hygiene standards during procurement, packaging, and delivery. Our eco-friendly packaging also ensures safe handling of fresh produce.",
        },
        {
            q: "Is there a minimum order value?",
            a: "No, there is no minimum order value. You can order as per your requirement, whether it is a single item or a complete household basket.",
        },
        {
            q: "Which cities do you deliver to?",
            a: "Currently, we serve consumers across Madhya Pradesh, Pune, Delhi, and Mumbai. We are expanding rapidly and aim to reach more cities across India.",
        },
        {
            q: "What is the delivery timeline?",
            a: "Since we buy directly from farmers and mandis daily, all deliveries are fulfilled on the same day or the very next day, depending on location. This ensures every order is fresh from the farm.",
        },
        {
            q: "Do you offer subscription plans?",
            a: "Yes, we offer flexible subscription packs for households, enabling consumers to receive fresh fruits and vegetables on a regular basis without placing repeated orders.",
        },
        {
            q: "Do you provide organic produce?",
            a: "Alongside regular produce, we also offer organically grown fruits and vegetables depending on seasonal availability.",
        },
        {
            q: "What payment options are available?",
            a: "Consumers can pay via all major digital payment methods, including UPI, debit/credit cards, wallets, and net banking.",
        },
        {
            q: "Can I track my order?",
            a: "Yes, once your order is confirmed, you will be able to track its status and expected delivery time.",
        },
        {
            q: "How do you handle returns or refunds?",
            a: "If you face any quality concerns, you may request a replacement or refund. Our customer support team ensures quick resolution.",
        },
        {
            q: "Do you offer seasonal and exotic fruits?",
            a: "Yes. Along with everyday produce, we provide exotic and seasonal fruits and vegetables, so you can enjoy premium and rare varieties.",
        },
        {
            q: "How is Desi Mati different from others?",
            a: "Unlike traditional quick-commerce platforms, we do not maintain stock. We buy fresh from the farm and deliver fresh, ensuring consumers receive naturally fresh produce with no compromise on quality.",
        },
        {
            q: "Can I place bulk orders?",
            a: "Yes, bulk orders for families, communities, and housing societies are welcome. Special arrangements can be made for such requirements.",
        },
        {
            q: "Do you use eco-friendly packaging?",
            a: "Yes. We use eco-friendly crates and sustainable packaging materials to minimize waste and ensure safe delivery.",
        },
        {
            q: "How can I contact customer support?",
            a: "You can reach our customer support via email or direct phone calls. Our team is available to assist you with all queries and concerns.",
        },
        {
            q: "Are discounts or loyalty programs available?",
            a: "Yes, we offer seasonal discounts and loyalty benefits for regular customers to make fresh produce more affordable.",
        },
        {
            q: "Do you follow fair trade practices?",
            a: "Yes, By sourcing directly from farmers and local mandis, we ensure fair pricing and support for farming communities.",
        },
        {
            q: "How can I stay updated on new products?",
            a: "You can stay updated on our new launches, seasonal produce, and offers by subscribing to our updates or following us on our digital platforms.",
        },
    ];

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
                toast.success("Message sent successfully!");
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
                toast.error("Something went wrong. Try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Network error. Please try again.");
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

                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-3 mt-1"
                            style={{
                                fontWeight: "400",
                                fontSize: "2.5rem",
                                color: "#553500",
                                fontFamily: "var(--font-playfair)",
                            }}
                        >
                            How can we help ?
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="mb-4"
                            style={{ color: "#553500", fontFamily: "var(--font-outfit)", fontSize: "18px", lineHeight: "30px" }}
                        >
                            We&apos;d love to hear from you! Whether you need product information, technical assistance, or just want to connect - we are here to help.
                        </motion.p>

                        <div>
                            <motion.h4
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-center mb-3 mt-5"
                                style={{
                                    fontWeight: "500",
                                    fontSize: "2.1rem",
                                    color: "#553500",
                                    lineHeight: "72px",
                                    fontFamily: "var(--font-playfair)",
                                }}>
                                Fequently Asked Questions</motion.h4>

                            {faqs.slice(0, visibleCount).map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        style={{
                                            border: "2px solid #553500",
                                            borderRadius: "16px",
                                            marginBottom: "1rem",
                                            overflow: "hidden",
                                            textAlign: isOpen ? "center" : "left",
                                            cursor: "pointer",
                                            maxWidth: "600px",
                                            marginInline: "auto",
                                        }}
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                    >
                                        {/* Question */}
                                        <div
                                            style={{
                                                padding: "6px 16px",
                                                fontFamily: "var(--font-outfit)",
                                                fontSize: "16px",
                                                fontWeight: "500",
                                                display: "flex",
                                                justifyContent: isOpen ? "center" : "space-between",
                                                alignItems: "center",
                                                gap: isOpen ? "8px" : "0",
                                                color: "#553500",
                                                maxWidth: "600px",
                                            }}
                                        >
                                            {item.q}
                                            {!isOpen && (
                                                <span style={{ fontSize: "20px" }}>
                                                    <i className="bi bi-chevron-down"></i>
                                                </span>
                                            )}
                                        </div>

                                        {/* Answer inside the same border */}
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                padding: isOpen ? "10px 16px" : "0 16px",
                                                fontFamily: "var(--font-outfit)",
                                                fontSize: "16px",
                                                color: "#553500",
                                                lineHeight: "1.5",
                                                backgroundColor: "#FFF8DC",
                                                textAlign: isOpen ? "center" : "left",
                                                maxWidth: "600px",
                                            }}
                                        >
                                            {item.a}
                                        </motion.div>
                                    </motion.div>
                                );
                            })}

                            <div className="d-flex justify-content-center">
                                <motion.button
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="btn btn-xl text-light rounded-pill fw-semibold"
                                    style={{ backgroundColor: "#553500", marginBottom: ".8rem", padding: "8px 20px" }}
                                    onClick={() => {
                                        if (visibleCount === 10) {
                                            setVisibleCount(20);
                                        } else {
                                            setVisibleCount(10);
                                        }
                                    }}
                                >
                                    {visibleCount === 10 ? "Load More" : "Show Less"}
                                </motion.button>
                            </div>
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
                    <Image
                        src="/Images/contact-bg-img.png"
                        alt="Farm Image"
                        className="position-absolute"
                        width={1000}
                        height={1800}
                        style={{ objectFit: "cover", top: 0, left: 0, zIndex: 0 }}
                    />

                    <div
                        className="position-relative"
                        style={{
                            fontFamily: "var(--font-outfit)",
                            backgroundColor: "#FFF5D9",
                            padding: ".2rem 1rem",
                            borderRadius: "0.75rem",
                            maxWidth: "65%",
                            zIndex: 1,
                            marginTop: "-15rem",
                        }}
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="fw-semibold"
                            style={{ color: "#553500", paddingTop: ".8rem" }}
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
                            <motion.div variants={itemVariants} className="row">
                                <div className="col-md-6">
                                    <label
                                        className="form-label"
                                        style={{ color: "#553500", fontSize: ".9rem" }}
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
                                <div className="col-md-6">
                                    <label
                                        className="form-label"
                                        style={{ color: "#553500", fontSize: ".9rem" }}
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
                                <div className="col-md-12">
                                    <label
                                        className="form-label"
                                        style={{ color: "#553500", fontSize: ".9rem" }}
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
                                <div className="col-md-12">
                                    <label
                                        className="form-label"
                                        style={{ color: "#553500", fontSize: ".9rem" }}
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
                                <div className="col-md-12">
                                    <label
                                        className="form-label"
                                        style={{ color: "#553500", fontSize: ".9rem" }}
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
                                <div className="col-md-12">
                                    <label
                                        className="form-label"
                                        style={{ color: "#553500", fontSize: ".9rem" }}
                                    >
                                        Service*
                                    </label>
                                    <select
                                        name="service"
                                        className="form-select"
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

                            <motion.div variants={itemVariants} className="row mb-2">
                                <div className="col-md-12">
                                    <label
                                        className="form-label"
                                        style={{ color: "#553500", fontSize: ".9rem" }}
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
                                    style={{ color: "#553500", fontSize: ".9rem" }}                                
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
                                        <div style={{ color: "red", fontSize: "0.75rem" }}>
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
                                    style={{ backgroundColor: "#553500", marginBottom: ".8rem" }}
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
