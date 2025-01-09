

function CurrentTime() {
    let time =new Date()
  return (
    <p className="centering_items">This is the current time:{time.toDateString()}</p>
  )
}
      
export default CurrentTime