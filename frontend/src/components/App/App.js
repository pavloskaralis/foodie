import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Index from '../Index/Index'
import Show from '../Show/Show'
import Form from '../Form/Form'
import './App.css'

class App extends Component {
  state = {
    username: '',
    password: '',
    isLoggedIn: false,
    form: ''
  }

  componentDidMount = () => {
    if(localStorage.token) {
      axios.get('http://localhost:3001/user/verify/' + localStorage.token)
      .then(response => this.setState({username: response.data.username, isLoggedIn: true}))
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
          form: '',
          isLoggedIn: false
      });
      localStorage.clear();
  }

  toggleForm = (value) => {
    //value must be "signup", "login", or ""
    this.setState({form: value});
  }

  render () {
    return (
      <React.Fragment>
        <Nav isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} toggleForm={this.toggleForm}/>
        
        {this.state.form && <Form type={this.state.form} username={this.state.username} password={this.state.password} handleInput={this.handleInput} handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn} toggleForm={this.toggleForm}/> }

        <Switch>
            <Route path={'/:title'}
              render={() =><Show handleInput={this.handleInput} />}
            />
            <Route path={'/'} 
              render={this.state.isLoggedIn ?
                () =><Index username={this.state.username} handleInput={this.handleInput}/> : 
                () => <Home toggleForm={this.toggleForm}/> 
              }
            />
        </Switch>
  
      </React.Fragment>            
    )
  }
}

export default App

  