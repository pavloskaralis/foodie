import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import axios from 'axios'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Index from '../Index/Index'
import Show from '../Show/Show'
import './App.css'

class App extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false
  }

  componentDidMount = () => {
    //retrieves payload id from token to find user by id; 
    //then sets username prop and forces url change
    if(localStorage.token) {
      const ca = localStorage.token;
      const base64Url = ca.split('.')[1];
      const decodedValue = JSON.parse(window.atob(base64Url)).id;
      console.log(decodedValue)
      axios.get('http://localhost:3001/user/' + decodedValue)
      .then(response => {
        this.setState({username: response.data.username, isLoggedIn: true});
      }).then(console.log(this.state.username));
    } else {
      this.setState({isLoggedIn: false})
    }
  }

  handleInput = (e) => this.setState({[e.target.id]: e.target.value});

  handleSignUp = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/user/signup', {
          username: this.state.username,
          password: this.state.password
      }).then(response => {
          localStorage.token = response.data.token;
          this.setState({isLoggedIn: true});
      }).catch(err => console.log(err))
  }

  handleLogIn = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/user/login', {
          username: this.state.username,
          password: this.state.password
      }).then(response => {
          localStorage.token = response.data.token;
          this.setState({isLoggedIn: true});
      }).catch(err => console.log(err))
  }

  handleLogOut = () => {
      this.setState({
          username: '',
          password: '',
          title: '',
          isLoggedIn: false
      });
      localStorage.clear();
  }

  render () {
    return (
        <div id="full-page-container">
            <NavBar isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn} handleLogOut={this.handleLogOut}/>
            
            {/* test form; to be deleted */}
            <form onSubmit={this.handleSignUp}>
                <input type="text" value={this.state.username} onChange={this.handleInput} id="username"/>
                <input type="text" value={this.state.password} onChange={this.handleInput} id="password"/>
                <input type="submit" value="test"/>
            </form>

            <div id="switch-page-container">
            <Switch>
                <Route path={'/:title'}
                  render={() =><Show handleInput={this.handleInput} />}
                />
                <Route path={'/'} 
                  render={this.state.isLoggedIn ?
                    () =><Index username={this.state.username} handleInput={this.handleInput}/> : 
                    () => <Home handleInput={this.handleInput} handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn}/> 
                  }
                />
            </Switch>
            </div>
        </div>
    )
  }
}

export default App

  