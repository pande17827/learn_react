import ErrorMessage from "./components/ErrorMessage"
import FoodItmes from "./components/FoodItmes"
import "bootstrap/dist/css/bootstrap.min.css"
import style from "./App.module.css"


function App() {
  let foodItem=['dal','green vegetable','roti','salad','milk']

  return (
    <>
        <h1 className={style.kg_heading}>Healthy Foods</h1>
        <ErrorMessage items={foodItem}></ErrorMessage>
        <FoodItmes items={foodItem}></FoodItmes>
    </>
  )
}

export default App