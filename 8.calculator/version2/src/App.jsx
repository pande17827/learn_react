import style from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("4");
  const onButtonClick=(buttonText)=>{
    if (buttonText==="C") {
      setCalValue("")
    }
    else if(buttonText==="="){
      const result=eval(calValue)
      setCalValue(result)
      
    } 
    else{
      const newDisplayValue=calValue+buttonText
      setCalValue(newDisplayValue)

    }
    console.log(buttonText)
  }
  
  return (
    <div className={style.calculator}>
      <Display displayValue={calValue} />
      <ButtonContainer
        onButtonClick={onButtonClick}
      
      ></ButtonContainer>
    </div>
  );
}

export default App;
