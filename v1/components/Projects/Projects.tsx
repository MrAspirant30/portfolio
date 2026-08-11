/* ===============================
        IMPORTS
=============================== */

import styles from "./Projects.module.css";

/* ===============================
        COMPONENT
=============================== */

export default function Projects() {

    return (

        <section id="projects" className={styles.projects}>

            {/* ===============================
                    CHAPTER INTRO
            =============================== */}

            <div className={styles.chapterIntro}>

                <span className={styles.chapterNumber}>
                    CHAPTER THREE
                </span>

                <h2 className={styles.chapterTitle}>
                    Turning Ideas
                    <br />
                    Into Reality
                </h2>

                <p className={styles.introText}>
                    Ideas are easy to imagine.
                    Building them is where the learning begins.
                </p>

            </div>

            {/* ===============================
                    PROJECT
            =============================== */}

            <article className={styles.project}>

                <div className={styles.projectHeader}>

                    <span className={styles.projectNumber}>
                        01
                    </span>

                    <div>

                        <span className={styles.status}>
                            IN PROGRESS
                        </span>

                        <h3>
                            A.L.Y.A.
                        </h3>

                        <p className={styles.projectName}>
                            Autonomous Logic &amp; Yielding Assistant
                        </p>

                    </div>

                </div>

                {/* ===============================
                        PROBLEM
                =============================== */}

                <div className={styles.storyBlock}>

                    <span className={styles.label}>
                        THE PROBLEM
                    </span>

                    <p>
                        I wanted to explore what it would take
                        to build my own AI assistant instead of
                        simply using one.
                    </p>

                </div>

                {/* ===============================
                        IDEA
                =============================== */}

                <div className={styles.storyBlock}>

                    <span className={styles.label}>
                        THE IDEA
                    </span>

                    <p>
                        A.L.Y.A. began as a personal project
                        to learn Python through building something
                        that could eventually grow into an intelligent
                        assistant.
                    </p>

                </div>

                {/* ===============================
                        BUILD
                =============================== */}

                <div className={styles.storyBlock}>

                    <span className={styles.label}>
                        THE BUILD
                    </span>

                    <p>
                        The project has evolved through learning
                        Python fundamentals, organizing the application
                        into modules, and building a frontend interface
                        for the assistant.
                    </p>

                </div>

                {/* ===============================
                        LEARNING
                =============================== */}

                <div className={styles.storyBlock}>

                    <span className={styles.label}>
                        WHAT I LEARNED
                    </span>

                    <p>
                        Building A.L.Y.A. has taught me that learning
                        programming becomes much more meaningful when
                        every concept has a place in something I&apos;m actually
                        trying to build.
                    </p>

                </div>

                {/* ===============================
                        NEXT
                =============================== */}

                <div className={styles.nextBlock}>

                    <span className={styles.label}>
                        WHAT&apos;S NEXT
                    </span>

                    <p>
                        A.L.Y.A. is still evolving.
                        The project will continue growing as
                        my understanding of Python, AI, and software
                        development grows.
                    </p>

                </div>

            </article>

            {/* ===============================
                    ENDING
            =============================== */}

            <div className={styles.ending}>

                <h3>
                    I&apos;m still building.
                </h3>

                <p>
                    And this is only the beginning.
                </p>

            </div>

        </section>

    );

}