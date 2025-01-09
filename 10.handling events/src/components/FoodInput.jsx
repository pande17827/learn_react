
import style from "./FoodInput.module.css"
function FoodInput() {
  return (
    <>
        <input 
            type="text" 
            className={style.fdinp} 
            placeholder="enter your text"
            onChange={(event)=>console.log(event.target.value)}
        />
    </>
  )
}

export default FoodInput
