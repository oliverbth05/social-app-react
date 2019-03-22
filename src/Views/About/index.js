import React from 'react';
import Logo from '../../components/ui/Logo';

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
        <div className = 'container bg-dark'>
        <div className = 'container-1000-mauto'>

            <section className = 'p-a-3'>
                <h2 className = 'color-white p-b-1 text-center m-b-1'>About</h2>
                <p className = 'color-white font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h4 className = 'color-white p-t-1'>Features</h4>
                <ul>
                    <li className = 'color-white font-light'>User authentication via web-tokens.</li>
                    <li className = 'color-white font-light'>Written-content creation with in-built styling.</li>
                    <li className = 'color-white font-light'>User profiles with favorites and subscriptions.</li>
                    <li className = 'color-white font-light'>View, like and comment functionality.</li>
                    <li className = 'color-white font-light'>Viewable on all screen sizes.</li>
                </ul>

                <h4 className = 'p-t-1 m-b-1 color-white'><i class="fab fa-github"></i> GitHub</h4>
                <div className = 'logo-flex'>
                    <a className = 'github-link m-r-s'>Client</a>
                    <a className = 'github-link'>API</a>
                </div>

            </section>



            <section className = 'p-a-3'>
                <h2 className = 'p-b-1 color-white text-center' >Technologies</h2>
                <div className = 'logo-grid'>
                    <div>
                        <h4 className = 'p-a-1 text-center color-white'>Front-End</h4>
                        <div className = 'logo-flex'>
                            <Logo src = {react} name = 'React'/>
                            <Logo src = {redux} name = 'Redux' />
                            <Logo src = {reactRouter} name = 'React-Router' />
                            <Logo src = {sass} name = 'Sass'/>
                        </div>
                    </div>

                    <div>
                        <h4 className = 'p-a-1 text-center color-white'>Back-End</h4>
                        <div className = 'logo-flex'>
                            <Logo src = {nodejs} name = 'Node'/>
                            <Logo src = {express} name = 'Express' />
                            <Logo src = {mongodb} name = 'MongoDB'/>
                        </div>
                    </div>

                    <div>
                        <h4 className = 'p-a-1 text-center color-white '>Development</h4>
                        <div className = 'logo-flex'>
                            <Logo src = {git} name = 'Git'/>
                            <Logo src = {webpack} name = 'Webpack' />
                            <Logo src = {babel} name = 'Babel'/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default About;
