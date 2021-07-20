import React, {useState,useEffect} from 'react';


let BirthdayList = [
    {Name: "snow", Date: new Date("september 17," + new Date().getFullYear())},
    {Name: "lauren", Date: new Date("november 9," + new Date().getFullYear())},
    {Name: "tyler", Date: new Date("september 6," + new Date().getFullYear())},
    {Name: "jiatian", Date: new Date("august 22," + new Date().getFullYear())}
]

const setDate = ()=>{
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  BirthdayList = BirthdayList.map((bDay)=>{
      if(bDay.Date.getTime() - currentDate.getTime() >= 0) // check if birthdate has happened yet this year
      {
        return(bDay);
      }
      else
      {
        bDay.Date.setFullYear(new Date().getFullYear() + 1);
        return(bDay);
      }

    })
}
const daysUntilBirthday = (birthDate)=>{ // returns number of days until the birthday
  const currentDate = new Date();
  currentDate.setHours(0,0,0,0);
  var timeDifference = birthDate.getTime() - currentDate.getTime();
  return(Math.round(timeDifference / (1000 * 3600 *24)));

}
/* const daysUntilBirthday2 = (birthDate)=>{ // returns number of days until the birthday
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  currentDate.setHours(0,0,0,0);
  var timeDifference = birthDate.getTime() - currentDate.getTime();
  return(Math.round(timeDifference / (1000 * 3600 *24)));

}
*/
const millisecondsUntilMidnight = ()=>{ // for the Interval function
  const currentDate = new Date();
  var midnight = new Date();
  midnight.setHours(24, 0, 0, 0)
  // midnight.setHours(currentDate.getHours(), currentDate.getMinutes() + 1, 0, 0);
  console.log(midnight.getTime() - currentDate.getTime());
  return(midnight.getTime() - currentDate.getTime());
}
const IndividualBirthday = ({name, date})=>{ // returns different messages depending on number of days left
  if(date > 0)
  {
    if(date === 1)
    {
      return(<p> {name}'s birthday is tomorrow! </p>);
    }
    return(<p> {name}'s birthday in {date} days</p>);
  }
    return(<p> today is {name}'s birthday! </p>);
  
}
const Birthday = ()=>{
  setDate();
  const [BirthdayComponents, setCurrentBirthday] = useState(BirthdayList.sort(function(a,b){
    return (a.Date) - (b.Date)
  }).map((bDay)=>{
    return(< IndividualBirthday name = {bDay.Name} date = {daysUntilBirthday(bDay.Date)} />);
  }))
  
  const Interval = ()=>{
    console.log("timeout run")
    setDate();
  
    setCurrentBirthday(BirthdayList.sort(function(a,b){
      return (a.Date) - (b.Date)
    }).map((bDay)=>{
      return(< IndividualBirthday name = {bDay.Name} date = {daysUntilBirthday(bDay.Date)} />);
    }))

    timeout = setTimeout(Interval, millisecondsUntilMidnight());
    
  }
    let timeout = setTimeout(Interval, millisecondsUntilMidnight())
    useEffect(()=>{
      // returning a function in the useEffect acts as a cleanup function for the component. 
      //If the component were to unmount (be removed from the screen) it will run this function
  
      return ()=>{
          clearTimeout(timeout); // this stops the interval function above from being run
      }
  },[]);
    return(<div>{BirthdayComponents[0]}{BirthdayComponents[1]}</div>);
}
export default Birthday;