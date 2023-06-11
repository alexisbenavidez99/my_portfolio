import React from 'react';
import { motion } from "framer-motion";
import resume from '../../assets/resume.pdf'

export default function Resume() {
    return (
        <div className="resume">
            <motion.div
                initial={{ opacity: 0, backgroundColor: "black" }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
            >
                <h1 className="resume-header">Resume</h1>
                <a className="button" href={resume} download>Download CV</a>
                <div className="resume-content">
                <div className="tech-names">
                <h2 className="tech-header">Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>TailwindCSS</li>
                </ul>
                </div>
                <div className="tech-names">
                <h2 className="tech-header">Back-end Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
                </div>
                </div>
            </motion.div>
        </div>
    )
}