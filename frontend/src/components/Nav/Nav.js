import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    render () {
        return (
            <nav>
                <div className='containerNav'>
                
                    <div alt="avocado" ><img className='avocado' src='https://i.imgur.com/q9q2ROr.png' alt="avocado" /></div>
                    <div></div>
                    
                
                    {<a  className='links' href="/">Home</a>}
                    {this.props.isLoggedIn ? <a className='links' href="/shopping-lists">Shopping Lists</a> : <a className='links' href="/login">Log In</a>}
                    {this.props.isLoggedIn && <a className='links' href="/new-list">New List</a>}
                    {this.props.isLoggedIn ? <a className='links' href="/" onClick={this.props.handleLogOut}>Log Out</a> : <a className='links' href="/#signup">Register</a> }
                
                </div>
            </nav>
        )
    }
}

export default Nav
