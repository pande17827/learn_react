import PropTypes from "prop-types";
import style from "./Item.module.css";

function Item({ foodItem }) {
  return (
    <>
      <li className={ style.kg_button}>
        <span className={style.kg_span}>{foodItem}</span>
        
        </li>
    </>
  );
}

// Add PropTypes validation
Item.propTypes = {
  foodItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Item;
