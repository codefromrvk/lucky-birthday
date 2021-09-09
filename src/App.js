import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [dob, setDob] = useState(0);
  const [num, setNum] = useState(0);
  const [ans, setAns] = useState("");

  function getValue(event) {
    // console.log(event.target.value);
    let dob = event.target.value.replace(/-/g, "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
      sum = sum + Number(dob.charAt(i));
    }
    // console.log(sum);
    setDob(sum);
  }
  function checkLuck() {
    if (dob % num === 0) {
      console.log(dob, num);
      return setAns("Your birthday is lucky!!!");
    }
    return setAns("Sorry, your birthday is not so lucky!!!");
  }
  function getNumber(event) {
    // console.log(event.target.value)
    let luckyNumber = event.target.value;
    setNum(Number(luckyNumber));
  }
  return (
    <div className="App">
      <h1 className="header">Is your birthday lucky?</h1>
      <div className="container">
        <label htmlFor="birth-date">Enter your birth date</label>
        <input id="birth-date" onChange={getValue} type="date" />
        <label htmlFor="lucky-number">Lucky number</label>
        <input id="lucky-number" onChange={getNumber} type="number" />
        <button className="btn" onClick={checkLuck}>
          click
        </button>
        <p>{ans}</p>
      </div>
    </div>
  );
}
