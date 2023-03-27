import React from "react";

const HOC = (HocComponent, data) => {
    class hOC extends React.Component {
        render() {
            return <HocComponent {...this.props} />
        }
    }
    return hOC
}

export default HOC