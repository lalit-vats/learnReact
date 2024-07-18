import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Sidebar, { SidebarItem } from './components/side-bar/Sidebar'
import { LuChevronFirst, LuChevronLast, } from 'react-icons/lu'
import sidebarNavigations from './data/sidebar.json';
import Layout from './layout/Layout'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'



function App() {
  const [expended, setExpended] = useState(false)
  return (
    <>
      <Header />
      <div className='grid sm:grid-cols-12'>
        <button onClick={() => setExpended((curr) => !curr)} className={`absolute hidden sm:block ${expended ? 'z-50 top-16 left-5' : 'z-50 top-16 left-44'} p-1 rounded-full bg-slate-100 hover:bg-slate-300 shadow-sm float-end mb-2`}>
          {expended ? <LuChevronFirst /> : <LuChevronLast />}
        </button>
        <div className={`relative overflow-hidden transition-all hidden sm:block ${expended ? 'w-16' : 'col-span-2'}`}>
          <Sidebar >
            <div className='mt-6'>
              {sidebarNavigations.map(it => {
                return (
                  // <NavLink to={it.link}>
                  <SidebarItem key={it} icon={it.icon} text={it.parent} items={it.children} active={true} />
                  // </NavLink>
                )
              })} 
            
            </div>
           
          </Sidebar>

        </div>
        <div className={`${expended ? 'col-span-11' : 'col-span-10'}`}>
         <Outlet/>
        </div>

      </div>
    </>
  )
}

export default App
