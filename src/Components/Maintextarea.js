import React from "react";
import { useState } from "react";

export default function Maintextarea(props) {
  const [Text, setText] = useState("");
  const clearBtnHandler = () => {
    setText("");
  };

  const OnChangeHandler = (event) => {
    setText(event.target.value);
  };

  const UpperBtnHandler = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const LowerBtnHandler = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };

  const handleCapitalize = () => {
    let newText = Text.split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
  };

  const handleExtraSpaces = () => {
    let words = Text.split(" ");
    let joinedWords = "";
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    setText(joinedWords);

    var lines = Text.split(/\r|\r\n|\n/); //before return

    <p> {lines.length} sentences</p>;
  };

  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
  };

  const countWords = (str) => {
          let words;
      if (Text === "") {
  
        words = 0;
      } else {
        words = str.trim().split(/\s+/).length;
      }
      return words;
    };
  

  return (
    <div 
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "#042743" }}
    >
      <div
        className="container"
        
      >
        <div class="mb-3 my-3">
          <label htmlfor="exampleFormControlTextarea1" class="form-label">
            <h1>Enter Text To Analyze</h1>
          </label>
          <textarea
            value={Text}
            style={{
              backgroundColor: props.mode === "dark" ? "rgb(36,74,104)" : "white",
              color: props.mode === "dark" ? "white" : "#042743"
            }}
            onChange={OnChangeHandler}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary" onClick={UpperBtnHandler} disabled = {Text.length===0}>
        Change to Upper Case
      </button>
      <button className="btn btn-primary mx-2" onClick={LowerBtnHandler} disabled = {Text.length===0}>
        Change to Lower Case
      </button>
      <button className="btn btn-primary mx-1" onClick={clearBtnHandler} disabled = {Text.length===0}>
        Clear Text Field
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCapitalize} disabled = {Text.length===0}>
        Capitalize Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} disabled = {Text.length===0}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy} disabled = {Text.length===0}>
        Copy Text
      </button>

      <h2 className="my-4">TEXT SUMMARY</h2>
      <p>
        {countWords(Text)} words and {Text.length} characters
      </p>
      <p> {0.008 * Text.split(" ").length} minutes read</p>

      <h3>TEXT PREVIEW</h3>
      <p>{Text}</p>
    </div>
  );
}
