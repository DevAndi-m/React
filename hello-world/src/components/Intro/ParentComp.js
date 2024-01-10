import React, { Component } from 'react';

class ParentComp extends Component {
    constructor() {
        super()

        this.state = {
            name: 'parent'
        }
    }

    greetParent = () => {
        alert(`hello ${this.state.name}`)
    }
    
    render() {
        return (
            <div>

            </div>
        )
    }

    // Use this.props for class component properties!!!!
}

export default ParentComp;
