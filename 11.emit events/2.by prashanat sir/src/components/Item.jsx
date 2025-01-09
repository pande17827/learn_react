import PropTypes from "prop-types";
import style from "./Item.module.css";

function Item({ foodItem ,handleBuyButton}) {


 
  return (
    <>
      <li className={ style.kg_button}>
        <span className={style.kg_span}>{foodItem}</span>

      
        <button className={'${style.btn} btn btn-info'} onClick={handleBuyButton}

        >Buy</button>
        </li>
    </>
  );
}

// Add PropTypes validation
Item.propTypes = {
  foodItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
Item.propTypes = {
  handleBuyButton: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};



export default Item;
