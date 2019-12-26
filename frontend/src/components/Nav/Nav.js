import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    render () {
        return (
            <nav>
                <div>
                    <div></div>
                    <div>Foodie</div>
                </div>
                <div>
                    {<a href="/">Home</a>}
                    {this.props.isLoggedIn ? <a to="/shopping-lists">Shopping Lists</a> : <a to="/login">Log In</a>}
                    {this.props.isLoggedIn ? <a to="/" onClick={this.props.handleLogOut}>Log Out</a> : <a to="#signup">Register</a> }
                </div>
            </nav>
        )
    }
}

export default Nav
