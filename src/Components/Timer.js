import React, { Component } from 'react';
import { useState,useEffect } from 'react';
function Timer(props) {
    const [time,setTime]=useState(props.time);
    useEffect(()=>{
        setTime(5)
    },[props.point,props.lives])
    useEffect(()=>{
       console.log('asb')
       if (time!=0){
       let interval= setInterval(()=>{
           console.log('hi')
            if (time>0) {
            setTime(prev=>prev-1)
            console.log('reduce time')
            }
        },1000)
        return ()=> {
            console.log('clean up')
            clearInterval(interval);
        }
    }
    else{
        props.end();
    }
    })
    return <div id='time'>{time}</div>;
}

export default Timer;