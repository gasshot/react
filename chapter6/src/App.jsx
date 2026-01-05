import { useState, useRef } from 'react'
import './App.css'

function App() {
  const count = useRef(0);

  const [flag, setFlag] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          count.current = count.current + 1;
          console.log(`클릭한 횟수 : ${count.current}`);

        }}>
        클릭
      </button>
      <div>
        <button
          onClick={() => {
            setFlag(!flag);
          }}
        >
          {flag ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  )
}

export default App
