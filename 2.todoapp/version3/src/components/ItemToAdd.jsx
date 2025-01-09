import { useState } from "react";

function ItemToAdd({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setDueDate] = useState("");

  const handleNameChange = (event) => setTodoName(event.target.value);
  const handleDateChange = (event) => setDueDate(event.target.value);

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="row">
      <div className="col-4">
        <input
          type="text"
          placeholder="Enter Element Here"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          value={todoDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="col-2">
        <input
           type="button"
           className="btn btn-success"
           onClick={handleAddButtonClicked}
           value="Add">
            
           </input>
      </div>
    </div>
  );
}

export default ItemToAdd;
