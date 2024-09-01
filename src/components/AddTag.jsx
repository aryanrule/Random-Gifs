import React, { useState } from 'react'
import Usegif from '../hooks/Usegif'
import Loader from './Loader';
const AddTag = () => {

  const {gifImage , fetchData ,loading} = Usegif();
  const [tag , setTag] = useState(null);
  
  return (
    <div className='min-w-[350px] max-h-[700px]   bg-blue-300  m-[30px] rounded-lg flex flex-col items-center justify-center'>
    <h1 className='text-center m-[10px]  font-semibold text-lg'>search your meme !</h1>
    
    {loading ? (<Loader/>):(<img src={gifImage} width="350px"/>)}
    
    <input 
    className='text-center p-[5px] rounded-lg border-[2px] border-red-100 bg-yellow-50   mb-[1px]  mt-2'
    onChange={(event) => setTag(event.target.value)}
    />
    <button
     className='text-center p-[10px]  rounded-lg border-[2px] border-red-100 bg-yellow-50 m-[20px] cursor-pointer'
     onClick={() => fetchData(tag)}>Add GIF You want</button>
    </div>
  )
}

export default AddTag