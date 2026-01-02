import { useState } from 'react'
import Header from './components/Header.jsx'
import CounterController from './components/CounterController.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <CounterController/>
      Hello Counter App!
      </div>
  )
}

export default App
