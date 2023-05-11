import React, { useState } from 'react';
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { validateEmail } from '../../utils/helpers';
import { motion } from "framer-motion";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setErrMessage('Please enter a valid email address');
            return;
        }
        if (setMessage === ('')) {
            setErrMessage('Please enter a message');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');

    };

    return (
        <div className="contact">
            <motion.div
                initial={{ opacity: 0, backgroundColor: "black" }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
            >
                <h1 className="contact-header">Contact Me</h1>
                <div className="mb-3 w-25">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">
                        Please provide your name.
                    </div>
                </div>

                <div className="mb-3 w-25">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">
                        Please provide a vaild email.
                    </div>
                </div>
                <div className="mb-3 w-25">
                    <label htmlFor="message" className="form-label">Message</label>
                    <input
                        type="text"
                        className="form-control"
                        value={message}
                        onChange={handleInputChange}
                        name="message"
                        style={{
                            lineHeight: '50px'
                        }}
                    />
                    <div className="invalid-feedback">
                        Please provide a message.
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-light" onClick={handleFormSubmit}>Submit</button>
                </div>
                <div className="contact-list-container">
                    <div className="left">
                        <ul>
                            <li>
                            <div className="contact-list">
                                <div className="icon">
                                    <BiMap color="white" />
                                    </div>
                                    <p>Murfressboro, TN</p>
                                </div>
                            </li>
                            <li>
                            <div className="contact-list">
                                <div className="icon">
                                    <AiOutlinePhone color="white" />
                                    </div>
                                    <p>615-956-1191</p>
                                </div>
                            </li>
                            <li>
                            <div className="contact-list">
                                <div className="icon">
                                    <AiOutlineMail color="white" />
                                    </div>
                                    <p>alexisobenavidez@gmail.com</p>
                                </div>
                            </li>
                            <li>
                            <div className="contact-list">
                                <div className="icon">
                                    <AiOutlineGithub color="white" />
                                    </div>
                                    <p>alexisbenavidez99</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {errMessage && (
                    <div>
                        <p className="error-text">{errMessage}</p>
                    </div>
                )}
            </motion.div>
        </div>
    )
}