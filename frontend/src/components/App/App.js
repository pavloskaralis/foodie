import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav.js'
import Home from '../Home/Home.js'
// index page will keep state and methods for all list items
// clicking a list item will pass up the id to app, and back down to show
import Index from '../Index/Index.js'
// show page will keep state and methods for selected list's items field 
// show page will use the id passed from app to find correct list
import Show from '../Show/Show.js'
import HomeForm from '../HomeForm/HomeForm.js'
import './App.css'

//app will keep state and methods for login/signup/logout
class App extends Component {
  state = {
    homeForm: '',
    isLoggedIn: false,
    username: '',
    password: '',
  }

  componentDidMount = () => {
    if(localStorage.token) {
      axios.get('http://localhost:3001/user/verify/' + localStorage.token)
      .then(response => this.setState({
        isLoggedIn: true, 
        username: response.data.username, 
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
          this.setState({isLoggedIn: true, homeForm:''});
      }).catch(err => console.log(err))
  }

  handleLogIn = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/user/login', {
          username: this.state.username,
          password: this.state.password
      }).then(response => {
          localStorage.token = response.data.token;
          this.setState({isLoggedIn: true, homeForm:''});
      }).catch(err => console.log(err))
  }

  handleLogOut = () => {
      this.setState({
        homeForm: '',
        isLoggedIn: false,
        username: '',
        password: '',
        listID: ''
      });
      localStorage.clear();
  }

  //type must be "signup", "login", or ""  
  toggleHomeForm = type => this.setState({homeForm: type});

  render () {
    return (
      <React.Fragment>
        <Nav isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} toggleHomeForm={this.toggleHomeForm}/>
        {this.state.homeForm && <HomeForm type={this.state.homeForm} username={this.state.username} password={this.state.password} handleInput={this.handleInput} handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn} toggleHomeForm={this.toggleHomeForm}/> }
        
        <Switch>
          <Route path={'/:listID'} render={()=> <Show listID={this.state.listID}/>}/>
          <Route path={'/'} 
            render={this.state.isLoggedIn ?
              ()=> <Index username={this.state.username}/> : 
              ()=> <Home toggleHomeForm={this.toggleHomeForm}/> 
            }
          />
        </Switch>
       
      </React.Fragment>            
    )
  }
}

export default App

  