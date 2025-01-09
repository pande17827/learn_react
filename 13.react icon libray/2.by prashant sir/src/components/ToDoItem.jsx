import PropTypes from 'prop-types';

function ToDoItem({ todoname, tododate, onDeleteClick }) {
  return (
    <div className="row kg-row">
      <div className="col-4">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <input
          type="button"
          className="btn btn-danger"
          value="Delete"
          onClick={() => onDeleteClick(todoname)}
        />
      </div>
    </div>
  );
}

ToDoItem.propTypes = {
  todoname: PropTypes.string.isRequired,
  tododate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired, // Correct type
};

export default ToDoItem;
