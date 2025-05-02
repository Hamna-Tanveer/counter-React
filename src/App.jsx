import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter]=useState(5)
//let Counter = 5
let addValue =()=>{
  console.log("clicked", Counter)
Counter = Counter+1
setCounter(Counter)
}
let removeValue =()=>{
if (Counter==0){
  Counter = Counter
setCounter(Counter)
}
else
Counter = Counter-1
setCounter(Counter)


}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{Counter}</h2>
      <button onClick={addValue}
      >Add value</button>
      <br/>
      <button onClick={removeValue}
      >Reduce value</button>
    </>
  )
}

export default App
