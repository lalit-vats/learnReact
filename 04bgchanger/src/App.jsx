import { useState } from "react"


function App() {
  const [color, setColor] = useState('olive')
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed  flex-wrap item-center justify-center  bottom-12 inset-x-0 px-2">
        <div className="flex  flex-wrap justify-center gap-3 bg-white py-2 px-3 shadow-lg rounded-lg">
          <button className="outline-none py-2 px-4 rounded-full text-white font-semibold shadow-lg bg-red-400 hover:bg-red-600 ..."
           
           onClick={()=>setColor('red')}
           >Red</button>
          <button className="outline-none py-2 px-4 rounded-full text-white font-semibold shadow-lg"
           style={{backgroundColor:'green'}}
           onClick={()=> setColor('green')}
           >Green</button>
          <button className="outline-none py-2 px-4 rounded-full text-white font-semibold shadow-lg"
           style={{backgroundColor:'blue'}}
           onClick={()=> setColor('blue')}
           >Blue</button>
          <button className="outline-none py-2 px-4 rounded-full text-white font-semibold shadow-lg"
           style={{backgroundColor:'purple'}}
           onClick={()=> setColor('purple')}
           >Purple</button>
          <button className="outline-none py-2 px-4 rounded-full text-white font-semibold shadow-lg"
           style={{backgroundColor:'orange'}}
           onClick={()=> setColor('orange')}
           >Orange</button>
          <button className="outline-none py-2 px-4 rounded-full text-white font-semibold shadow-lg"
           style={{backgroundColor:'brown'}}
           onClick={()=>setColor('brown')}
           >Brown</button>
          <button className="outline-none py-2 px-4 rounded-full text-white font-semibold shadow-lg"
           style={{backgroundColor:'pink'}}
           onClick={()=>setColor('pink')}
           >Pink</button>
          <button className="outline-none py-2 px-4 rounded-full text-white font-semibold shadow-lg"
           style={{backgroundColor:'lavender'}}
           onClick={()=>setColor('lavender')}
           >Lavender</button>
          <button className="outline-none py-2 px-4 rounded-full text-white font-semibold shadow-lg"
           style={{backgroundColor:'grey'}}
           onClick={()=>setColor('grey')}
           >Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App
