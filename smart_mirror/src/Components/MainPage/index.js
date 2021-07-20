import React from 'react';
import Daily from '../Daily';
import Weather from '../Weather';
import Window from '../Window';
import Music from '../Music';
import League from '../League';

const styleSheet = {
    div : {
        fontFamily : "Gaegu",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "95vh",
        marginLeft: "10px",

    }
    , div2 : {
        display: "flex",
        justifyContent: "space-between",
    },
    margin : {
        marginLeft: "50px"

    },
    div3 : {
        marginRight: "20px",
    }
}

const MainPage = ()=> {
    
    return(
        <div style = {styleSheet.div}>
            <div style = {styleSheet.div2}>
                <Window category = "daily"><Daily /></Window>
                <div style = {styleSheet.div3}><Window category = "league" padding = {false}><League /></Window></div>
            </div>
            <div style = {styleSheet.margin}><Weather/></div>
            <div style = {styleSheet.div2}>
                 <div><Window category = "spotify"><Music /></Window></div>
            </div>
            
        </div>
    ); 
}

export default MainPage;