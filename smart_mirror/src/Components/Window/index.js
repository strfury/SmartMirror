const styleSheet = {
    box : {
        width: "100%",
        border: "1px solid black",
        margin: "0px"
    },
    top: {
        display: "flex",
        width: "100%",
        height: "25px",
        border: "1px solid black",
        borderBottomStyle: "hidden",
        justifyContent: "space-between",
        paddingTop: "5px",
    },
    global: {
        paddingLeft: "10px",
        paddingRight: "10px",
    },
    iconBox : {
        display: "flex",
    },
    iconPadding : {
        paddingLeft: "4px",
        paddingRight: "4px"
    }
}

const Window = ({children, category, padding = true})=>{
    return(
    <div>
        <div style = {padding?{...styleSheet.top,...styleSheet.global}:styleSheet.top}>
            <div style = {padding?{}:{paddingLeft: "10px"}}>{category}</div>
            <div style = {styleSheet.iconBox}>
                <div>-</div>
                <div style = {styleSheet.iconPadding}>o</div>
                <div style = {padding?{}:{paddingRight: "10px"}}>x</div>
            </div>
        </div>
        <div style = {padding?{...styleSheet.box,...styleSheet.global}:styleSheet.box}>{children}</div>
    </div>);
}
export default Window;