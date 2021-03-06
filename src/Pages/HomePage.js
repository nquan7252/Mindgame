import React, { Component } from 'react';
import background from '../Assets/cyberpunk.mp4'
import './HomePage.css'
import { Link } from 'react-router-dom';
function HomePage() {
    return <div id='homepage'>
       
        <video className="background-vid" autoPlay muted playsInline loop src={background}></video>
        <div id='page'>
        <div id='panel'>
            <Link to='/game1'>
            <div><button>Spot the difference</button></div>
            </Link>
            <Link to='/game2'>
            <div><button>Color mind game</button></div>
            </Link>
       </div>
       </div>
       <div class="attribute">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>;
}

export default HomePage;