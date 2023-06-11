import { React, useRef, useEffect } from 'react';
import longevity from '../../assets/longevity.png';
import coinspire from '../../assets/coinspire.png';
import weather from '../../assets/weather-app.png';
import bookHaven from '../../assets/bookhaven.png';
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { register } from "swiper/element/bundle";
import { motion } from "framer-motion";

register();

export default function Projects() {
    const swiperElRef = useRef(null);

    useEffect(() => {
        swiperElRef.current.addEventListener('progress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, backgroundColor: "black" }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
        >
            <section className='projects-section' id='portfolio'>
                <h1 className='projects-header'>Projects</h1>

                <Swiper className='projects-container container swiper-container'
                    ref={swiperElRef}
                    spaceBetween={0}
                    slidesPerView={1}
                    speed={500}
                    loop={true}
                    touchRatio={1.5}
                    navigation={true}
                    pagination={true}
                >
                    <div className='swiper-wrapper'>
                        {/* Project 1 */}
                        <SwiperSlide className='project-content grid'>
                            <img src={longevity} className='project-img' alt='Longevity' />

                            <div className='project-data'>
                                <h3 className='project-title'>Longevity</h3>
                                <p className='project-description'>A full-stack application that allows users to create a profile, curate workout plans, learn new exercises with instructional descriptions of exercises they choose, and keep track of their past workouts.</p>
                                <a href="https://rocky-thicket-55053.herokuapp.com/" target="_blank" rel="noreferrer" className='button button--flex button--small portfolio-button'>
                                    Visit Site
                                    <AiOutlineArrowRight />
                                </a>
                                <a href="https://github.com/alexisbenavidez99/workout-tracker" className='button gh-button'>
                                    <AiOutlineGithub />
                                    GitHub
                                </a>
                            </div>
                        </SwiperSlide>

                        {/* Project 2 */}
                        <SwiperSlide className='project-content grid'>
                            <img src={coinspire} className='project-img' alt='Coinspire' />

                            <div className='project-data'>
                                <h3 className='project-title'>Coinspire</h3>
                                <p className='project-description'>CoinSpire is a front-end web application that allows users to live track current crypto-currency prices to assist and aid beginners at cryptocurrency in fast trading, accurate data for learning, with easy and simple UI, and users will be able to see only the important details.</p>
                                <a href="https://devkjoon.github.io/coinspire/" target="_blank" rel="noreferrer" className='button button--flex button--small portfolio-button'>
                                    Visit Site
                                    <AiOutlineArrowRight />
                                </a>
                                <a href="https://github.com/devkjoon/coinspire" className='button gh-button'>
                                    <AiOutlineGithub />
                                    GitHub
                                </a>
                            </div>
                        </SwiperSlide>

                        {/* Project 3 */}
                        <SwiperSlide className='project-content grid'>
                            <img src={weather} className='project-img' alt='Weather App' />

                            <div className='project-data'>
                                <h3 className='project-title'>Weather App</h3>
                                <p className='project-description'>A weather app that uses OpenWeatherMap APIs to create an app for people to plan trips accordingly.</p>
                                <a href="https://alexisbenavidez99.github.io/Weather-App-6/" target="_blank" rel="noreferrer" className='button button--flex button--small portfolio-button'>
                                    Visit Site
                                    <AiOutlineArrowRight />
                                </a>
                                <a href="https://github.com/alexisbenavidez99/Weather-App-6" className='button gh-button'>
                                    <AiOutlineGithub />
                                    GitHub
                                </a>
                            </div>
                        </SwiperSlide>

                        {/* Project 4 */}
                        <SwiperSlide className='project-content grid'>
                            <img src={bookHaven} className='project-img' alt='Book Haven' />

                            <div className='project-data'>
                                <h3 className='project-title'>Book Haven</h3>
                                <p className='project-description'>A MERN stack book e-commerce website that includes detailed descriptions, customer reviews, and recommendations to help guide your choices.</p>
                                <a href="https://book-haven.herokuapp.com/" target="_blank" rel="noreferrer" className='button button--flex button--small portfolio-button'>
                                    Visit Site
                                    <AiOutlineArrowRight />
                                </a>
                                <a href="https://github.com/Nmotley92/e-commerce-site" className='button gh-button'>
                                    <AiOutlineGithub />
                                    GitHub
                                </a>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </section>
        </motion.div>
    )
}