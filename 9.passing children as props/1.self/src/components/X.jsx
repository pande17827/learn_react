
import style from "./X.module.css"
import PropTypes from "prop-types";
function X({children}) {
  return (
    <>
        <div className={style.col}>{children}</div>
    </>
  )
}
X.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children is a valid React node and is required
  };
  

export default X
