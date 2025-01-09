import PropTypes from "prop-types";

function Item({ foodItem }) {
  return (
    <>
      <li className="list_group_item">{foodItem}</li>
    </>
  );
}

// Add PropTypes validation
Item.propTypes = {
  foodItem: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Item;
