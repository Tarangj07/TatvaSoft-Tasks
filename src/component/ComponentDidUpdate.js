import React, { Component } from 'react'

class ComponentDidUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'name from previous state'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: 'This is a componentDidMount method' })
        }, 5000)
    }

    componentDidUpdate(prevState) {
        if (this.state.name !== prevState.name) {
            document.getElementById('state-change').innerHTML = 'Yes, the state has changed! ';
        }
    }

    render() {
        return (<>
            <h1>{this.state.name}</h1>
            <p id='state-change'></p></>
        )
    }
}

export default ComponentDidUpdate