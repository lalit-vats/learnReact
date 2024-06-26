import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/lalit-vats')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //     setData(data)
    //     }
    // )
    // } , [])
  return (
    <div className=' flex flex-col-reverse items-center justify-center text-center  bg-gray-600 text-white text-3xl p-4' >Github Followers : {data.followers}
    <img src={data.avatar_url} alt='Github Picture' width='250px'className='mt-2 rounded-xl'/>
    </div>
  )
}

export default Github


export const GithubInfo = async () =>{
    const responce = await fetch('https://api.github.com/users/lalit-vats')
    return responce.json()
}