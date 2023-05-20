import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpText = () => {
         setText(text.toUpperCase())
         props.showAlert("Converted To Upper Case", "success")
    }
    
    const handleLowText = () => {
         setText(text.toLowerCase())
         props.showAlert("Converted To Lower Case", "success")
    }
    
    const handleExtraSpaces = () => {
         let newText = text.split(/[ ] + /)
         setText(newText.join(" "))
         props.showAlert("Extra Spaces Removed Successfully", "success")
    }
    
    const handleCopyText = () => {
        let txt = document.getElementById("myBox")
        txt.select()
        navigator.clipboard.writeText(txt.value)
        props.showAlert("Text Copied", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")

  return (
    <>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea style={{backgroundColor: props.mode==='dark'?'grey':'white'}} className="form-control" value={text}  onChange={handleOnChange} placeholder="Enter Your Text Here..." id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpText}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowText}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={() => setText("")}>Clear the Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h1>Preview</h1>
            <p>{text.length > 0 ? text : "Enter Something for preview"}</p>
        </div>
    </>
  )
}

