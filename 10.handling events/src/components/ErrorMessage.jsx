import PropTypes from 'prop-types';

function ErrorMessage({ items }) {
  return (
    <>
      {items.length === 0 && <h3>I am still hungry</h3>}
    </>
  );
}

ErrorMessage.propTypes = {
  items: PropTypes.array.isRequired, // Ensure `items` is an array and required
};

export default ErrorMessage;
