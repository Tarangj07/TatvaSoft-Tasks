import React, { Component } from 'react'
import './loginForm.css'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`Username: ${this.state.username} \n Email: ${this.state.email} \n Password: ${this.state.password}`)
    }
    render() {
        return (
            <div align='center'>
                <h1>LoginForm</h1>
                <div className='wrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='name'>Username: </label><br />
                        <input type='text' id='name' value={this.state.username} onChange={this.handleUsernameChange} /><br />
                        <label htmlFor='email'>Email: </label><br />
                        <input type='email' id='email' value={this.state.email} onChange={this.handleEmailChange} /><br />
                        <label htmlFor='pass'>Password: </label><br />
                        <input type='password' id='pass' value={this.state.password} onChange={this.handlePasswordChange} /><br />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm