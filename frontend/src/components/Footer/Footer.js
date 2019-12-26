import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render () {
        return (
            <footer>
                <div>
                    {<a href="/">Home</a>}
                    {this.props.isLoggedIn ? <a href="/shopping-lists">Shopping Lists</a> : <a href="/login">Log In</a>}
                    {this.props.isLoggedIn && <a href="/new-list">New List</a>}
                    {this.props.isLoggedIn ? <a href="/" onClick={this.props.handleLogOut}>Log Out</a> : <a href="/#signup">Register</a> }
                </div>
            </footer>
        )
    }
}

export default Footer
