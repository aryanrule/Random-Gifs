import React from 'react'
import Loader from './Loader'
import Usegif from '../hooks/Usegif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const {gifImage , fetchData , loading} = Usegif();

  return (
    <div className='min-w-[350px] max-h-[700px]  bg-green-600  m-[30px] rounded-lg flex flex-col items-center justify-center'>
        <h1 className='text-center m-[10px]  font-semibold text-lg'>get a Random Gif</h1>

        {loading ? (<Loader/>) :(<img src={gifImage} width="350"/>)}

        
        <button 
        onClick={() => fetchData()}
        className='text-center p-[10px]  rounded-lg border-[2px] border-red-100 bg-yellow-50 m-[20px] cursor-pointer'>Generate a Random</button>
    </div>
  )
}

export default Random