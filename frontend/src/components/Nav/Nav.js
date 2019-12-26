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
                    {this.props.isLoggedIn ? <a href="/shopping-lists">Shopping Lists</a> : <a href="/login">Log In</a>}
                    {this.props.isLoggedIn ? <a href="/" onClick={this.props.handleLogOut}>Log Out</a> : <a href="/#signup">Register</a> }
                </div>
            </nav>
        )
    }
}

export default Nav
