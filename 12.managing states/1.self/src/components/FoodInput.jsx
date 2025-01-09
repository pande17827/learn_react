import PropTypes from "prop-types";
import style from "./FoodInput.module.css"
function FoodInput({handleOnChange}) {
  return (
    <>
        <input 
            type="text" 
            className={style.fdinp} 
            placeholder="enter your text"
            onChange={handleOnChange}
        />
    </>
  )
}
FoodInput.propTypes = {
  handleOnChange: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
export default FoodInput
