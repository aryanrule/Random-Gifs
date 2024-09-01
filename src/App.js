// import React, { useEffect } from 'react'
// import axios from 'axios';




// const App = () => {
//hitting the api
 
//   const api_key = process.env.REACT_RANDOM_GIPHY_API_KEY;
//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;


//   async function fetchapi(){
//     try{
      
//      const fetchdata = await axios.get(url);
//      console.log(fetchdata);


//     }catch(error){
//       console.log(error);
//       console.log("error aa rha hai");
//     }
//   }

//    useEffect(() => {
//       fetchapi();
//    },[])

//   return (
//     <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
//       <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px]
//        px-10 py-2 text-4xl font-bold ">
//        Get Your GiFs {`:)`}</h1>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Random from './components/Random';
import AddTag from './components/AddTag';
import Loader from './components/Loader';



const App = () => {
  

  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center   bg-amber-50">
      <h1 className="  bg-red-300 -400 rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold">
        Get Your GiFs {`:)`}
      </h1>
       
      <div className='flex'>
      <Random/>
      <AddTag/>
      </div>
       
    </div>
  );
};

export default App;
