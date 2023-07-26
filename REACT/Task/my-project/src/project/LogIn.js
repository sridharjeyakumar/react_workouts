import React ,{Component} from 'react'
import './Form.css';
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
           name:'',
           password:''
        }
    }
    handleUserNameChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
     handlePasswordChange=(event)=>{
         this.setState({
             password:event.target.value
         })
     }
     handleSubmit=(event)=>{
        event.preventDefault()
        if(this.state.password==='admin'){
            alert('welcome')
        }
        else{
            alert('incorrect')
        }
     }
    
    render(){
        return(
            <div class='outer'>
                 <div class='outer1'>
                    <form onSubmit={this.handleSubmit}>
                      <div class='head'> 
                          <h1>Log In</h1>
                      </div>
                       <div class='head1'>
                            <h2>Email address</h2>
                            <input type='text' value={this.state.name} onChange={this.handleUserNameChange} placeholder='Enter email'/>
                       </div>
                       <div class="head2">
                            <h2>Password</h2>
                            <input type='password' value={this.state.password} onChange={this.handlePasswordChange} placeholder='Enter password'/>
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
        )}}
export default Login