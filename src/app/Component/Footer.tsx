"use client";
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

                    <div className="col-md-4 mb-4">
                        <h5>Important Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                            <li><a href="#">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5>Address</h5>
                        <p>
                            Line 1, Section 1A,<br />
                            Area, City, <br />
                            State.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center mt-4 mb-0 pb-0">
                <h1 className="footer-big-text">Rooted in farms driven by<br /> fairness committed to you</h1>
            </div>
        </footer>
    );
}
