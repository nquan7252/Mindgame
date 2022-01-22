import React, { Component, useEffect } from 'react';
import Square from './Square';
import { levels } from '../Helper/Helper';
import { useState } from 'react';
function SquareBoard(props) {
    const handleClick=(element)=>{
        if(props.arr.filter(single=>JSON.stringify(single)==JSON.stringify(element)).length==1)
        props.correct();
        else 
        props.incorrect();
    }
    // const[arr,setArr]=useState(new Array(levels['1'].square).fill(props.sameColors))
    // useEffect(()=>{
    //     let randomSpot=Math.floor(Math.random()*arr.length-1);
    //     let newArr=[...arr]
    //     newArr[randomSpot]=props.answerColor;
    //     setArr(newArr)
    // },[props.answerColor,props.sameColors])
    return<div id='square-board-container'><div id='square-board'>
        {props.arr.map((element,index)=><Square key={index} color={element} handleClick={handleClick}></Square>)}
         
    </div></div> 
}

export default SquareBoard;