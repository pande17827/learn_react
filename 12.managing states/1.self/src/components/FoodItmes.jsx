import PropTypes from "prop-types";
import Item from "./Item";

function FoodItmes({ items }) {
  return (
    <>
      <ul className="list_group" style={{ listStyleType: "none", padding: 15, margin: 10 }}>
  {items.map((item, index) => (
    <Item 
      key={index} 
      foodItem={item}
      handleBuyButton={()=>console.log(`${item} bought`)}
    ></Item>
  ))}
</ul>

    </>
  );
}

// Add PropTypes validation
FoodItmes.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]) // Adjust type based on your data
  ).isRequired, // Ensure items is provided and is an array
};

export default FoodItmes;
