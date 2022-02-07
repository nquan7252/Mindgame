import React, { Component, useEffect } from 'react';
import { colors, levels } from '../Helper/Helper';
import { useState } from 'react';
function AnswerBar(props) {
    const handleClick=(e)=>{
        console.log(e.target.outerText)
        if(e.target.outerText==props.color.name)
        props.correct();
        else 
        props.incorrect();
    }
    const [arr,setArr]=useState(()=>{
        let randomColor;
        do{
             randomColor=colors[Math.floor(Math.random()*colors.length)];
        }
        while(randomColor.name==props.color.name)
        let tempArr= new Array(2).fill(randomColor);
        let randomPos=Math.floor(Math.random()*tempArr.length);
        tempArr[randomPos]=props.color;
        return tempArr;
    })
    useEffect(()=>{
        let randomColor;
        do{
             randomColor=colors[Math.floor(Math.random()*colors.length)];
        }
        while(randomColor.name==props.color.name)
        let tempArr= new Array(2).fill(randomColor);
        let randomPos=Math.floor(Math.random()*tempArr.length);
        tempArr[randomPos]=props.color;
        setArr(tempArr);
    },[props.color])
    return<div style={{display:'flex',justifyContent:'space-around',marginTop:'20px',fontSize:'2em'}}> {arr.map((element)=><div style={{color:colors[Math.floor(Math.random()*colors.length)].code,cursor:'pointer'}} onClick={handleClick}>{element.name}</div>)}</div>
}

export default AnswerBar;