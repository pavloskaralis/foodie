import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    render () {
        return (
            <nav>
                <div>
                    <div><img  class='avocado' src='https://img.icons8.com/color/2x/avocado.png'></img></div>
                    <div>Foodie</div>
                </div>
                <div>
                    {<a href="/">Home</a>}
                    {this.props.isLoggedIn ? <a href="/shopping-lists">Shopping Lists</a> : <a href="/login">Log In</a>}
                    {this.props.isLoggedIn && <a href="/new-list">New List</a>}
                    {this.props.isLoggedIn ? <a href="/" onClick={this.props.handleLogOut}>Log Out</a> : <a href="/#signup">Register</a> }
                </div>
            </nav>
        )
    }
}

export default Nav
