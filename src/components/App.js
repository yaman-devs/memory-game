/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Card from "./Card";

function App() {
  let [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(score);
  let [pressedArray, setPressedArray] = useState([]);
  let [positionArray, setPositionArray] = useState([]);

  useEffect(() => {
    if (bestScore < score) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  useEffect(() => {
    if (positionArray.length < 13) {
      let randi = Math.floor(Math.random() * 12);
      if (positionArray.length === 0) {
        setPositionArray([...positionArray, randi]);
      }
      if (positionArray.includes(randi)) {
        randi = Math.floor(Math.random() * 12);
        setPositionArray([...positionArray, randi]);
      }
      setPositionArray([...positionArray, randi]);
    }
  }, [positionArray]);

  function onButtonClick(e) {
    let name = e.target.dataset.name;
    if (!pressedArray.includes(name)) {
      setPressedArray([...pressedArray, name]);
      setScore(score + 1);
    } else {
      setScore(0);
      setPressedArray([]);
    }
    setPositionArray([]);
  }

  return (
    <div className="main-container">
      <div style={{ color: "white" }}>
        <div>Score:{score}</div>
        <div>Best Score:{bestScore}</div>
      </div>
      <div className="cards-container">
        <Card
          name="Apple"
          img="../imgs/apple.jpg"
          style={{ order: positionArray[0] }}
          onButtonClick={onButtonClick}
        ></Card>
        <Card
          name="Apricot"
          img="../imgs/apricot.jpeg"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[1] }}
        ></Card>
        <Card
          name="Banana"
          img="../imgs/banana.jpeg"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[2] }}
        ></Card>
        <Card
          name="Cherry"
          img="../imgs/cherry.png"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[3] }}
        ></Card>
        <Card
          name="Grape"
          img="../imgs/grape.jpeg"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[4] }}
        ></Card>
        <Card
          name="Kiwi"
          img="../imgs/kiwi.jpeg"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[5] }}
        ></Card>
        <Card
          name="Mango"
          img="../imgs/mango.jpeg"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[6] }}
        ></Card>
        <Card
          name="Orange"
          img="../imgs/orange.jpg"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[7] }}
        ></Card>
        <Card
          name="Peach"
          img="../imgs/peach.jpeg"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[8] }}
        ></Card>
        <Card
          name="Pear"
          img="../imgs/pear.jpeg"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[9] }}
        ></Card>
        <Card
          name="Pineapple"
          img="../imgs/pineapple.png"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[10] }}
        ></Card>
        <Card
          name="Strawberry"
          img="../imgs/strawberry.png"
          onButtonClick={onButtonClick}
          style={{ order: positionArray[11] }}
        ></Card>
      </div>
    </div>
  );
}

export default App;
