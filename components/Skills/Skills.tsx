"use client";

/* ===============================
        IMPORTS
=============================== */

import { useState } from 'react';
import styles from './Skills.module.css';

/* ===============================
        DATA
=============================== */

const skillsData = {
    ai: ["LLMs", "AI Agents", "APIs"],
    web: ["Next.js", "React", "TypeScript", "JavaScript", "HTML/CSS"],
    research: ["Investigation", "Exploration", "Evidence"],
    python: ["Fundamentals", "Modular Design"],
    tools: ["C", "Git", "CLI"]
};

type SkillCategory = keyof typeof skillsData | 'build' | null;

/* ===============================
        COMPONENT
=============================== */

export default function Skills() {
    const [activeSkill, setActiveSkill] = useState<SkillCategory>(null);

    const handleActivate = (skill: SkillCategory) => {
        setActiveSkill(skill);
    };

    const handleDeactivate = () => {
        setActiveSkill(null);
    };

    const handleInteraction = (skill: SkillCategory) => {
        // Toggle behavior for touch devices, or if the skill is already active
        if (window.matchMedia("(pointer: coarse)").matches || activeSkill === skill) {
            setActiveSkill(prev => prev === skill ? null : skill);
        } else {
            setActiveSkill(skill);
        }
    };
    
    const renderTechList = (skill: keyof typeof skillsData) => (
        <div className={styles.techList}>
            {skillsData[skill].map(tech => <span key={tech}>{tech}</span>)}
        </div>
    );

    const isNodeActive = (skill: SkillCategory) => activeSkill === skill;

    return (
        <section id="skills" className={styles.skills}>
            <h2 className={styles.title}>Visual Ecosystem</h2>
            <div className={styles.ecosystem} onMouseLeave={handleDeactivate}>
                
                {/* Center Node */}
                <button
                    type="button"
                    className={`${styles.node} ${styles.centerNode} ${isNodeActive('build') ? styles.active : ''}`}
                    onClick={() => handleInteraction('build')}
                    onFocus={() => handleActivate('build')}
                    onMouseEnter={() => handleActivate('build')}
                >
                    <span className={styles.mainSkill}>BUILD</span>
                </button>

                {/* AI Node */}
                <button
                    type="button"
                    className={`${styles.node} ${styles.ai} ${isNodeActive('ai') ? styles.active : ''}`}
                    onClick={() => handleInteraction('ai')}
                    onFocus={() => handleActivate('ai')}
                    onMouseEnter={() => handleActivate('ai')}
                >
                    <span className={styles.mainSkill}>AI</span>
                    {renderTechList('ai')}
                </button>

                {/* Research Node */}
                <button
                    type="button"
                    className={`${styles.node} ${styles.research} ${isNodeActive('research') ? styles.active : ''}`}
                    onClick={() => handleInteraction('research')}
                    onFocus={() => handleActivate('research')}
                    onMouseEnter={() => handleActivate('research')}
                >
                    <span className={styles.mainSkill}>RESEARCH</span>
                    {renderTechList('research')}
                </button>
                
                {/* Web Node */}
                <button
                    type="button"
                    className={`${styles.node} ${styles.web} ${isNodeActive('web') ? styles.active : ''}`}
                    onClick={() => handleInteraction('web')}
                    onFocus={() => handleActivate('web')}
                    onMouseEnter={() => handleActivate('web')}
                >
                    <span className={styles.mainSkill}>WEB</span>
                    {renderTechList('web')}
                </button>

                {/* Python Node */}
                <button
                    type="button"
                    className={`${styles.node} ${styles.python} ${isNodeActive('python') ? styles.active : ''}`}
                    onClick={() => handleInteraction('python')}
                    onFocus={() => handleActivate('python')}
                    onMouseEnter={() => handleActivate('python')}
                >
                    <span className={styles.mainSkill}>PYTHON</span>
                    {renderTechList('python')}
                </button>

                {/* Tools Node */}
                <button
                    type="button"
                    className={`${styles.node} ${styles.tools} ${isNodeActive('tools') ? styles.active : ''}`}
                    onClick={() => handleInteraction('tools')}
                    onFocus={() => handleActivate('tools')}
                    onMouseEnter={() => handleActivate('tools')}
                >
                    <span className={styles.mainSkill}>TOOLS</span>
                    {renderTechList('tools')}
                </button>

            </div>
        </section>
    );
}
