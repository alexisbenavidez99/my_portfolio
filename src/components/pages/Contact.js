import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
        <motion.div
            initial={{ opacity: 0, backgroundColor: "black" }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
        >
            <Container className='contact'>
                <Row className="mb-5 mt-3">
                    <Col lg='8'>
                        <h1 className="mb-4 contact-header">
                            Contact Me
                        </h1>
                    </Col>
                </Row>

                <Row className="sec_sp">
                    <Col lg='5' className="mb-5">
                        <h3 className='color_sec py-4 contact-info'>Get in touch</h3>
                        <address className="contact-info">
                            <AiOutlineMail />
                            <strong className='pt-2'> alexisobenavidez@gmail.com</strong>
                            <p className='pt-4'>
                                <AiOutlinePhone />
                                <strong> 615-956-1191</strong>
                            </p>
                            <p className='pt-2'>
                                <BiMap />
                                <strong> Murfreesboro, Tennessee</strong>
                            </p>
                            <p className='pt-2'>
                                <AiOutlineGithub />
                                <strong> alexisbenavidez99</strong>
                            </p>
                        </address>
                    </Col>
                    <Col lg='7' className='d-flex align-items-center'>
                        <form className='contact_form w-100'>
                            <Row>
                                <Col lg='6' className='form-group mb-3'>
                                    <input
                                        className='form-control'
                                        id='name'
                                        name='name'
                                        placeholder='Name'
                                        type='text'
                                        value={name}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                                <Col lg='6' className='form-group mb-3'>
                                    <input
                                        className='form-control'
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        type='email'
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <textarea className='form-control' id='message'
                                name='message'
                                placeholder='Message'
                                rows='5'
                                value={message}
                                onChange={handleInputChange}
                            ></textarea>
                            <br />
                            <Row>
                                <Col lg='12' className='form-group'>
                                    <button className='button' type='submit' onClick={handleFormSubmit}>Send</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}