
import style from "./Heading.module.css"
function Heading() {
    const classNames=[style.bkg,style.ftcolor].filter(Boolean).join('')
  return (
    <>
        <h1 className={classNames}>Healthy Food Items</h1>
    
    </>
  )
}

export default Heading