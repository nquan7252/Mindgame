import React, { Component } from 'react';
import { useState,useEffect } from 'react';
function PreTimer(props) {
    const [time,setTime]=useState(5);
    useEffect(()=>{
       console.log('asb')
       if (time!=0){
       let interval= setInterval(()=>{
           console.log('hi')
            if (time>0) {
            setTime(time-1)
            console.log('reduce time')
            }
        },1000)
        return ()=> {
            console.log('clean up')
            clearInterval(interval);
        }
    }
    else{
        props.start();
    }
    })
    return <div>{time!=0?time:''}</div>;
}

export default PreTimer;