import React, { Component } from 'react';
import { useState,useEffect } from 'react';
function PreTimer(props) {
    const [time,setTime]=useState(5);
    useEffect(()=>{
       
       if (time!=0){
       let interval= setInterval(()=>{
        
            if (time>0) {
            setTime(time-1)
           
            }
        },1000)
        return ()=> {
          
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