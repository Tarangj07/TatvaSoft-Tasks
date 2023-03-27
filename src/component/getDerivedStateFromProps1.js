import React, { Component } from 'react'

class ChildComponentForGetDerivedMethod extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Constructor method'
        }
    }
    static getDerivedStateFromProps(props, state) {
        return { name: props.nameFromParent }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

class BigApp extends Component {
    render() {
        return (
            <div>
                <ChildComponentForGetDerivedMethod nameFromParent='getDerivedStateFromProps method' />
            </div>
        )
    }
}

export default BigApp