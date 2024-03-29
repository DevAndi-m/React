import React, { Component } from 'react'

class CounterApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log("Callback value: ", this.state.count )})

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment() 
    }

    render() {
        return (
            <div>
                <div> Count: {this.state.count} </div>
                <button onClick={()=> this.incrementFive()}>+5</button>
            </div>
        )
    }
}

export default CounterApp;
