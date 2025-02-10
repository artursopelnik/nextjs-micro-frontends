import "./App.css";

import { useState } from "react";
import viteLogo from "./assets/vite.svg";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className={'partial-header'}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        background: "#efefef",
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center",
        marginTop: '1rem'
      }}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>micro-frontend (header)</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
