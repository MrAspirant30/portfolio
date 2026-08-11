"use client";

/* ===============================
        IMPORTS
=============================== */

import { useEffect } from "react";
import styles from "./Research.module.css";

/* ===============================
        COMPONENT
=============================== */

export default function Research() {

    useEffect(() => {

        const elements = document.querySelectorAll(
            `.${styles.reveal}, .${styles.questionReveal}`
        );

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(styles.visible);

                        entry.target.classList.remove(styles.hidden);

                    } else {

                        entry.target.classList.remove(styles.visible);

                        entry.target.classList.add(styles.hidden);

                    }

                });

            },
            {
                threshold: 0.15,
            }
        );

        elements.forEach((element) => {

            element.classList.add(styles.hidden);

            observer.observe(element);

        });

        return () => {

            observer.disconnect();

        };

    }, []);

    return (

        <section id="research" className={styles.research}>

            {/* ===============================
                    CHAPTER INTRO
            =============================== */}

            <div className={styles.chapterIntro}>

                <span className={styles.chapterNumber}>
                    CHAPTER FOUR
                </span>

                <h2 className={styles.chapterTitle}>
                    Exploring the
                    <br />
                    Unknown
                </h2>

                <p className={styles.introText}>
                    There are questions I don&apos;t have answers to yet.
                    And that&apos;s exactly what makes them worth exploring.
                </p>

            </div>

            {/* ===============================
                    THREE DIRECTIONS
            =============================== */}

            <div className={styles.directions}>

                {/* AI */}

                <article className={`${styles.direction} ${styles.reveal}`}>

                    <span className={styles.number}>
                        01
                    </span>

                    <h3>
                        AI
                    </h3>

                    <p>
                        Understanding what&apos;s behind
                        intelligent systems.
                    </p>

                </article>

                {/* RESEARCH */}

                <article className={`${styles.direction} ${styles.reveal}`}>

                    <span className={styles.number}>
                        02
                    </span>

                    <h3>
                        Research
                    </h3>

                    <p>
                        Investigating problems through
                        evidence and exploration.
                    </p>

                </article>

                {/* ENTREPRENEURSHIP */}

                <article className={`${styles.direction} ${styles.reveal}`}>

                    <span className={styles.number}>
                        03
                    </span>

                    <h3>
                        Entrepreneurship
                    </h3>

                    <p>
                        Turning useful ideas into solutions
                        that can create real-world impact.
                    </p>

                </article>

            </div>

            {/* ===============================
        QUESTIONS
=============================== */}

            <div className={styles.questions}>

                <span className={styles.questionLabel}>
                    QUESTIONS I&apos;M EXPLORING
                </span>

                <div className={styles.questionList}>

                    <p>
                        How can we understand AI deeply enough
                        to build better systems?
                    </p>

                    <p>
                        How can research turn investigation
                        into solutions for real problems?
                    </p>

                    <p>
                        How can useful technology become
                        something people genuinely need?
                    </p>

                </div>

            </div>

            {/* ===============================
                    ENDING
            =============================== */}

            <div className={styles.ending}>

                <p>
                    I don&apos;t need to know all the answers yet.
                </p>

                <h3>
                    I just need to keep asking
                    <br />
                    better questions.
                </h3>

            </div>

        </section>

    );

}