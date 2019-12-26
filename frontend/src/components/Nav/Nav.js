import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    render () {
        return (
            <nav>
                <a to="/">App Name </a>
                <div>
                    {this.props.isLoggedIn && <a to="/" onClick={this.props.handleLogOut}>Log Out</a>}
                    {!this.props.isLoggedIn && <a to="" onClick={()=>this.props.toggleHomeForm("signup")}>Sign Up</a>}
                    {!this.props.isLoggedIn && <a to="" onClick={()=>this.props.toggleHomeForm("login")}>Log In</a>}
                </div>
            </nav>
        )
    }
}

export default Nav
