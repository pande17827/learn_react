
import Child from "./Child";

function Parent(props) {
  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message received from App: {props.message}</p>
      {/* Pass the same message down to the Child component */}
      <Child message={props.message} />
    </div>
  );
}

export default Parent;
