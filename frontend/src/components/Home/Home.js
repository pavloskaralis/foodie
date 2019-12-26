import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'


class Home extends Component {
    render () {
        return (
            <div>
                <h1>App Name</h1>
                <h3>App description</h3>
                <div>
                    <button onClick={()=> this.props.toggleHomeForm("signup")}>Sign Up</button>
                    <button onClick={()=> this.props.toggleHomeForm("login")}>Log In</button>
                </div>
            </div>
        )
    }
}

export default Home
