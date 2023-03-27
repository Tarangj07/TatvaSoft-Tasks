import React, { Component } from 'react'

class ShouldComponentUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'This name will not change in 5 seconds because we set the shouldComponentUpdate method to return false'
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: 'This is a componentDidMount method' })
        }, 5000)
    }

    render() {
        return (
            <div>{this.state.name}</div>
        )
    }
}

export default ShouldComponentUpdate