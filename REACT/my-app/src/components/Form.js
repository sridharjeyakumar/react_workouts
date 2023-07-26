import React,{Component} from "react";
class Rock extends Component{
    constructor(props){
        super(props)
        this.state={
            username:''
        }

    }
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    render(){
        return(
            <form>
            <div>
                <lable>Username</lable>
            
                    <input type="text" value={this.state.username}
                    onChange={this.handleUsernameChange}
                    />
               </div>
            </form>

        )
    }
}
export default Rock;