import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-lg mb-4' >Tailwind Test</h1>
      <Card userName="Lalit" btnText="Visit here"/>
      <Card userName="Hitesh" btnText="Click here"/>
    </>
  )
}

export default App
