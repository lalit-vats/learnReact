import React, { useContext, useState } from 'react'
//icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { LuLayoutDashboard } from 'react-icons/lu'
import { PiBuildingOffice } from "react-icons/pi";
import { BsBuildingAdd } from "react-icons/bs";
//icons end here
import { createContext } from 'react';
import { NavLink } from "react-router-dom";



const SidebarContext = createContext();

const childIcons = {
    "Branch": <LuLayoutDashboard />,
}

const Sidebar = ({ children }) => {
    const [expended, setExpended] = useState(true);
    return (
        <aside className='h-screen'>
            <nav className='h-full flex flex-col bg-slate-200 border-r shadow-sm border-gray-300' >

                <SidebarContext.Provider value={{ expended }}>
                    <ul className='flex-1 px-3'>{children}</ul>
                </SidebarContext.Provider>
                <div className={`border-t border-gray-300 flex justify-between p-3 items-center cursor-pointer overflow-hidden transition-all ${expended ? 'w-52 ' : 'w-12'}`}>
                    <button className='p-1.5 rounded-full bg-slate-100 hover:bg-red-100 shadow-sm float-end'>
                        <FiLogOut color='red' />
                    </button>
                    <h4 className={`font-semibold mr-4 ${expended ? 'visible' : 'hidden'}`}>Log out</h4>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar

export function SidebarItem({ icon, text, active, alert, child, items }) {
    const { expended } = useContext(SidebarContext);
    const [showChildItems, setShowChildItems] = useState(false);

    const handleOnClickItem = () => {
        setShowChildItems(!showChildItems);
    }

    const getIcon = (icon) => {
        switch (icon) {
            case 'LuLayoutDashboard':
                return <LuLayoutDashboard size={20} />
            case 'PiBuildingOffice':
                return <PiBuildingOffice size={20} />
            case 'BsBuildingAdd':
                return <BsBuildingAdd size={20} />
            default:
                return null;
        }
    }

    return (
        <>
            <div className={`flex justify-between items-center overflow-hidden transition-all ${expended ? 'w-48 ' : 'w-12'} `} onClick={handleOnClickItem}>
                <div className={` flex   py-2 px-3 items-center  cursor-pointer `} >
                    {getIcon(icon)}
                    <p className={`font-medium ml-5 ${expended ? 'visible' : 'hidden'}`}>{text}</p>
                </div>

                {showChildItems ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {showChildItems && items && items.length > 0 ?
                <div className={`flex flex-col  w-full items-center py-1 px-1 bg-gray-300 gap-1 rounded-md shadow-sm overflow-hidden transition-all ${expended ? 'w-full ' : 'w-12'} `}>
                    {items.map((it, index) =>
                        <div key={index} className={`flex  py-2 px-2 rounded-sm  bg-slate-200 cursor-pointer hover:bg-blue-100 overflow-hidden transition-all w-full `} >
                            {getIcon(it.icon)}
                            <p className='ml-5'>{it.name}
                            </p>
                        </div>
                    )}
                </div> : null}
        </>
    )

}

