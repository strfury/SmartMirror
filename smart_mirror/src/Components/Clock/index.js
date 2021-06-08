import React, {useState,useEffect} from 'react'; 
const Clock = ()=>{

    const [currentTime,setCurrentTime] = useState(Date()); 

    const interval = setInterval( ()=>{setCurrentTime(Date())},1000); 

    useEffect(()=>{
        return ()=>{
            clearInterval(interval)
        }
    },[])

    return (<h2>{currentTime}</h2>);
};

export default Clock; 