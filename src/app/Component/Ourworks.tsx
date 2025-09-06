"use client";
import "./../Style/OurWorks.css";

export default function OurWorks() {
    return (
        <section className="ourworks-section container-fluid px-4">
            <div className="section-heading">
                <h2 className="section-title">Our works</h2>
                <img src="/Images/heading.png" alt="Decor" className="section-decor" />
            </div>

            <div className="ourworks-image-wrapper">
                <img
                    src="/Images/ourworks.png"
                    alt="Our Work"
                    className="ourworks-image"
                />
            </div>

            <p className="ourworks-text">
                Delivering fresh, quality farm produce through a smart, tech-driven
                supply chain — from local farms to your table, swiftly and sustainably.
            </p>

            <div className="ourworks-image-wrapper mt-4">
                <img
                    src="/Images/ourworks1.png"
                    alt="Our Work"
                    className="ourworks-image"
                />
            </div>

            <p className="ourworks-text">
                Delivering fresh, quality farm produce through a smart, tech-driven
                supply chain — from local farms to your table, swiftly and sustainably.
            </p>

            <div className="ourworks-image-wrapper mt-4">
                <img
                    src="/Images/ourworks2.png"
                    alt="Our Work"
                    className="ourworks-image"
                />
            </div>

            <p className="ourworks-text"> Delivering fresh, quality farm produce through a smart, tech-driven
                supply chain — from local farms to your table, swiftly and sustainably.
            </p>
        </section>
    );
}
