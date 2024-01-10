import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Andi'
      }
    }
    
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: 'Andi'
            })
        } , 2000)
    }

    render() {
        console.log('****************PARENT COMPONENT****************');
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>

                {/* <RegularComponent name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        );
    }
}

export default ParentComponent;