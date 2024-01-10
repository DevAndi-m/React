import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Andi'
        }
        console.log('LifeCycle A constructor ')
    }

    changeState = () => {
        this.setState({
            name: 'Hasan'
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle A component Did mount')
    }

    shouldComponentUpdate(){
        console.log('Lifecycle A shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate');
    }

    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                LifeCycle A
                <div>
                    <button onClick={this.changeState}>ChangeState</button>
                    <LifecycleB />
                    
                </div>
                <h1>Current state: {this.state.name}</h1>
            </div>
        )
    }
}

export default LifecycleA