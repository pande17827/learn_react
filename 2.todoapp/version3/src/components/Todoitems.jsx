import ToDoItem from "./ToDoItem";
import PropTypes from 'prop-types';
import style from './Todoitems.module.css';

function Todoitems({ todoitem, onDeleteClick }) {
  return (
    <div className={style.itemcontainer}>
      {todoitem.map((item) => (
        <ToDoItem
          key={item.name}
          todoname={item.name}
          tododate={item.duedate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

Todoitems.propTypes = {
  todoitem: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      duedate: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default Todoitems;
