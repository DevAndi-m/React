import React, { Component } from "react";

class RegularComponent extends Component {
    render() {
        console.log('****************REGULAR COMPONENT****************');
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        );
    }
}

export default RegularComponent;