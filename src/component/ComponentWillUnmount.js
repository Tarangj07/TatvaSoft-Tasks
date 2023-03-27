import React, { Component } from 'react'

class ComponentWillUnmount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            show: true
        }
    }

    render() {
        return (
            <>
                <h1>ComponentWillUnmount in action!</h1><br />
                <p>{this.state.show ? <Child /> : null}</p>
                <button onClick={() => { this.setState({ show: !this.state.show }) }}>Click here to change the show state</button>
            </>
        )
    }
}

export class Child extends Component {

    componentWillUnmount() {
        alert('This will unmount!')
    }

    render() {
        return (
            <>
                I am child component
            </>
        )
    }
}

export default ComponentWillUnmount