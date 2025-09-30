import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, countChangeKaro] = useState(0)
  // let counter = 0
  const addVal = () => {
    // counter++
    if (counter < 20){
      countChangeKaro(counter + 1)
    } else {
      alert("Cant go more than 20")
    }
    // console.log('clicked', counter); // shows old value, because countChangeKaro function is asynchonous
  } 

  const removeVal = () => {
    if (counter > 0){
      countChangeKaro(counter - 1)
    } else {
      alert('Cant go negative')
    }
  }

  const resetVal = () => {
    countChangeKaro(0)
  }

  return (
    <>
      <h1>Chai aur react yt series</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addVal}>add value, current val {counter}</button>
      <br />
      <br />
      <button onClick={removeVal}>decrease value, curr val {counter}</button>
      <br />
      <br />
      <button onClick={resetVal}>Reset counter, curernt val: {counter}</button>
    </>
  )
}

export default App