import React from 'react';
import profilePic from '../../assets/profilepic.jpg';
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="about-me">
            <motion.div initial={{ opacity: 0, backgroundColor: "black" }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}>
            <h1 className="about-header">Hi,</h1>
            <h1 className="about-header">My name is Alexis Benavidez.</h1>
            <p className="about-section">
                I live in Nashville, Tennessee and I am 23 years old. In my free time, I love to hang out with my family and friends, travel and code! I am an aspiring web developer. I'm currently enrolled in a Full-Stack Web Development bootcamp. My area of interests are front-end technologies such as HTML, CSS, React, JavaScript.
                I am always eager to learn different things and expand my knowledge anyway I can! My portfolio showcases different projects I've made and collaborated on.
                Take a look around!
            </p>
            <img className="profile-pic" src={profilePic} alt="alexis"></img>
            </motion.div>
        </div>
    )
}