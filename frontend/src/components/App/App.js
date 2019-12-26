import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js'
import Login from '../Login/Login.js'
import Home from '../Home/Home.js'
import Index from '../Index/Index.js'
import Show from '../Show/Show.js'
import Create from '../Create/Create.js'
import Update from '../Update/Update.js'
import './App.css'

//app will keep state and methods for login/signup/logout
class App extends Component {
  state = {
    isLoggedIn: false,
    username: ''
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

  handleLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.setState({
      isLoggedIn: false,
      username: '', 
    });
    window.location.href="/";
  }

  render () {
    return (
      <React.Fragment>
        <Nav isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut}/>        
        <Switch>
          {this.state.isLoggedIn && <Route path={'/shopping-lists/:id'} render={()=> <Show/>}/>}
          {this.state.isLoggedIn && <Route path={'/shopping-lists'} render={()=> <Index username={this.state.username}/>}/>}
          {this.state.isLoggedIn && <Route path={'/new-list'} render={()=> <Create username={this.state.username}/>}/>}
          {this.state.isLoggedIn && <Route path={'/update-list/:id'} render={()=> <Update/>}/>}
          <Route path={'/login'} render={()=> <Login/>}/>
          <Route path={'/'} render={()=> <Home handleSignUp={this.handleSignUp}/>}/>
        </Switch>
        <Footer isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut}/>        
      </React.Fragment>            
    )
  }
}

export default App

  