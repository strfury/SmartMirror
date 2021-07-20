import { useState, useEffect } from "react";
const styleSheet = {
    inner : (songLength, currentTime)=> ({
        height: "8px",
        width: "8px",
        border: "2px solid black",
        borderRadius: "100%",
        backgroundColor: "white",
        position: "relative",
        top: "-5px",
        left: `${(currentTime/songLength)*95}%`,
    }),
    outer :{
        height : "2px",
        minWidth: "250px",
        maxWidth: "350px",
        border: "1px solid black",
        borderRadius: "50em",
        marginBottom: "15px",
        backgroundColor: "black",
        alignSelf: "center",    
    }
}

const TimePlayback = ({songLength, currentTime})=> {
    return(<div>
        <div style = {styleSheet.outer}>
            <div style = {styleSheet.inner(songLength, currentTime)}></div>
        </div>
    </div>)
}
export default TimePlayback;