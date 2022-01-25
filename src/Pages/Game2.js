import React, { Component } from 'react';
import Board from '../Components/Board';
import vid2 from '../Assets/vid2.mp4';
import { Link } from 'react-router-dom';
function Game2() {
    return <div className='game-page'>        
    <Link to='/'>
        <img id='back-btn' src={require('../Assets/back.png')}></img>
        </Link>
        <video className="background-vid" autoPlay muted playsInline loop src={vid2}></video>

        <Board /></div>;
}

export default Game2;