import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"sans",
    age:22
  }
  let myArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    {/* <Card username='sanky' someObj = {myObj} someArr = {myArr} /> */}
    <Card username = 'sanky' btnText = 'click me' />
    <Card username= 'sanskriti' btnText = 'readme' />
    <Card username= 'sanskriti'/>
    </>
  )
}

export default App
