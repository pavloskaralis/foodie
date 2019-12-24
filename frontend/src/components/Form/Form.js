import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'

class Form extends Component {
    render () {
        return (
            <form onSubmit={this.props.type === "signup" ? this.props.handleSignUp : this.props.handleLogIn}>
                <div>
                    <label for="username">Username</label>
                    <input type="text" value={this.props.username} onChange={this.props.handleInput} id="username"/>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="text" value={this.props.password} onChange={this.props.handleInput} id="password"/>
                </div>
                <div>
                    <button onClick={()=> this.props.toggleForm("")}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
