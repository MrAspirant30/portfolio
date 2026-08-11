/* ===============================
        IMPORTS
=============================== */

import styles from "./Skills.module.css";

/* ===============================
        COMPONENT
=============================== */

export default function Skills() {

    return (

        <section id="skills" className={styles.skills}>

            {/* ===============================
                    CHAPTER INTRO
            =============================== */}

            <div className={styles.chapterIntro}>

                <span className={styles.chapterNumber}>
                    CHAPTER TWO
                </span>

                <h2 className={styles.chapterTitle}>
                    Learning to Build
                </h2>

                <p className={styles.introText}>
                    I didn&apos;t learn technology to collect names on a resume.
                    I learned it because I wanted to turn ideas into something real.
                </p>

            </div>

            {/* ===============================
                    FOUNDATION
            =============================== */}

            <div className={styles.section}>

                <span className={styles.sectionNumber}>
                    01
                </span>

                <div className={styles.sectionContent}>

                    <h3>
                        The Foundation
                    </h3>

                    <p>
                        Learning to think through problems before
                        learning to build solutions.
                    </p>

                    <div className={styles.cards}>

                        <div className={styles.card}>

                            <span className={styles.cardIcon}>
                                C
                            </span>

                            <div>

                                <h4>C</h4>

                                <p>Foundation</p>

                            </div>

                        </div>

                        <div className={styles.card}>

                            <span className={styles.cardIcon}>
                                Py
                            </span>

                            <div>

                                <h4>Python</h4>

                                <p>Growing</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ===============================
                    WEB
            =============================== */}

            <div className={styles.section}>

                <span className={styles.sectionNumber}>
                    02
                </span>

                <div className={styles.sectionContent}>

                    <h3>
                        The Web
                    </h3>

                    <p>
                        Learning how ideas become interfaces
                        and applications people can interact with.
                    </p>

                    <div className={styles.cards}>

                        <div className={styles.card}>

                            <span className={styles.cardIcon}>
                                &lt;/&gt;
                            </span>

                            <div>

                                <h4>HTML</h4>

                                <p>Building</p>

                            </div>

                        </div>

                        <div className={styles.card}>

                            <span className={styles.cardIcon}>
                                #
                            </span>

                            <div>

                                <h4>CSS</h4>

                                <p>Building</p>

                            </div>

                        </div>

                        <div className={styles.card}>

                            <span className={styles.cardIcon}>
                                JS
                            </span>

                            <div>

                                <h4>JavaScript</h4>

                                <p>Exploring</p>

                            </div>

                        </div>

                        <div className={styles.card}>

                            <span className={styles.cardIcon}>
                                N
                            </span>

                            <div>

                                <h4>Next.js</h4>

                                <p>Exploring</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ===============================
                    DIRECTION
            =============================== */}

            <div className={styles.section}>

                <span className={styles.sectionNumber}>
                    03
                </span>

                <div className={styles.sectionContent}>

                    <h3>
                        The Direction
                    </h3>

                    <p>
                        The areas I&apos;m gradually moving toward
                        as I continue learning and building.
                    </p>

                    <div className={styles.cards}>

                        <div className={styles.card}>

                            <span className={styles.cardIcon}>
                                AI
                            </span>

                            <div>

                                <h4>Artificial Intelligence</h4>

                                <p>Direction</p>

                            </div>

                        </div>

                        <div className={styles.card}>

                            <span className={styles.cardIcon}>
                                R
                            </span>

                            <div>

                                <h4>Research</h4>

                                <p>Direction</p>

                            </div>

                        </div>

                        <div className={styles.card}>

                            <span className={styles.cardIcon}>
                                E
                            </span>

                            <div>

                                <h4>Entrepreneurship</h4>

                                <p>Direction</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ===============================
                    CLOSING
            =============================== */}

            <div className={styles.ending}>

                <p>
                    Every skill began as a beginner&apos;s first attempt.
                </p>

            </div>

        </section>

    );

}