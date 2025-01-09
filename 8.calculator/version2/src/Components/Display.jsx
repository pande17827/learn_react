import PropTypes from 'prop-types';
import style from './Display.module.css';

function Display({ displayValue }) {
  return (
    <input 
      type="display" 
      name="" 
      id="" 
      className={style.display} 
      value={displayValue} 
      readOnly // Prevent editing since it's for display
    />
  );
}

Display.propTypes = {
  displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Validate prop type
};

export default Display;
