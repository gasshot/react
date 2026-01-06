import { useState, useEffect } from 'react'
import './App.css'
import Flag from './components/Flag'

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // useEffect(
  //   () => {
  //     console.log(`카운트 이펙트 실행 : ${count}`);
  //     // 클린업 함수
  //     // count 1 -> 2
  //     // count 1 이펙트 함수 실행
  //     // count 1 이펙트 클린업 함수 실행
  //     // count 2 이펙트 함수 실행
  //     return () => {
  //       console.log(`카운트 이펙트 클린업 함수 실행 : ${count}`);
  //     };
  //   }, [count]);

  // useEffect(
  //   () => {
  //     console.log(`플래그 이펙트 실행 : ${flag}`);
  //   }, [flag]);

  // useEffect(() => {
  //   if (flag) {
  //     console.log(`플래그가 ON이고 count는 ${count}`);
  //   }
  // }, [count, flag])

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>
        증가
      </button>
      <div>
        <button onClick={() => {
          setFlag(!flag);
        }}>{flag ? "ON" : "OFF"}</button>
        {flag ? <Flag/> : null}
      </div>
    </div>
  )
}

export default App
