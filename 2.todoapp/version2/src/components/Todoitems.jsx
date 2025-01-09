
import ToDoItem from "./ToDoItem"
import PropTypes from 'prop-types';
import style from './Todoitems.module.css'

function Todoitems({ todoitem }) {
  return (
    <div className={style.itemcontainer}>
      {todoitem.map((item, index) => (
        <ToDoItem 
          key={index} 
          todoname={item.name} 
          tododate={item.duedate} 
        />
      ))}
    </div>
  );
}

// PropTypes validation
Todoitems.propTypes = {
  todoitem: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      duedate: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Todoitems;

