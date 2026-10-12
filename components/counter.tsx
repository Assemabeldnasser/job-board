"use client"
import { useState } from "react"

export default function Counter (){
    const [counter,setCounter] = useState(0);
    return(
    <div>
        <h1 className="text-center text-blue-600">Counting .........</h1>
        <p className="text-center text-red-600">{counter}</p>
        <div className="flex justify-between gap-2 mx-2  ">
        <button className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400" onClick={()=>setCounter(counter+1)}> Increment </button>
        <button className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400" onClick={()=>setCounter(0)}> Reset </button>
        <button className="border-2 rounded-lg cursor-pointer my-0 px-1 border-blue-200 text-blue-400" onClick={()=>setCounter(counter-1)}> Decrement </button>
        </div>
    </div>
);
}