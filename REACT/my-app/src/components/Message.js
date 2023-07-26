import React,{Component} from 'react';
class Robo extends Component{
    constructor(){
        super()
        this.state={
            greeting:'Hey Siri'
        }
    }
    changeGreeting(){
        this.setState({
            greeting:'Hey Sridhar'
        })
    }
    render(){
        return (<div>
                 <h1> {this.state.greeting}</h1>
                 <button onClick={()=>this.changeGreeting()}>click it</button>
            </div>)
    }
}
export default Robo