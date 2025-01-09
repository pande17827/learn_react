import PropTypes from "prop-types";
import style from "./Item.module.css";

function Item({ foodItem }) {

  // // without getting the event detail
  // const handleBuyButtonClicked=()=>{
  //   console.log(`${foodItem} being bought`);

  // }


  // with event details(event object is used to get all the details includeing) all properties and methods

  const handleBuyButtonClicked=(event)=>{
    console.log(event)
    console.log(`${foodItem} being bought`);

  }
  return (
    <>
      <li className={ style.kg_button}>
        <span className={style.kg_span}>{foodItem}</span>

        {/* without event details */}
        {/* <button className={'${style.btn} btn btn-info'} onClick={handleBuyButtonClicked} */}

        {/* with event details */}
        <button className={'${style.btn} btn btn-info'} onClick={(event)=>handleBuyButtonClicked(event)}

        >Buy</button>
        </li>
    </>
  );
}

// Add PropTypes validation
Item.propTypes = {
  foodItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Item;
