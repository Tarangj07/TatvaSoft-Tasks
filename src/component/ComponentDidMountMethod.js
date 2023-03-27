import React, { Component } from 'react'

class ComponentDidMountMethod extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'This name will change in 5 seconds!'
        }
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

export default ComponentDidMountMethod