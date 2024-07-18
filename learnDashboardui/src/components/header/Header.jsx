import React from 'react'
import Logo from '../../assets/epclogo.svg'

const Header = () => {
    return (
        <>
            <div className='grid sm:grid-cols-12 px-4 py-2 bg-base-blue shadow-lg'>
                <div className='sm:col-span-2'>
                    <img src={Logo} alt="logo" className='w-36 h-12' />
                </div>
                <div className='sm:col-span-10'>
                    <h1 className='text-3xl font-bold'>React Dashboard</h1>
                </div>
            </div>
        </>
    )
}

export default Header