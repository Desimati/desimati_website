"use client";
import Link from "next/link";
import "./../Style/Footer.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img src="/Images/logo.png" alt="Logo" height="60" className="mb-3" />
                        <p>Send us an email -</p>
                        <p className="footer-email">contactus@desimati.com</p>
                        <p className='mt-2'>+91-6261497479,+91-7024145757</p>
                    </div>

                    <div className="col-md-2 mb-4">
                        <h5>Important Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEE3kr4IbM6mwAAAZkzDZgoFDUhadAek8KTo0awMGtD_vEDn5JzL7yViViW-xd8FmXfbmxj7RB6ZvmwwST3fP0AwsW82m-zMRFm-DupZyVZbf1m_cvcjt3Cz2iaLP5bPxjYE9M=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fdesimati-agri-technologies-and-services-pvt-ltd%2F" target="_blank" className="d-flex align-items-center">
                                    <Image
                                        src="/Images/linkedin.png"
                                        alt="LinkedIn"
                                        width={18}
                                        height={18}
                                        className="me-2"
                                    />
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/desimatijabalpur/?igsh=MWlobGd6NmV0bjV1eg%3D%3D&utm_source=qr#" target="_blank" className="d-flex align-items-center">
                                    <Image
                                        src="/Images/instagram.png"
                                        alt="LinkedIn"
                                        width={18}
                                        height={18}
                                        className="me-2"
                                    />
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.facebook.com/desimatijabalpur" target="_blank" className="d-flex align-items-center">
                                    <Image
                                        src="/Images/facebook.png"
                                        alt="LinkedIn"
                                        width={18}
                                        height={18}
                                        className="me-2"
                                    />
                                    Facebook
                               </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-2 mb-4">
                        <h5>Pages</h5>
                        <ul className="list-unstyled">
                            <li><Link href="/">Home</Link></li>
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
