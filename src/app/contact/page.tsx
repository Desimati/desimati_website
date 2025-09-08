"use client";

export default function Contact() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Left Side */}
                <div className="col-md-6 d-flex align-items-center" style={{ backgroundColor: "#FFF5D9", height: "92vh" }}>
                    <div className="container py-5">
                        {/* Small heading */}
                        <p className="mb-2" style={{ color: "#B16E01", fontSize: "0.9rem" }}>
                            Contact us
                        </p>

                        {/* Big heading */}
                        <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem", color: "#553500", fontFamily: 'playfair display' }}>
                            How can we help ?
                        </h1>

                        {/* Paragraph */}
                        <p className="mb-4" style={{ color: "#553500", lineHeight: "1.7" }}>
                            Lorem ipsum dolor sit amet consectetur. Dignissim enim faucibus blandit massa non id.
                            Nunc vitae dictum senectus pharetra. Feugiat dui suspendisse laoreet vitae nibh purus quis tellus.
                            Elementum orci vivamus ultricies quis arcu amet faucibus sed odio. Augue vestibulum nisl tortor vel sapien
                            sollicitudin. In massa.
                        </p>

                        {/* Images */}
                        <div className="row g-3">
                            <div className="col-6">
                                <img
                                    src="/Images/contact-person-img.jpg"
                                    alt="Person talking"
                                    className="img-fluid rounded-3 shadow-sm"
                                />
                            </div>
                            <div className="col-6 d-flex align-items-end">
                                <img
                                    src="/Images/contact-building-img.jpg"
                                    alt="Building"
                                    className="img-fluid rounded-3 shadow-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-md-6 p-0">
                    <img
                        src="/Images/contact-bg-img.png"
                        alt="Farm Image"
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    );
}
