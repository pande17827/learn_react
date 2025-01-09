
import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './components/AppName';
import ItemToAdd from './components/ItemToAdd';
import Item1 from './components/Item1';
import Item2 from './components/Item2';
import "./App.css"
function App() {
  return (
    <>
      <AppName></AppName>
      <div className="container text-center">
        <ItemToAdd></ItemToAdd>
        <div className='item-container'>
        <Item1></Item1>
        <Item2></Item2>
        </div>
        

      </div>
      
    
    </>
  )
}

export default App