import { useState ,useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword ] = useState("")

  //useRef Hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*+={}[]~`"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length +1)

      pass += str.charAt(char)
      
    }

    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswrdtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0 ,8)
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(()=>{
  passwordGenerator()
  },
  [length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-md bg-gray-400 my-8 px-4 py-4 text-orange-500'>
      <div className='w-full flex justify-center'>
      <h1 className='mb-2 text-white font-semibold text-3xl'>Password Generator</h1>
      </div>
      <div className='flex shadow-md rounded-md overflow-hidden mb-4'>
          <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          ref={passwordRef}
          readOnly
          />
          <button 
          onClick={copyPasswrdtoClipboard}
          className='outline-none
           bg-blue-500 px-3 py-0.5 shrink-0
            text-white hover:bg-blue-700'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={50}
          value={length}
          className='curser-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label>Length&nbsp;:&nbsp;<strong>{length}</strong> </label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numAllowed}
            id="numInput" 
            onChange={()=>{setNumAllowed((prev)=> !prev)}}
            />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="numInput" 
            onChange={()=>{setCharAllowed((prev)=> !prev)}}
            />
          <label>Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
