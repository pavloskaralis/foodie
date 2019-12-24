import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
// index page will keep state and methods for all list items
// clicking a list item will pass up the id to app, and back down to show
import Index from '../Index/Index'
// show page will keep state and methods for selected list's items field 
// show page will use the id passed from app to find correct list
import Show from '../Show/Show'
import Form from '../Form/Form'
import './App.css'

//app will keep state and methods for login/signup/logout
class App extends Component {
  state = {
    form: '',
    isLoggedIn: false,
    username: '',
    password: '',
    list: ''
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

  //type must be "signup", "login", or ""  
  toggleForm = type => this.setState({form: type});

  toggleList = id => this.setState({id: id});

  render () {
    return (
      <React.Fragment>
        <Nav isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} toggleForm={this.toggleForm}/>
        {this.state.form && <Form type={this.state.form} username={this.state.username} password={this.state.password} handleInput={this.handleInput} handleSignUp={this.handleSignUp} handleLogIn={this.handleLogIn} toggleForm={this.toggleForm}/> }
        
        <Switch>
          <Route path={'/:title'} render={()=> <Show list={this.state.list}/>}/>
          <Route path={'/'} 
            render={this.state.isLoggedIn ?
              ()=> <Index username={this.state.username} toggleList={this.toggleList}/> : 
              ()=> <Home toggleForm={this.toggleForm}/> 
            }
          />
        </Switch>
       
      </React.Fragment>            
    )
  }
}

export default App

  