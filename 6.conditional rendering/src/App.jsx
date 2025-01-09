import Heading from "./components/heading"

function App() {
    

    let foodItem=['dal','green vegetable','roti','salad','milk']
    // let foodItem=[]

   
    
  return (
    <>
        <Heading>Healthy Foods</Heading>
        {foodItem.length==0 && <h3>I am still hungry</h3>}
        <ul>
            {foodItem.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </>
  )
}

export default App