import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import ItemToAdd from './components/ItemToAdd';
import Todoitems from './components/Todoitems';
import WelcomeMessge from './components/WelcomeMessge';
import "./App.css";
import { useState } from 'react';

function App() {
  const [todoitem, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    
    const newTodoItems = [
      ...todoitem,
      { name: itemName, duedate: itemDueDate }
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoitem.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item deleted: ${todoItemName}`);
  };

  return (
    <>
      <AppName />
      <div className="container text-center">
        <ItemToAdd onNewItem={handleNewItem} />
        {todoitem.length === 0 && <WelcomeMessge />}
        <Todoitems todoitem={todoitem} onDeleteClick={handleDeleteItem} />
      </div>
    </>
  );
}

export default App;
