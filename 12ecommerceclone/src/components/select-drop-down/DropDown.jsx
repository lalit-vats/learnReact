import React, { useState } from 'react'
import './dropDown.css';

const DropDown = () => {

    const [isOpen, setIsOpen] = useState(false);

const handleOpen = () =>{
    setIsOpen(!isOpen)
}
{/* is se aage time 46:18 se start krna hai or close finction banana hai date : 12-07-24 */}
    return (
        <div className="selectDrop cursor">
            <span className='openSelect' onClick={handleOpen}>All Categories</span>
            {/* <i className="bi bi-chevron-down "></i> */}
            {isOpen === true && 
            <div className='dropDown'>
            <div className="searchField">
                <input type="text" />
            </div>

            <ul className='searchResult'>
                <li onClick={() => setIsOpen(false)}>Search</li>
                <li onClick={() => setIsOpen(false)}>Search</li>
                <li onClick={() => setIsOpen(false)}>Search</li>
                <li onClick={() => setIsOpen(false)}>Search</li>
                <li onClick={() => setIsOpen(false)}>Search</li>
                <li onClick={() => setIsOpen(false)}>Search</li>
                <li onClick={() => setIsOpen(false)}>Search</li>
                <li onClick={() => setIsOpen(false)}>Search</li>
                <li onClick={() => setIsOpen(false)}>Search</li>
                <li onClick={() => setIsOpen(false)}>Search</li>
                <li onClick={() => setIsOpen(false)}>Search</li>
                
            </ul>

        </div>
            }
        </div>

    )
}

export default DropDown