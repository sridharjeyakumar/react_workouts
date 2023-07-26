import React,{useState,useEffect} from 'react'
function HoookCounterFive(){
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`click ${count}`
    })
    return(
        <>
        <button onClick={()=>setCount(count+1)}>click{count}</button>
        </>
    )
}
export default HoookCounterFive