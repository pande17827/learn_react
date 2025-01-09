import Heading from "./components/heading"

function App() {
    

    let foodItem=['dal','green vegetable','roti','salad','milk']
    // let foodItem=[]

    if(foodItem.length==0){
        return <h3>I am still hungry</h3>

    }
    
  return (
    <>
        <Heading></Heading>
        <ul>
            {foodItem.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </>
  )
}

export default App