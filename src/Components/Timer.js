import React, { Component } from 'react';
import { useState,useEffect } from 'react';
function Timer(props) {
    const [time,setTime]=useState(props.time);
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
    })
    return <div id='time'>{time}</div>;
}

export default Timer;