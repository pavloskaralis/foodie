import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render () {
        return (
            <nav>
                <NavLink to="/">App Name </NavLink>
                {this.props.isLoggedIn && <NavLink to="/" onClick={this.props.handleLogOut}>Log Out</NavLink>}
                {!this.props.isLoggedIn && <NavLink to="" onClick={()=>this.props.toggleForm("signup")}>Sign Up</NavLink>}
                {!this.props.isLoggedIn && <NavLink to="" onClick={()=>this.props.toggleForm("login")}>Log In</NavLink>}
            </nav>
        )
    }
}

export default Nav
