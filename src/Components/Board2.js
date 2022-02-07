import React, { Component, useState,useEffect } from 'react';
import PreTimer from './Pre-Timer';
import Timer from './Timer' 
import SquareBoard from './SquareBoard';
import Prompt from './Prompt';
import StatusBoard from './StatusBoard';
import AnswerBar from './AnswerBar';
import { colors, levels } from '../Helper/Helper';
function Board2() {
    const getRandomColor=(temp)=>{
        let redVal=Math.floor(Math.random()*256);
        let blueVal=Math.floor(Math.random()*256);
        let greenVal=Math.floor(Math.random()*256);
        console.log('temp here',temp)
        return {redVal,greenVal,blueVal}
    }
    const findValidColor=(color)=>{
        let newColor;
        if (Number(color)+levels[`${status.level}`].dif>255)
            newColor=color-levels[`${status.level}`].dif;
        else if (color-levels[`${status.level}`].dif<0)
            newColor=Number(color)+levels[`${status.level}`].dif
        else
            newColor=Number(color)+levels[`${status.level}`].dif
        return newColor;
    }
    const getAnswerColor=(randomColorObj)=>{
        let redAnswer=findValidColor(randomColorObj.redVal);
        let blueAnswer=findValidColor(randomColorObj.blueVal);
        let greenAnswer=findValidColor(randomColorObj.greenVal);
        console.log(redAnswer,blueAnswer,greenAnswer,randomColorObj)
        return {redVal:redAnswer,greenVal:greenAnswer,blueVal:blueAnswer}
    }
    const [time,setTime]=useState(3);
    const getLevel=(point)=>{
        if (point>12)
        return 5
        if (point>9)
        return 4
        if (point>6)
        return 3
        if (point>3)
        return 2
        return 1
    }
    const correct=()=>{
        setTime(3);
        let newStatus={...status};
        newStatus.point++;
        newStatus.level=getLevel(newStatus.point);
        setStatus(newStatus);
        setColor(colors[Math.floor(Math.random()*colors.length)]);
    }
    const incorrect=()=>{
        let newStatus={...status};
        newStatus.lives--;
        if (newStatus.lives==0){
            setEnd(true);
        }
        else{
        setStatus(newStatus);
        let randomColorObj=getRandomColor();
        let temp=new Array(levels[newStatus.level].square).fill(randomColorObj)
        let randomSpot=Math.floor(Math.random()*(temp.length));
        temp[randomSpot]=getAnswerColor(randomColorObj);
        setColor(colors[Math.floor(Math.random()*colors.length)]);
        }
    }
    const restartGame=()=>{
        setPlay(false);
        setStatus({point:0,lives:3,level:1});
        setEnd(false);  
        let randomColorObj=getRandomColor();
        let temp=new Array(levels['1'].square).fill(randomColorObj)
        let randomSpot=Math.floor(Math.random()*(temp.length));
        temp[randomSpot]=getAnswerColor(randomColorObj);
    } 
    const [play,setPlay]=useState(false);
    const [end,setEnd]=useState(false);
    //  const [sameColors,setSameColors]=useState(()=>getRandomColor());
    // const [answerColor,setAnswerColor]=useState(()=>getAnswerColor());
    const [status,setStatus]=useState({point:0,lives:3,level:1})
    const [color,setColor]=useState(()=>{
        return colors[Math.floor(Math.random()*colors.length)];
    })
    const startGame=()=>{
        setPlay(true);
    }
    const endGame=()=>{
        setEnd(true);
    }
    return play==false?
    <div>
        <PreTimer start={startGame}/>
    </div>:end==false?<div id='card'>
    <Timer time={time} end={endGame} point={status.point} lives={status.lives}/>
     <Prompt color={color}/>
     <AnswerBar correct={correct} incorrect={incorrect} color={color}></AnswerBar>
     <StatusBoard status={status}/>   
    </div>:<div id='card'>
        <h2>Game over</h2>
        <div>Points: {status.point}</div>
        <div style={{cursor:'pointer'}} onClick={restartGame}><img id='reset-btn' src={require('../Assets/refreshing.png')}></img></div>
    </div>
}

export default Board2;