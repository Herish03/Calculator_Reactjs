import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";


function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C"){
      setCalVal(calVal.slice(0, -1)); // Remove the last character from the display value
    }else if (buttonText === "CE"){
        setCalVal("");
    } else if (buttonText === "="){
      const result = eval(calVal); // Update the display with the result
      setCalVal(result);
    }else {
    const newDisplayValue = calVal + buttonText;
    setCalVal(newDisplayValue)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </div>
  );
}

export default App;
