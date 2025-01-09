import PropTypes from 'prop-types';

function ToDoItem({todoname,tododate}) {
    
  return (
    <>
        <div className="row kg-row">
          
          <div className="col-4">
            {todoname}
          </div>

          
          <div className="col-4">
            {tododate}4
          </div>

          
          <div className="col-2">
            <input type="button " className='btn btn-danger' name="" id="" value="Delete"/>
          </div>
        </div>

    
    </>
  )
}

ToDoItem.propTypes = {
  todoname: PropTypes.string.isRequired,
  tododate: PropTypes.string.isRequired,
};

export default ToDoItem