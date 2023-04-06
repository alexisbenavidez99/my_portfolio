import React from 'react';

export default function Resume() {
    return (
        <div className="resume">
            <h1 className="resume-header">Resume</h1>
            <a href="https://drive.google.com/file/d/19zvtO45ZZU3HC9c11tQWm_MICwI6Ahjc/view?usp=share_link" download="">Click here to download my resume</a>
            <h2 className="tech-header">Front-end Proficiencies</h2>
            <ul className="tech-names">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>TailwindCSS</li>
            </ul>
            <h2 className="tech-header">Back-end Proficiencies</h2>
            <ul className="tech-names">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}