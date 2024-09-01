


//our costum hook 
//make a logic 

import React, { useEffect, useState } from 'react'
import axios from 'axios';

const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const Usegif = (tag) => {

 
  
  const [gifImage , setGifImage] =  useState('');
  const [loading , setLoading] = useState(false);
  //fetch 
  
  const fetchData = async (tag) => {
     setLoading(true);
     try{
        const response = await axios.get(tag ? `${url}&tag=${tag}` : url);
        console.log(response);
        const imageResponse = response.data.data.images.downsized_large.url;
        console.log(imageResponse);
        setGifImage(imageResponse);

     }
    
     catch(e){
        console.log(e);
        console.error(e);
        
     }
     setLoading(false);
  }


  useEffect(() => {
      fetchData('bike');
  } ,[]); //first time ren



  return {gifImage , fetchData ,loading};
}

export default Usegif;


