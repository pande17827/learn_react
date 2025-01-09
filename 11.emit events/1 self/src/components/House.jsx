import DoorbellButton from "./DoorbellButton"

function House() {
    const handleRingBell=()=>{
        alert("Ding Dong! Someone is at the dorr")
    }
  return (
    <>
        
        <DoorbellButton ringbell={handleRingBell}></DoorbellButton>
    
    
    </>
  )
}

export default House
