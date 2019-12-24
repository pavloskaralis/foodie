import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Index from '../Index/Index'
import Show from '../Show/Show'
import Form from '../Form/Form'
import './App.css'

class App extends Component {
  state = {
    form: '',
    isLoggedIn: false,
    username: '',
    password: '',
    lists: [],
    list: ''
  }

  componentDidMount = () => {
    if(localStorage.token) {
      axios.get('http://localhost:3001/user/verify/' + localStorage.token)
      .then(response => axios.get('http://localhost:3001/list/' + response.data.username))
      .then(response => this.setState({
        isLoggedIn: true, 
        username: response.data.username, 
        lists: response.data.lists
      }));
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
          this.setState({isLoggedIn: true, form:''});
      }).catch(err => console.log(err))
  }

  handleLogIn = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/user/login', {
          username: this.state.username,
          password: this.state.password
      }).then(response => {
          localStorage.token = response.data.token;
          this.setState({isLoggedIn: true, form:''});
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
          <Route path={'/:title'} render={()=> <Show/>}/>
          <Route path={'/'} 
            render={this.state.isLoggedIn ?
              ()=> <Index username={this.state.username} /> : 
              ()=> <Home toggleForm={this.toggleForm}/> 
            }
          />
        </Switch>
       
      </React.Fragment>            
    )
  }
}

export default App

  