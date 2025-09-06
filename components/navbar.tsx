"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#FAE100",
    borderBottom: "1px solid #EAAB00",
    position: "relative",
    zIndex: 10,
  };

  const innerStyle: React.CSSProperties = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  };

  const brandStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    color: "#000000",
  };

  const navStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 16,
  };

  const linkStyle: React.CSSProperties = {
    color: "#000000",
    textDecoration: "none",
    fontWeight: 500,
  };

  const ctaStyle: React.CSSProperties = {
    backgroundColor: "#6649AE",
    color: "#FFFFFF",
    border: 0,
    borderRadius: 6,
    padding: "8px 12px",
    fontWeight: 600,
    cursor: "pointer",
  };

  const mobileToggleStyle: React.CSSProperties = {
    display: "none",
    background: "transparent",
    border: "1px solid #EAAB00",
    borderRadius: 6,
    padding: "6px 8px",
    cursor: "pointer",
  };

  const mobileMenuStyle: React.CSSProperties = {
    display: isMobileMenuOpen ? "flex" : "none",
    flexDirection: "column",
    gap: 12,
    padding: "12px 16px",
    borderTop: "1px solid #EAAB00",
    backgroundColor: "#F2EDA8",
  };

  return (
    <header style={containerStyle}>
      <div style={innerStyle}>
        <Link href="/" style={brandStyle} onClick={closeMobileMenu}>
          <h1 style={titleStyle}>Warrior Hacks</h1>
        </Link>

        <nav className="navbar-links" style={navStyle}>
          <Link href="/#about" style={linkStyle} onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/#schedule" style={linkStyle} onClick={closeMobileMenu}>
            Schedule
          </Link>
          <Link href="/#contact" style={linkStyle} onClick={closeMobileMenu}>
            Contact
          </Link>
          <Link href="/signin" style={linkStyle} onClick={closeMobileMenu}>
            Sign In
          </Link>
          <Link href="/upload" style={linkStyle} onClick={closeMobileMenu}>
            Submit
          </Link>
          <Link href="/recipes" style={linkStyle} onClick={closeMobileMenu}>
            Projects
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          style={mobileToggleStyle}
          className="navbar-toggle"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>

      <div className="navbar-mobile" style={mobileMenuStyle}>
        <Link href="/#about" style={linkStyle} onClick={closeMobileMenu}>
          About
        </Link>
        <Link href="/#schedule" style={linkStyle} onClick={closeMobileMenu}>
          Schedule
        </Link>
        <Link href="/#contact" style={linkStyle} onClick={closeMobileMenu}>
          Contact
        </Link>
        <Link href="/signin" style={linkStyle} onClick={closeMobileMenu}>
          Sign In
        </Link>
        <Link href="/upload" style={linkStyle} onClick={closeMobileMenu}>
          Submit
        </Link>
        <Link href="/recipes" style={linkStyle} onClick={closeMobileMenu}>
          Projects
        </Link>
        <button style={ctaStyle} onClick={closeMobileMenu}>Close</button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .navbar-links { display: none; }
          .navbar-toggle { display: inline-block; }
        }
      `}</style>
    </header>
  );
}



