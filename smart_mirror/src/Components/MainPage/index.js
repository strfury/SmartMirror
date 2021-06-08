import React from 'react';
import Clock from '../Clock'; 
import Greeting from '../Greeting';


const MainPage = ()=> {
    
    return(
        <div>
            <Greeting />
            <Clock />
        </div>
    ); 
}

export default MainPage;