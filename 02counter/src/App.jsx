import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 5;
  const addValue = () => {
    console.log("valueAdded", Math.random());
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <h1>Lalit aur React</h1>
        <h2>Counter Value:{counter}</h2>
        <button onClick={addValue} disabled={counter === 20 ? true : false}>
          Add Value
        </button>
        <hr />
        <button onClick={removeValue} disabled={counter === 0 ? true : false}>
          Remove Value
        </button>
      </div>
    </>
  );
}

export default App;
