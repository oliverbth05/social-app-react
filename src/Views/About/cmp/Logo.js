import React from 'react';

const Logo = (props) => (
    <div className = 'logo-card'>
        <img src = {props.src} className = 'tech-logo'/>
        <p>{props.name}</p>
    </div>
)

export default Logo;