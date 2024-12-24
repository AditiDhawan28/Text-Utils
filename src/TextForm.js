import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success")
  }
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success")
  }
  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied","success")

  }
  
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success")
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'#042743'}}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Handle Extra Spaces</button>
      </div>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
    </div>
    </>
  );
}
