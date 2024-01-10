import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Andi'
        }
        console.log('Lifecycle B constructor ')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('Lifecycle B component Did mount')
    }

    shouldComponentUpdate(){
        console.log('Lifecycle B shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle B getSnapshotBeforeUpdate');
    }

    componentDidUpdate(){
        console.log('Lifecycle B componentDidUpdate');
    }

    render() {
        console.log('Lifecycle B render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB