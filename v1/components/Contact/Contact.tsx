/* ===============================
        IMPORTS
=============================== */

import styles from "./Contact.module.css";

/* ===============================
        COMPONENT
=============================== */

export default function Contact() {

    return (

        <section id="contact" className={styles.contact}>

            {/* ===============================
                    EPILOGUE INTRO
            =============================== */}

            <div className={styles.intro}>

                <span className={styles.label}>
                    EPILOGUE
                </span>

                <h2>
                    The Journey
                    <br />
                    Continues
                </h2>

            </div>

            {/* ===============================
                    MESSAGE
            =============================== */}

            <div className={styles.message}>

                <p>
                    I&apos;m still figuring things out.
                </p>

                <p>
                    I&apos;m still learning.
                </p>

                <p>
                    And there&apos;s a lot more I want to build.
                </p>

            </div>

            {/* ===============================
                    CTA
            =============================== */}

            <div className={styles.cta}>

                <p>
                    If you&apos;d like to connect, collaborate,
                    or just talk about an idea —
                </p>

                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=jyotiprasad.borgohain24@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                >
                    Let&apos;s Build Together
                </a>

            </div>

            {/* ===============================
                    LINKS
            =============================== */}

            <div className={styles.links}>


                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=jyotiprasad.borgohain24@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email
                </a>

                <a
                    href="https://www.linkedin.com/in/jyotiprasad-borgohain-b1982735b/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

                <a
                    href="https://github.com/MrAspirant30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

            </div>

            {/* ===============================
                    FINAL LINE
            =============================== */}

            <div className={styles.footerLine}>

                <p>
                    Every ending is the beginning of another chapter.
                </p>

            </div>

        </section>

    );

}