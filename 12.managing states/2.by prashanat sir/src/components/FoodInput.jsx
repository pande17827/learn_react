import PropTypes from "prop-types";
import style from "./FoodInput.module.css"
function FoodInput({handleKeyDown}) {
  return (
    <>
        <input 
            type="text" 
            className={style.fdinp} 
            placeholder="enter your text"
            onKeyDown={handleKeyDown}
        />
    </>
  )
}
FoodInput.propTypes = {
  handleKeyDown: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
export default FoodInput
