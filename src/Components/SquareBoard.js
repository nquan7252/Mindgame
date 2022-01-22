import React, { Component, useEffect } from 'react';
import Square from './Square';
import { levels } from '../Helper/Helper';
import { useState } from 'react';
function SquareBoard(props) {
    const handleClick=(element)=>{
        if(JSON.stringify(element)==JSON.stringify(props.answerColor))
        props.correct();
        else 
        console.log('wrong')
    }
    // const[arr,setArr]=useState(new Array(levels['1'].square).fill(props.sameColors))
    // useEffect(()=>{
    //     let randomSpot=Math.floor(Math.random()*arr.length-1);
    //     let newArr=[...arr]
    //     newArr[randomSpot]=props.answerColor;
    //     setArr(newArr)
    // },[props.answerColor,props.sameColors])
    return <div>{props.arr.map((element,index)=><Square key={index} color={element} handleClick={handleClick}></Square>)}
         
    </div>
}

export default SquareBoard;