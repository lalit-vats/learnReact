import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='py-4 bg-orange-400 text-3xl text-center font-semibold'>lalit Or redux</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
