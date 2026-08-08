"use client";

/* ===============================
        IMPORTS
=============================== */

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

/* ===============================
        COMPONENT
=============================== */

export default function Navbar() {

    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {

        let lastScrollY = window.scrollY;

        const handleScroll = () => {

            const currentScrollY = window.scrollY;

            if (currentScrollY <= 20) {

                setShowHeader(true);

            } else if (currentScrollY > lastScrollY) {

                setShowHeader(false);

            } else {

                setShowHeader(true);

            }

            lastScrollY = currentScrollY;

        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {

            window.removeEventListener("scroll", handleScroll);

        };

    }, []);

    return (

        <header
            className={`${styles.header} ${showHeader ? styles.visible : styles.hidden
                }`}
        >

            <nav className={styles.navbar}>

                {/* ===============================
                        LOGO
                =============================== */}

                <a href="#home" className={styles.logo}>

                    <Image
                        src="public/images/profile.png"
                        alt="Jyotiprasad"
                        width={52}
                        height={52}
                        className={styles.profile}
                    />

                    <div className={styles.logoText}>

                        <h2>Jyotiprasad</h2>

                        <span>Portfolio</span>

                    </div>

                </a>

                {/* ===============================
                        NAVIGATION
                =============================== */}

                <ul className={styles.navLinks}>

                    <li>
                        <a href="#home">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#journey">
                            Journey
                        </a>
                    </li>

                    <li>
                        <a href="#skills">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#research">
                            Research
                        </a>
                    </li>

                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>

                </ul>

                {/* ===============================
                        ACTIONS
                =============================== */}

                <div className={styles.actions}>

                    <button
                        className={styles.themeButton}
                        aria-label="Toggle theme"
                    >
                        🌙
                    </button>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeButton}
                    >
                        Resume
                    </a>

                </div>

            </nav>

        </header>

    );

}