import React, {useState,useEffect} from 'react';
/* const styleSheet = {
    paddingLeft: "45px"
}*/
const editTime = (rawTime)=>{
    if(rawTime < 10)
    {
        return("0" + rawTime.toString());
    }
        return(rawTime.toString());
}
const Time = ()=>{

    // creates a state storing the current time string
    const [currentHour,setCurrentHour] = useState((new Date()).getHours());
    const [currentMinutes,setCurrentMinutes] = useState((new Date()).getMinutes());
    const [currentSeconds,setCurrentSeconds] = useState((new Date()).getSeconds());

    // setInterval runs a function (first parameter) ever 1000 (second parameter)
    const interval = setInterval( ()=>{
        setCurrentHour(editTime((new Date()).getHours()));
        setCurrentMinutes(editTime((new Date()).getMinutes()));
        setCurrentSeconds(editTime((new Date()).getSeconds()));
    },1000); 

    // the useEffect will run when the component mounts
    useEffect(()=>{
        // returning a function in the useEffect acts as a cleanup function for the component. 
        //If the component were to unmount (be removed from the screen) it will run this function
        return ()=>{
            clearInterval(interval); // this stops the interval function above from being run
        }
    },[]); 

    return (<h2>{currentHour + ":" + currentMinutes + ":" + currentSeconds}</h2>); // displays the current time and is updated everytime currentTime is updated
};

export default Time; 