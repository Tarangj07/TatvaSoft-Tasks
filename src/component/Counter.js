import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        this.increaseCount = this.increaseCount.bind(this)
    }
    
    increaseCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        Count = {this.state.count} <br />
        <button onClick={this.increaseCount}>Click</button>
      </div>
    )
  }
}

export default Counter