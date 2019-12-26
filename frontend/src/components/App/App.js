import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav.js'
import Footer from '../Footer/Footer.js'
import Login from '../Login/Login.js'
import Home from '../Home/Home.js'
import Index from '../Index/Index.js'
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
          {this.state.isLoggedIn && <Route path={'/shopping-lists/:listID'} render={()=> <Show listID={this.state.listID}/>}/>}
          {this.state.isLoggedIn && <Route path={'/shopping-lists'} render={()=> <Index username={this.state.username} selectList={this.selectList}/>}/>}
          <Route path={'/login'} render={()=> <Login/>}/>
          <Route path={'/'} render={()=> <Home handleSignUp={this.handleSignUp}/>}/>
        </Switch>
        <Footer isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut}/>        
      </React.Fragment>            
    )
  }
}

export default App

  