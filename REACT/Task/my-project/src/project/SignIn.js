import React,{useState} from 'react'
import  './Form.css';
function SignIn(){
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(password==='admin'){
            alert('Welcome')
        }
        else{
            alert('Check password')
        }
    }
    return(
        <div class='outer'>
         <div class='outer1'>
            <form onSubmit={handleSubmit}>
               <div class='head'>
                 <h1>Sign In</h1>
               </div> 
                <div class='head1'>
                    <h2>Email address</h2>
                    <input type='text' value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter email'/>
                </div>
                <div class='head2'>
                    <h2>Password</h2>
                    <input type='password' value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter password'/>
                </div>
                <div class='check'>
                    <input type='checkbox'/>
                    <lable>Remember me</lable>
                </div>
                <div class='entry'>
                    <button>Submit</button>
                </div>
                <div class='response'>
                <a href="#">Forget password?</a>
                </div>
            </form>
         </div>
        </div>
    )
}
export default SignIn