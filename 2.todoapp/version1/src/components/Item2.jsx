

function Item2() {
    let name="Buy Milk"
    let date="4/10/2024"

  return (
    <>
        <div className="row kg-row">
          
          <div className="col-4">
            {name}
          </div>

          
          <div className="col-4">
            {date}
          </div>

          
          <div className="col-2">
            <input type="button " className='btn btn-danger' name="" id="" value="Delete"/>
          </div>
        </div>
    
    </>
  )
}

export default Item2