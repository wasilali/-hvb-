import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
const DogApi = () => {
    const [left,setLeft]=useState([])
    const [right,setRight]=useState([])
    const [img,setImg]=useState("")
    console.log(left);
console.log(img);
async function dogApi() {
    const {data} = await axios.get("https://dog.ceo/api/breeds/image/random");
    setImg(data.message);
}

    useEffect(()=>{
        dogApi()
    },[])

const leftClick=()=>{
    setLeft([img,...left])
    dogApi()
}

const rightClick=()=>{
    
}

  return <>
  <img src={img} height={200} width={200} alt="" />
  <div>
    <button onClick={leftClick}>left</button>
    <button onClick={rightClick}>right</button>
    {
        left&&left.map((l)=>(
            <img src={l} height={200} width={200} alt="" />
        ))
    }
  </div>
  </>
}

export default DogApi