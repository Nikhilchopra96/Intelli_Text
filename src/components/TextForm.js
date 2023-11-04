
// import React from 'react' {we cant use two import at a same time leads to parsing error}
import React, { useState } from 'react';

export default function TextForm(props) {

    // const handleUpClick =()=>{
    //     console.log(" UpperCase was Clicked "+ text);
    //     setText("You have clicked on handleUpClicked")
    // }

    const handleAlterClick =()=>{
        let myText=""
        for (let i = 0; i < text.length; i++) {
          if (i % 2 === 0) {
            myText += text[i].toUpperCase();
          } else {
            myText += text[i].toLowerCase();
          }
      }
      setText(myText);
      props.showAlert("Converted to alternate Case","success");
    }
    
    const handleExtraSpaces =()=>{
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Remove extra spaces","success");
    }

    const handleClearText =()=>{
        let newText="";
        setText(newText)
        props.showAlert("Clear text","success");
    }

    const handleUpClick =()=>{
        console.log(" UpperCase was Clicked "+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted into UpperCase","success");
    }

    const handleLowClick =()=>{
      console.log(" UpperCase was Clicked "+ text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted into LowerCase","success");
  }

    const handleOnClick =(event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    // bina page ko reload kiye sub upload ho jayega using below line (remember this line )
    
    // const [text, setText] = useState('Enter text here');
    const [text, setText] = useState('');
    // text name ki ek state set kari hai (text) jiski default value hai ('Enter text here')

    // const [text, setText] = useState('Enter text here-2');
    // text = "new text"; // wrong way to change the state
    // setText = "new text"; // Correct way to change the state

  return (
    <>
    <div style={{color:props.Mode === 'dark' ? 'white':'black'} }>
        <h1>{props.heading}</h1>
        <div className="container my-3" >
        {/* <textarea className="form-control" value={text} id="myBox" rows="8"></textarea> */}
        {/* //adding onchange here to ignore errors for now  */}
        {/* value={text} its a state variable */}
        <textarea className="form-control my-3" value={text} onChange={handleOnClick} style={{background:props.Mode === 'dark' ? 'grey':'white', color:props.Mode === 'dark' ? 'white':'grey' }} id="myBox" rows="8"></textarea>
        </div>
        {/* <button className="btn btn-primary">Convert to Uppercase</button> */}
        {/* adding onClick function  */}
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleAlterClick}>Convert to alternate case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

    </div>
    <div className="container my-3" style={{color:props.Mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{ text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>preview</h3>
        <p>{text.length >0 ? text:'Enter something in the textbox to preview here'}</p>
    </div>
    </>
  )
}
