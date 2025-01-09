import ErrorMessage from "./components/ErrorMessage"
import FoodItmes from "./components/FoodItmes"
import "bootstrap/dist/css/bootstrap.min.css"
import style from "./App.module.css"
import Container from "./components/Container"


function App() {
  let foodItem=['dal','green vegetable','roti','salad','milk']

  return (
    <>
        <Container><h1 className={style.kg_heading}>Healthy Foods</h1>
        <ErrorMessage items={foodItem}></ErrorMessage>
        <FoodItmes items={foodItem}></FoodItmes></Container>
        

      


      <Container>
        <p>
          Above is the list of healthy food that
          are good for your health and well being.

        </p>
      </Container>


      
    </>
  )
}

export default App