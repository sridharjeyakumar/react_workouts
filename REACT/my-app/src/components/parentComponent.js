import React ,{Component} from 'react';
import ChildComponent from './childComponent';
class ParentComponent extends Component{
    constructor(){
        super()
        this.state={
            parentName:'parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(){
        alert(`Hi ${this.state.parentName}`)
    }

render(){
    return (<div>
           <ChildComponent greetHandler={this.greetParent}/>
        </div>)
}
}
export default ParentComponent