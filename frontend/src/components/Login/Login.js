import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'


class Login extends Component {
    state = {
        isLoggedIn: false,
        username: '',
        password: '',
        error: false
    }

    handleInput = (e) => this.setState({[e.target.id]: e.target.value});
    
    handleLogIn = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/user/login', {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            localStorage.token = response.data.token;
            this.setState({isLoggedIn: true, formType:''});
            window.location.href = "/shopping-lists";
        }).catch(err => {
            console.log(err);
            this.setState({error: true})
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleLogIn}>
                    <div>Member Log In</div>
                    <input type="text" value={this.state.username} onChange={this.handleInput} placeholder="username" id="username"/>
                    <input type="text" value={this.state.password} onChange={this.handleInput} placeholder="password" id="password"/>
                    <button type="submit">Log In</button> 
                    {this.state.error ? <div>Invalid username or password.</div> : <div></div>}
                    <div>
                        Not a member yet? Not a problem. <br/>
                        Click <a href="/#signup">here</a> to create your free account.
                    </div>            
                </form>
            </div>
        )
    }
}

export default Login
