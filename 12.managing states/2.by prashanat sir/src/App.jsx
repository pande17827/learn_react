import ErrorMessage from "./components/ErrorMessage";
import FoodItmes from "./components/FoodItmes";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  

  let [textToShow, setTextState] = useState("Food Item Entered by user");

  let [foodItem, setFoodItems] = useState([
    
  ]);

  

  const onKeyDown = (event) => {
    if(event.key === "Enter"){
      let newFoodItem=event.target.value
      event.target.value=""
      let newItem=[...foodItem,newFoodItem]
      setFoodItems(newItem)
    }
    console.log(event.target.value);
    setTextState(event.target.value); // Update the state when input changes
  };

  return (
    <>
      <Container>
        <h1 className={style.kg_heading}>Healthy Foods</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
       
        <ErrorMessage items={foodItem}></ErrorMessage>
        <FoodItmes items={foodItem}></FoodItmes>
      </Container>

      <Container>
        <p>
          Above is the list of healthy food that
          are good for your health and well being.
        </p>
      </Container>
    </>
  );
}

export default App;
