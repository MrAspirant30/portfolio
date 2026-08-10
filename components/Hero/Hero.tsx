"use client";

/* ===============================
        IMPORTS
=============================== */

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import styles from "./Hero.module.css";

type HeroStyle = CSSProperties & {
    "--hero-bg-y": string;
    "--hero-type-y": string;
    "--hero-portrait-y": string;
    "--hero-portrait-scale": string;
    "--hero-tech-opacity": string;
};

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

/* ===============================
        COMPONENT
=============================== */

export default function Hero() {

    const heroRef = useRef<HTMLElement | null>(null);

    useEffect(() => {

        const hero = heroRef.current;

        if (!hero) {
            return;
        }

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (reduceMotion.matches) {
            return;
        }

        const lightMotion = window.matchMedia("(max-width: 768px)");
        let frame = 0;

        const updateHeroMotion = () => {

            frame = 0;

            const rect = hero.getBoundingClientRect();
            const viewportHeight = window.innerHeight || 1;

            if (rect.bottom < 0 || rect.top > viewportHeight) {
                return;
            }

            const progress = clamp(-rect.top / Math.max(rect.height, 1), 0, 1);
            const mobileFactor = lightMotion.matches ? .45 : 1;

            hero.style.setProperty("--hero-bg-y", `${progress * 60 * mobileFactor}px`);
            hero.style.setProperty("--hero-type-y", `${progress * -95 * mobileFactor}px`);
            hero.style.setProperty("--hero-portrait-y", `${progress * -130 * mobileFactor}px`);
            hero.style.setProperty("--hero-portrait-scale", `${1 - progress * .055 * mobileFactor}`);
            hero.style.setProperty("--hero-tech-opacity", `${1 - progress * 1.35}`);

        };

        const requestUpdate = () => {

            if (frame) {
                return;
            }

            frame = window.requestAnimationFrame(updateHeroMotion);

        };

        updateHeroMotion();

        window.addEventListener("scroll", requestUpdate, {
            passive: true,
        });
        window.addEventListener("resize", requestUpdate);

        return () => {

            if (frame) {
                window.cancelAnimationFrame(frame);
            }

            window.removeEventListener("scroll", requestUpdate);
            window.removeEventListener("resize", requestUpdate);

        };

    }, []);

    const heroStyle: HeroStyle = {
        "--hero-bg-y": "0px",
        "--hero-type-y": "0px",
        "--hero-portrait-y": "0px",
        "--hero-portrait-scale": "1",
        "--hero-tech-opacity": "1",
    };

    return (

        <section
            ref={heroRef}
            className={styles.hero}
            style={heroStyle}
            aria-labelledby="hero-title"
        >

            <div className={styles.background} aria-hidden="true">
                <div className={styles.gridLayer}></div>
                <div className={styles.atmosphere}></div>
                <div className={styles.measureLine}></div>
            </div>

            <div className={styles.stage}>

                <div className={styles.copy}>

                    <h1 id="hero-title" className={styles.title}>
                        <span>Jyotiprasad</span>
                        <span>Borgohain</span>
                    </h1>

                    <p className={styles.role}>
                        AI <span aria-hidden="true">•</span> RESEARCH <span aria-hidden="true">•</span> BUILDING
                    </p>

                    <p className={styles.philosophy}>
                        From Curiosity to Innovation.
                    </p>

                    <div className={styles.buttons}>
                        <a href="#projects" className={styles.primary}>
                            Explore My Work
                        </a>

                        <a href="#journey" className={styles.secondary}>
                            Begin the Journey
                        </a>
                    </div>

                </div>

                <div className={styles.portraitStage}>

                    <div className={styles.portraitFrame}>

                        <Image
                            src="/images/profile.jpg"
                            alt="Jyotiprasad Borgohain"
                            fill
                            priority
                            sizes="(max-width: 768px) 86vw, 42vw"
                            className={styles.photo}
                        />

                        <div className={styles.frameLines} aria-hidden="true"></div>

                        <div className={`${styles.technicalLabel} ${styles.labelTop}`}>
                            <span>Identity</span>
                            <strong>Jyotiprasad</strong>
                        </div>

                        <div className={`${styles.technicalLabel} ${styles.labelRight}`}>
                            <span>Focus</span>
                            <strong>AI + Research</strong>
                        </div>

                        <div className={`${styles.technicalLabel} ${styles.labelBottom}`}>
                            <span>State</span>
                            <strong>Building</strong>
                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.scrollCue} aria-hidden="true">
                <span></span>
                <p>Scroll</p>
            </div>

        </section>

    );

}
