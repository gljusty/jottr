import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        b
      </button>
      <div>{count}</div>
    </div>
  );
}

export default App;
