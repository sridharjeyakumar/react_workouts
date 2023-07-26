import React,{useState} from 'react'
function HookCounterTwo(){
    const initialCount=0
    const [count,setCount]=useState(initialCount)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevValue=>prevValue+1)
        }

    }

    return(
        <>
         Count:{count}
         <button onClick={()=>setCount(prevValue=>prevValue+1)}>increment</button>
         <button onClick={()=>setCount(prevValue=>prevValue-1)}>decrement</button>
         <button onClick={()=>setCount(initialCount)}>reset</button>
         <button onClick={incrementFive}>increment5</button>
        </>
    )
}
export default HookCounterTwo;