import React, {useState} from 'react'; 

const Greeting = ()=>{
    const [name,setName] = useState("Right click me to set your name"); 
    const [promptOpen,setPromptOpen] = useState(false); 
    const [inputValue, setInputValue] = useState(""); 

    const clickHandler = e =>{
        console.log("I ran");  
        if (e.nativeEvent.which !== 3) return;
        e.preventDefault();
        setPromptOpen(true); 

    }

    const buttonSubmit = ()=>{
        setPromptOpen(false); 
        setName(inputValue);
        setInputValue(""); 
    }
    const onChange = e=>{
        setInputValue(e.target.value);

    }

    return (
        <div><h1>Hello <span onContextMenu={clickHandler}> {name} </span></h1>
        {promptOpen && <div>
                <input type="text" placeHolder="Input your name here" value={inputValue} onChange={onChange}/>
                <button onClick={buttonSubmit}>Submit</button>
            </div>
        }
        </div>
    );

}

export default Greeting;