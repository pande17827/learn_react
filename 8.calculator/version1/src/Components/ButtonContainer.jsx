import style from './ButtonContainer.module.css';

function ButtonContainer() {
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <>
      <div className='buttons_container'>
        {buttonNames.map((buttonName, index) => (
          <button key={index} className={style.buttons}>
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;
