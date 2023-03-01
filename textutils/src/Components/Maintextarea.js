import React from "react";
import { useState } from "react";


export default function Maintextarea() 
{


    const [Text,setText] = useState("");
    const clearBtnHandler = ()=>{
        setText("");        
    }

    const OnChangeHandler = (event)=>{
        setText(event.target.value);
    }

    const UpperBtnHandler = ()=>{
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const LowerBtnHandler = ()=>{
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const handleCapitalize = () => {
        let newText = Text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
   }

   const handleExtraSpaces = ()=>{
    let words = Text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem)=>{
        if(elem[0] !== undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);

    var lines = Text.split(/\r|\r\n|\n/);   //before return

    <p> {lines.length} sentences</p> 

}
    

  return (
    <div className="container">
      <div class="mb-3 my-3">
        <label htmlfor="exampleFormControlTextarea1" class="form-label">
          <h1>Enter Text To Analyze</h1>
        </label>
        <textarea
          value={Text}
          onChange={OnChangeHandler}
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
      
      <button className="btn btn-primary" onClick={UpperBtnHandler}>
        Change to Upper Case
      </button>
      <button className="btn btn-primary mx-2" onClick={LowerBtnHandler}>
        Change to Lower Case
      </button>
      <button className="btn btn-primary mx-1" onClick={clearBtnHandler}>
        Clear Text Field
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCapitalize}>
        Capitalize Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>



      <h2 className="my-4">TEXT SUMMARY</h2>
      <p >{Text.split(" ").length} words and {Text.length} characters</p>
      <p> {0.008 * Text.split(" ").length}  minutes read</p>

      <h3>TEXT PREVIEW</h3>
      <p>{Text}</p>
    </div>
  );
}
