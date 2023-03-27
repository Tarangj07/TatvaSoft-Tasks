import React, { PureComponent } from 'react'

class PurComponent extends PureComponent {
    render() {
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PurComponent