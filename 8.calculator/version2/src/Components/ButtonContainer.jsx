import style from './ButtonContainer.module.css';
import PropTypes from 'prop-types';
function ButtonContainer({onButtonClick}) {
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <>
      <div className='buttons_container'>
        {buttonNames.map((buttonName, index) => (
          <button key={index} className={style.buttons} onClick={()=>onButtonClick(buttonName)}>
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}
ButtonContainer.propTypes = {
  onButtonClick: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Validate prop type
};

export default ButtonContainer;
