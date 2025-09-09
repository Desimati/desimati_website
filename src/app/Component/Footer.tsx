"use client";
import Link from "next/link";
import "./../Style/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img src="/Images/logo.png" alt="Logo" height="60" className="mb-3" />
                        <p>Send us an email -</p>
                        <p className="footer-email">contactdesimati@gmail.com</p>
                    </div>

                    <div className="col-md-2 mb-4">
                        <h5>Important Links</h5>
                        <ul className="list-unstyled">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 mb-4">
                        <h5>Pages</h5>
                        <ul className="list-unstyled">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/journey">Our Journey</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5>Address</h5>
                        <p>
                            <b>Desimati Agri Technologies And Services Private Limited</b>
                            <br />
                            Plot No. 380, JDA Scheme 14,<br />
                            Vijay Nagar Road, Jabalpur, <br />
                            Madhya Pradesh-482002
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
