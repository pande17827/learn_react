
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import ItemToAdd from './components/ItemToAdd';

import Todoitems from './components/Todoitems';

import "./App.css"
function App() {
  const todoitem = [
    { name: "buy milk", duedate: "4/12/2024" },
    { name: "buy milk", duedate: "4/12/2024" },
    { name: "buy milk", duedate: "4/12/2024" },
    { name: "buy milk", duedate: "4/12/2024" },
    { name: "buy milk", duedate: "4/12/2024" },
    { name: "buy milk", duedate: "4/12/2024" },
    { name: "buy milk", duedate: "4/12/2024" }

];



  return (
    <>
      <AppName></AppName>
      <div className="container text-center">
        <ItemToAdd></ItemToAdd>
        <Todoitems todoitem={todoitem}></Todoitems>
        
        

      </div>
      
    
    </>
  )
}

export default App