"use client";

/* ===============================
        IMPORTS
=============================== */

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./About.module.css";

type JourneyStyle = CSSProperties & {
    "--journey-progress": string;
};

const chapters = [
    {
        number: "01",
        title: "Purpose",
        lines: ["Where curiosity", "became direction."],
    },
    {
        number: "02",
        title: "Build",
        lines: ["Where ideas", "started taking form."],
    },
    {
        number: "03",
        title: "Explore",
        lines: ["Where questions", "opened new paths."],
    },
    {
        number: "04",
        title: "Create",
        lines: ["Where learning", "became something real."],
    },
    {
        number: "05",
        title: "Next",
        lines: ["Where the story", "keeps moving."],
    },
];

const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

/* ===============================
        COMPONENT
=============================== */

export default function About() {

    const journeyRef = useRef<HTMLElement | null>(null);
    const chapterRefs = useRef<Array<HTMLElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {

        const journey = journeyRef.current;

        if (!journey) {
            return;
        }

        let frame = 0;

        const updateJourney = () => {

            frame = 0;

            const rect = journey.getBoundingClientRect();
            const viewportHeight = window.innerHeight || 1;
            const progressStart = viewportHeight * .48;
            const progressEnd = rect.height - viewportHeight * .72;
            const progress = clamp((-rect.top + progressStart) / Math.max(progressEnd, 1), 0, 1);

            journey.style.setProperty("--journey-progress", `${progress}`);

            let nextActive = 0;
            let nearestDistance = Number.POSITIVE_INFINITY;
            const viewportCenter = viewportHeight * .5;

            chapterRefs.current.forEach((chapter, index) => {

                if (!chapter) {
                    return;
                }

                const chapterRect = chapter.getBoundingClientRect();
                const chapterCenter = chapterRect.top + chapterRect.height * .5;
                const distance = Math.abs(chapterCenter - viewportCenter);

                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nextActive = index;
                }

            });

            setActiveIndex((current) => current === nextActive ? current : nextActive);

        };

        const requestUpdate = () => {

            if (frame) {
                return;
            }

            frame = window.requestAnimationFrame(updateJourney);

        };

        updateJourney();

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

    const journeyStyle: JourneyStyle = {
        "--journey-progress": "0",
    };

    return (

        <section
            id="journey"
            ref={journeyRef}
            className={styles.journey}
            style={journeyStyle}
            aria-labelledby="journey-title"
        >

            <div className={styles.timeline} aria-hidden="true">

                <div className={styles.timelineTrack}>
                    <span className={styles.timelineProgress}></span>
                </div>

                <ol className={styles.timelineNodes}>
                    {chapters.map((chapter, index) => (
                        <li
                            key={chapter.number}
                            className={index === activeIndex ? styles.activeNode : undefined}
                        >
                            <span>{chapter.number}</span>
                        </li>
                    ))}
                </ol>

            </div>

            <div className={styles.chapterStack}>

                {chapters.map((chapter, index) => {

                    const stateClass = index === activeIndex
                        ? styles.activeChapter
                        : index < activeIndex
                            ? styles.pastChapter
                            : styles.futureChapter;

                    return (

                        <article
                            key={chapter.number}
                            ref={(element) => {
                                chapterRefs.current[index] = element;
                            }}
                            className={`${styles.chapter} ${stateClass}`}
                            aria-labelledby={index === 0 ? "journey-title" : undefined}
                        >

                            <div className={styles.chapterInner}>

                                <span className={styles.chapterNumber}>
                                    {chapter.number}
                                </span>

                                <h2
                                    id={index === 0 ? "journey-title" : undefined}
                                    className={styles.chapterTitle}
                                >
                                    {chapter.title}
                                </h2>

                                <p className={styles.chapterLine}>
                                    <span>{chapter.lines[0]}</span>
                                    <span>{chapter.lines[1]}</span>
                                </p>

                            </div>

                        </article>

                    );

                })}

            </div>

        </section>

    );

}
