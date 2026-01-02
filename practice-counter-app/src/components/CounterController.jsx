import React from 'react'
import { useState } from 'react';

const CounterController = () => {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [histories, SetHistories] = useState([]);

  return (
    <div>
      <div className='counterValue'>{count}</div>
      <div>
        <button onClick={() => {
          setCount(count - step);
          SetHistories([...histories, -step])
        }}>-</button>
        <button onClick={() => {
          setCount(count + step);
          SetHistories([...histories, +step])
        }}>+</button>
        <div>
          <label>변화량</label>
          <input
            type="number"
            value={step}
            onChange={(e) => {
              const maxStep = Number(e.target.value);

              if (maxStep >= 1) {
                setStep(maxStep);
              }
            }} />
        </div>
      </div>
      <div>
        <h2>변경 내역</h2>
        {
          histories.length === 0 ? <div>변경 내역이 없습니다</div> : <div>
            <ol>
              {histories.map((history,index )=>(<li key={`${index} - ${history}`}>{history}</li>))}

            </ol>
          </div>
        }
      </div>
    </div>
  )
}

export default CounterController