"use client";

/* ===============================
        IMPORTS
=============================== */

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

type Theme = "light" | "dark";

const getSystemTheme = (): Theme =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getStoredTheme = (): Theme | null => {
    const storedTheme = window.localStorage.getItem("theme");

    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
};

const applyTheme = (theme: Theme) => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
};

/* ===============================
        COMPONENT
=============================== */

export default function Navbar() {

    const [showHeader, setShowHeader] = useState(true);
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof document === "undefined") {
            return "light";
        }

        return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    });

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

    useEffect(() => {

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleSystemThemeChange = () => {
            if (getStoredTheme()) {
                return;
            }

            const nextTheme = getSystemTheme();
            setTheme(nextTheme);
            applyTheme(nextTheme);
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        };

    }, []);

    const handleThemeToggle = () => {

        const nextTheme = theme === "dark" ? "light" : "dark";

        window.localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
        applyTheme(nextTheme);

    };

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
                        src="/images/profile.jpg"
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
                        type="button"
                        className={styles.themeButton}
                        aria-label="Toggle color theme"
                        onClick={handleThemeToggle}
                    >
                        <span aria-hidden="true">
                            Theme
                        </span>
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
