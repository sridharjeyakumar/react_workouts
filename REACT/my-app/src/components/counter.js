import React,{Component} from 'react';
class Walle extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        //this.setState({
            //count:this.state.count+1
        //},()=>{console.log(this.state.count);})// we can update the count value in console.
       this.setState(prevState=>({
        count:prevState.count+1
       }))
       console.log(this.state.count);
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()


    }
    render(){
        return (<div>
                <h2>count-{this.state.count}</h2>
                <button onClick={()=>this.incrementFive()}>+</button>
            </div>)
    }
}
export default Walle