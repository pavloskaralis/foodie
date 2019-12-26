import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'


class Home extends Component {
    render () {
        return (
            <div>
                <h1>App Name</h1>
                <h3>App description</h3>
                <form onSubmit={this.props.type === "signup" ? this.props.handleSignUp : this.props.handleLogIn}>
                    <legend>{this.props.type === "signup" ? "Sign Up" : "Log In" }</legend>
                    <input type="text" value={this.props.username} onChange={this.props.handleInput} placeholder="Username" id="username"/>
                    <input type="text" value={this.props.password} onChange={this.props.handleInput} placeholder="Password" id="password"/>
                    <button type="submit">{this.props.type === "signup" ? "Sign Up" : "Log In" }</button>               
                </form>
            </div>
        )
    }
}

export default Home
