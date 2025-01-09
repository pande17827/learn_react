import ErrorMessage from "./components/ErrorMessage"
import FoodItmes from "./components/FoodItmes"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  let foodItem=['dal','green vegetable','roti','salad','milk']

  return (
    <>
        <h1>Healthy Foods</h1>
        <ErrorMessage items={foodItem}></ErrorMessage>
        <FoodItmes items={foodItem}></FoodItmes>
    </>
  )
}

export default App