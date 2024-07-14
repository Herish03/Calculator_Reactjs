import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({onButtonClick}) => {

    const butnNames = [
      "%",
      "CE",
      "C",
      "/",
      "7",
      "8",
      "9",
      "*",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      ".",
      "0",
      "=",
    ];
  
  
   return (
    <div className={styles.buttonContainer}>
      {butnNames.map((btnName,index) => (
        <button key={index} className={styles.button} onClick={() => onButtonClick(btnName)}>{btnName}</button>      
        ))}
    </div>   
    );
  };

//   return (
//     <div className={styles.buttonContainer}>
//       <button className={styles.button}>%</button>
//       <button className={styles.button}>CE</button>
//       <button className={styles.button}>C</button>
//       <button className={styles.button}>/</button>
//       <button className={styles.button}>7</button>
//       <button className={styles.button}>8</button>
//       <button className={styles.button}>9</button>
//       <button className={styles.button}>*</button>
//       <button className={styles.button}>4</button>
//       <button className={styles.button}>5</button>
//       <button className={styles.button}>6</button>
//       <button className={styles.button}>-</button>
//       <button className={styles.button}>1</button>
//       <button className={styles.button}>2</button>
//       <button className={styles.button}>3</button>
//       <button className={styles.button}>+</button>
//       <button className={styles.button}>.</button>
//       <button className={styles.button}>0</button>
//       <button className={styles.button}>=</button>
//       <button className={styles.button}></button>
//     </div>
//   );
// };

export default ButtonContainer;
