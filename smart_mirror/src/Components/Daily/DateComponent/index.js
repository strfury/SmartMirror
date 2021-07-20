import React, {useState,useEffect} from 'react'; 
const editDate = (rawDate)=>{
    if(rawDate < 10)
    {
        return("0" + rawDate.toString());
    }
        return(rawDate.toString());
}
const editYear = (rawYear)=>{
    return(rawYear - 2000);
}
const DateComponent = ()=>{

    // creates a state storing the current time string DOW = Day of week
    const [currentMonth, setCurrentMonth] = useState(editDate((new Date()).getMonth() + 1));
    const [currentDay, setCurrentDay] = useState((new Date()).getDate());
    const [currentYear, setCurrentYear] = useState((new Date()).getFullYear());
    const [currentDOW, setCurrentDOW] = useState((new Date()).getDay());
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    // setInterval runs a function (first parameter) ever 1000 (second parameter)
    
    const interval = setInterval( ()=>{
        setCurrentMonth(editDate((new Date()).getMonth() + 1));
        setCurrentDay(editDate((new Date()).getDate()));
        setCurrentYear(editYear((new Date()).getFullYear()));
        setCurrentDOW((new Date()).getDay());
    
    },1000); 

    // the useEffect will run when the component mounts
    useEffect(()=>{
        // returning a function in the useEffect acts as a cleanup function for the component. 
        //If the component were to unmount (be removed from the screen) it will run this function
        return ()=>{
            clearInterval(interval); // this stops the interval function above from being run
        }
    },[]); 

    return (<h>{currentMonth + currentDay + currentYear + " - " + days[currentDOW]}</h>); // displays the current time and is updated everytime currentTime is updated
};

export default DateComponent; 