import React, { Component } from 'react';
import background from '../Assets/cyberpunk.mp4'
import './HomePage.css'
function HomePage() {
    return <div id='homepage'>
        <video id="background-vid" autoPlay muted playsInline loop src={background}></video>
        <div id='page'>
        <div id='panel'>
            <div><button>Spot the difference</button></div>
            <div><button>Color mind game</button></div>
       </div>
       </div>
    </div>;
}

export default HomePage;