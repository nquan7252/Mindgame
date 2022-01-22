import React, { Component, useState,useEffect } from 'react';
import PreTimer from './Pre-Timer';
import Timer from './Timer' 
import SquareBoard from './SquareBoard';
import { levels } from '../Helper/Helper';
function Board() {
    const getRandomColor=()=>{
        let redVal=Math.floor(Math.random()*256);
        let blueVal=Math.floor(Math.random()*256);
        let greenVal=Math.floor(Math.random()*256);
        return {redVal,greenVal,blueVal}
    }
    const getAnswerColor=()=>{
        let redVal=Math.floor(Math.random()*256);
        let blueVal=Math.floor(Math.random()*256);
        let greenVal=Math.floor(Math.random()*256);
        return {redVal,greenVal,blueVal}
    }
    const [time,setTime]=useState(10);
    const getLevel=()=>{
        if (status.point>12)
        return 5
        if (status.point>9)
        return 4
        if (status.point>6)
        return 3
        if (status.point>3)
        return 2
        return 1
    }
    const correct=()=>{
        setTime(50)
        let newStatus={...status};
        newStatus.point++;
        // setSameColors(getRandomColor());
        // setAnswerColor(getAnswerColor());
        setStatus(newStatus);
        let temp=new Array(levels['1'].square).fill(getRandomColor())
        let randomSpot=Math.floor(Math.random()*(temp.length));
        temp[randomSpot]=getAnswerColor();
        setArr(temp);
    }
    const incorrect=()=>{
        let newStatus={...status};
        newStatus.lives--;
        if (newStatus.lives==0){
            console.log('game over')
            setPlay(false)
        }
        else{
        setStatus(newStatus);
        let temp=new Array(levels['1'].square).fill(getRandomColor())
        let randomSpot=Math.floor(Math.random()*(temp.length));
        temp[randomSpot]=getAnswerColor();
        setArr(temp);
        }
    }
    const [play,setPlay]=useState(false);
    // const [sameColors,setSameColors]=useState(()=>getRandomColor());
    // const [answerColor,setAnswerColor]=useState(()=>getAnswerColor());
    const [status,setStatus]=useState({point:0,lives:5,level:1})
    const[arr,setArr]=useState(()=>{
        let temp=new Array(levels['1'].square).fill(getRandomColor())
        let randomSpot=Math.floor(Math.random()*(temp.length));
        temp[randomSpot]=getAnswerColor();
        return temp;
    })
    // useEffect(()=>{
    //     console.log('right here')
    //     let randomSpot=Math.floor(Math.random()*arr.length-1);
    //     let newArr=[...arr]
    //     newArr[randomSpot]=answerColor;
    //     setArr(newArr)
    // },[status])
    const startGame=()=>{
        setPlay(true);
    }
    return play==false?
    <div>
        <PreTimer start={startGame}/>:
    </div>:<div style={{width:'100%',height:'100%'}}>
    <Timer time={time}/>
     <SquareBoard arr={arr}  status={status} correct={correct} incorrect={incorrect}/>
    {/* <StatusBoard/>   */}
    </div>
}

export default Board;