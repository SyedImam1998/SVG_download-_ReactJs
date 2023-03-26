import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SVGToPNG from './SVGToPNG'
import SVGToPNG1 from './SVGToPNG1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      
      <SVGToPNG></SVGToPNG>
      <SVGToPNG1></SVGToPNG1>
    </div>
  )
}

export default App
