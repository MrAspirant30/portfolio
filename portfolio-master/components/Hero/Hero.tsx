/* ===============================
        IMPORTS
=============================== */

import Image from "next/image";
import styles from "./Hero.module.css";

/* ===============================
        COMPONENT
=============================== */

export default function Hero() {

    return (

        <section className={styles.hero}>

            {/* ===============================
                    BACKGROUND
            =============================== */}

            <div className={styles.blurOne}></div>

            <div className={styles.blurTwo}></div>

            {/* ===============================
                    CONTAINER
            =============================== */}

            <div className={styles.container}>

                {/* ===============================
                        LEFT SIDE
                =============================== */}

                <div className={styles.left}>

                    <p className={styles.greeting}>

                        👋 Hey! I&apos;m

                    </p>

                    <h1 className={styles.title}>

                        Jyotiprasad
                        <br />
                        Borgohain

                    </h1>

                    <p className={styles.role}>

                        AI Enthusiast • Research Explorer • Entrepreneur

                    </p>

                    <h3 className={styles.quote}>

                        From Curiosity to Innovation.

                    </h3>

                    <p className={styles.description}>

                        Passionate about Artificial Intelligence,
                        research, and entrepreneurship.
                        Currently learning, building, and exploring
                        ideas that create real-world impact.

                    </p>

                    {/* ===============================
                            BUTTONS
                    =============================== */}

                    <div className={styles.buttons}>

                        <a href="#projects" className={styles.primary}>

                            🚀 Explore My Work

                        </a>

                        <a href="#journey" className={styles.secondary}>

                            📖 Begin the Journey

                        </a>

                    </div>

                </div>

                {/* ===============================
                        RIGHT SIDE
                =============================== */}

                <div className={styles.right}>

                    <div className={styles.photoCard}>

                        <Image

                            src="/images/profile.jpg"

                            alt="Jyotiprasad Borgohain"

                            width={430}

                            height={430}

                            priority

                            className={styles.photo}

                        />

                    </div>

                </div>

            </div>

            {/* ===============================
                    SCROLL
            =============================== */}

            <div className={styles.scroll}>

                ↓ Scroll

            </div>

        </section>

    );

}