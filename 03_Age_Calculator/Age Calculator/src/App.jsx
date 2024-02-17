import { useState } from 'react'
import './App.css'
import AgeCalculator from './Components/AgeCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='main'>
     <AgeCalculator/>
   </div>
  )
}

export default App
