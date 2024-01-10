import React, { Component } from 'react' 

class EventBind extends Component {
    constructor() {
        super()
        this.state = {
            message: 'hello'
        }

        this.hasLeft = this.hasLeft.bind(this); 
    }
    
    hasLeft() {
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.hasLeft.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.hasLeft()}>Click</button> */}
                <button onClick={this.hasLeft}>Leave</button>
            </div>
        )
    }
}

export default EventBind