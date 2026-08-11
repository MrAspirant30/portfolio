/* ===============================
        IMPORTS
=============================== */

import styles from "./About.module.css";

/* ===============================
        COMPONENT
=============================== */

export default function About() {

    return (

        <section id="journey" className={styles.chapter}>

            {/* ===============================
                    CHAPTER INTRO
            =============================== */}

            <div className={styles.chapterIntro}>

                <span className={styles.chapterNumber}>
                    CHAPTER ONE
                </span>

                <h2 className={styles.chapterTitle}>
                    Where Curiosity
                    <br />
                    Became Purpose
                </h2>

            </div>

            {/* ===============================
                    OPENING
            =============================== */}

            <div className={styles.story}>

                <p className={styles.opening}>
                    Every journey starts with a question.
                </p>

                <p className={styles.shortLine}>
                    Mine was simple.
                </p>

            </div>

            {/* ===============================
                    FEATURE QUOTE
            =============================== */}

            <div className={styles.quoteSection}>

                <span className={styles.quoteMark}>
                    &ldquo;
                </span>

                <blockquote>
                    What if technology could solve
                    <br />
                    problems that truly matter?
                </blockquote>

                <span className={styles.quoteMark}>
                    &rdquo;
                </span>

            </div>

            {/* ===============================
                    STORY CONTINUES
            =============================== */}

            <div className={styles.story}>

                <p>
                    One question became curiosity.
                </p>

                <p>
                    Curiosity became learning.
                </p>

                <p>
                    Learning became purpose.
                </p>

                <p>
                    Purpose became direction.
                </p>

            </div>

            {/* ===============================
                    SECOND PART
            =============================== */}

            <div className={styles.story}>

                <p>
                    Choosing Computer Science was never
                    simply about earning a degree.
                </p>

                <p>
                    It was about gaining the ability
                    to build, experiment, and solve.
                </p>

                <p>
                    That curiosity slowly led me toward
                    Artificial Intelligence.
                </p>

                <p>
                    Then came research.
                </p>

                <p>
                    Then entrepreneurship.
                </p>

                <p>
                    Different paths.
                </p>

                <p className={styles.emphasis}>
                    One destination.
                </p>

                <p className={styles.emphasis}>
                    Solving meaningful real-world problems.
                </p>

            </div>

            {/* ===============================
                    CLOSING
            =============================== */}

            <div className={styles.ending}>

                <h2>
                    This is only
                    <br />
                    Chapter One.
                </h2>

                <p>
                    The story is still being written.
                </p>

            </div>

        </section>

    );

}