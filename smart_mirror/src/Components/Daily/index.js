import Birthday from "./Birthday";
import DateComponent from "./DateComponent";
import Time from "./Time";

const styleSheet = {
    container: {
    },
    item:{
        textAlign: "center",
    }
}

const Daily = ()=>{
    return(

        <div style = {styleSheet.container}>
            <div style = {styleSheet.item}> <Time/> </div>
            <div style = {styleSheet.item}> <DateComponent/> </div>
            <div style = {styleSheet.item}> <Birthday/> </div>
        </div>
    )
}
export default Daily;