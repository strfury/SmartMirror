import React from 'react';
import Daily from '../Daily';
import Time from '../Daily/Time';
import DateComponent from '../Daily/DateComponent';

const styleSheet = {
    fontFamily : "Gaegu"
}

const MainPage = ()=> {
    
    return(
        <div style = {styleSheet}>
            <Daily />
        </div>
    ); 
}

export default MainPage;