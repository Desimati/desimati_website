"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './../Style/Navbar.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/Images/logo.png" alt="Logo" height="40" />
        </a>

        {/* Navbar toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "active-nav" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link ${pathname === "/about" ? "active-nav" : ""}`}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/journey"
                className={`nav-link ${pathname === "/journey" ? "active-nav" : ""}`}
              >
                Our Journey
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/jobs"
                className={`nav-link ${pathname === "/jobs" ? "active-nav" : ""}`}
              >
                Job Openings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className={`nav-link ${pathname === "/contact" ? "active-nav" : ""}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
