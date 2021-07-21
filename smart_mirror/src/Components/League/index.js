import {useState, useEffect} from 'react';
const styleSheet = {
    marginBottom: "0px",
    paddingBottom: "-10px",
}

let skinsList = [
    {Name: "Kaisa", Num: "15"},
    {Name: "Kaisa", Num: "26"},
    {Name: "Vayne", Num: "11"},
    {Name: "Vayne", Num: "12"},
    {Name: "Caitlyn", Num: "22"},
    {Name: "Rakan", Num: "4"},
    {Name: "Rakan", Num: "5"},
    {Name: "Jhin", Num: "5"},
    {Name: "Sivir", Num: "10"},
    {Name: "Sivir", Num: "16"},
]
const createUrl = (name, num)=> {
    return("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + name + "_" + num + ".jpg")
}
const League = ()=>{

    const [currentSkin, setCurrentSkin] = useState(0);

    // the useEffect will run when the component mounts
    useEffect(()=>{
        const interval = setInterval( ()=>{
            const currentIndex = parseInt((Math.random())*10);
            setCurrentSkin(createUrl(skinsList[currentIndex].Name, skinsList[currentIndex].Num));
        },2000); 
        // returning a function in the useEffect acts as a cleanup function for the component. 
        //If the component were to unmount (be removed from the screen) it will run this function
        return ()=>{
            clearInterval(interval); // this stops the interval function above from being run
        }
    },[]); 
    
    return(
            <img width = {200} src={currentSkin} style = {styleSheet}></img>
    )
}
export default League;