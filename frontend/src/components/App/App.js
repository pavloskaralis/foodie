import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav.js'
import Login from '../Login/Login.js'
import Home from '../Home/Home.js'
// index page will keep state and methods for all list items
// clicking a list item will pass up the id to app, and back down to show
import Index from '../Index/Index.js'
// show page will keep state and methods for selected list's items field 
// show page will use the id passed from app to find correct list
import Show from '../Show/Show.js'
import './App.css'

//app will keep state and methods for login/signup/logout
class App extends Component {
  state = {
    isLoggedIn: false,
    username: '',
    listID: ''
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

  selectList = (listID, title) => {
    this.setState({listID: listID});
    window.location.href="/shopping-lists/" + title;     
  }

  handleLogIn = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/user/login', {
          username: this.state.username,
          password: this.state.password
      }).then(response => {
          localStorage.token = response.data.token;
          this.setState({isLoggedIn: true, formType:''});
      }).catch(err => console.log(err))
  }

  handleLogOut = () => {
      this.setState({
        isLoggedIn: false,
        username: '', 
      });
      localStorage.clear();
  }

  render () {
    return (
      <React.Fragment>
        <Nav isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut}/>        
        <Switch>
          {this.state.isLoggedIn && <Route path={'/shopping-lists/:listID'} render={()=> <Show listID={this.state.listID}/>}/>}
          {this.state.isLoggedIn && <Route path={'/shopping-lists'} render={()=> <Index username={this.state.username} selectList={this.selectList}/>}/>}
          <Route path={'/login'} render={()=> <Login/>}/>
          <Route path={'/'} render={()=> <Home handleSignUp={this.handleSignUp}/>}/>
        </Switch>
      </React.Fragment>            
    )
  }
}

export default App

  