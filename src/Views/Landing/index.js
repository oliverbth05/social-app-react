import React from 'react';
import Logo from '../../components/ui/Logo';
import Stats from './cmp/Stats';
import { Link } from 'react-router-dom';
import redux from '../../assets/Logos/redux.svg';
import express from '../../assets/Logos/express-109.svg';
import nodejs from '../../assets/Logos/nodejs-icon.svg';
import mongodb from '../../assets/Logos/mongodb.svg';
import reactRouter from '../../assets/Logos/react-router.svg';
import react from '../../assets/Logos/react.svg';
import sass from '../../assets/Logos/sass-1.svg';
import git from '../../assets/Logos/git-icon.svg';
import webpack from '../../assets/Logos/webpack-icon.svg';
import babel from '../../assets/Logos/babel-10.svg';

const About = () => {
    return (
        <div>
            <div className='container-flex-center bg-gradient'>
                <div>
                    <h1 className='logo color-white text-center'>Rag</h1>
                    <Link className='btn btn-primary btn-small m-a-2 color-pulse' to='/login'>Get Started</Link>
                </div>
            </div>

            <div className='container-flex-center bg-white'>
                <div className='container-1000-mauto'>

                    <section className='p-a-3'>
                        <h2 className='p-b-1 text-center m-b-1 font-normal'>About</h2>
                        <h4 className='p-t-1 font-normal'>Features</h4>
                        <ul>
                            <li className=' font-light'>User authentication via web-tokens.</li>
                            <li className=' font-light'>Written-content creation with in-built styling.</li>
                            <li className=' font-light'>User profiles with favorites and subscriptions.</li>
                            <li className=' font-light'>View, like and comment functionality.</li>
                            <li className=' font-light'>Viewable on all screen sizes.</li>
                        </ul>

                        <h4 className='p-t-1 m-b-1 font-normal '><i class="fab fa-github"></i> GitHub</h4>
                        <div className='logo-flex'>
                            <a className='github-link m-r-s'>Client</a>
                            <a className='github-link'>API</a>
                        </div>

                    </section>



                    <section className='p-a-3'>
                        <h2 className='p-b-1  text-center font-normal' >Technologies</h2>
                        <div className='logo-grid'>
                            <div>
                                <h4 className='p-a-1 text-center font-normal '>Front-End</h4>
                                <div className='logo-flex'>
                                    <Logo src={react} name='React' />
                                    <Logo src={redux} name='Redux' />
                                    <Logo src={reactRouter} name='React-Router' />
                                    <Logo src={sass} name='Sass' />
                                </div>
                            </div>

                            <div>
                                <h4 className='p-a-1 text-center font-normal '>Back-End</h4>
                                <div className='logo-flex'>
                                    <Logo src={nodejs} name='Node' />
                                    <Logo src={express} name='Express' />
                                    <Logo src={mongodb} name='MongoDB' />
                                </div>
                            </div>

                            <div>
                                <h4 className='p-a-1 text-center font-normal  '>Development</h4>
                                <div className='logo-flex'>
                                    <Logo src={git} name='Git' />
                                    <Logo src={webpack} name='Webpack' />
                                    <Logo src={babel} name='Babel' />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About;
