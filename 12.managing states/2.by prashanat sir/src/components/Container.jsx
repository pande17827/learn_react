import PropTypes from "prop-types";
import style from './Container.module.css'


function Container({children}) {
  return (
    <div className={style.col}>
      {children}
    </div>
  )
}
Container.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children is a valid React node and is required
  };
export default Container
