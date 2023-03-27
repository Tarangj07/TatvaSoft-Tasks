import React, { Component } from 'react'

class GetSnapshotBeforeUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Constructor state name'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: 'This is a componentDidMount method' })
        }, 5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('previous-state').innerHTML = 'Previous state was ' + prevState.name;
        return true;
    }

    componentDidUpdate() {
        document.getElementById('current-state').innerHTML = 'Current state is ' + this.state.name;
    }

    render() {
        return (<>
            <h1>{this.state.name}</h1>
            <p id='previous-state'></p>
            <p id='current-state'></p></>
        )
    }
}

export default GetSnapshotBeforeUpdate