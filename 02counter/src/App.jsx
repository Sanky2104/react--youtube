import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, countChangeKaro] = useState(0)
  // let counter = 0
  const addVal = () => {
    // counter++
    countChangeKaro(counter+1)
    // console.log('clicked', counter); // shows old value, because countChangeKaro function is asynchonous
  } 

  const removeVal = () => {
    countChangeKaro(counter--)
  }
  return (
    <>
      <h1>Chai aur react yt series</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addVal}>add value, current val {counter}</button>
      <br />
      <br />
      <button onClick={removeVal}>decrease value, curr val {counter}</button>
    </>
  )
}

export default App
