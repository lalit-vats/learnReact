import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='flex justify-center py-5 bg-gray-700 text-white font-bold'>User : {userId}</div>
  )
}

export default User