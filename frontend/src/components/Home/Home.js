import React, { Component } from 'react'
import history from '../../history'
import axios from 'axios'
import './Home.css'


class Home extends Component {
    state = {
        username: '',
        password: '',
        error: false
    }
  
    handleInput = (e) => this.setState({[e.target.id]: e.target.value});

    handleSignUp = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/user/signup', {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            localStorage.token = response.data.token;
            this.setState({
                username: '',
                password: ''
            });
            history.push("/shopping-lists");
            this.props.resetApp();
        }).catch(err => {
            console.log(err);
            this.setState({error: true})
        })
    }

    render () {
        return (
            <div>
            <div className='banner' alt="banner"></div>

            <div>
                <img src='https://i.imgur.com/S1ZyhWs.jpg' />
            </div>

            <div>
                <div className='callToAction'>Grocerie Shopping Made Easy</div>
                <div className='paragraph'>
                    Forget about paper lists. Introducing Foodie an app that makes grocerie shopping convenient and easy.
                </div>
                <div className='paragraph'>
                    Foodie allows you to create, name, and share your shopping list with family and friends for any occasion.
                </div>
            </div>

            <div className= 'container'>
                <div>
                    <div alt="icon">
                        <img className='birthday' src='https://img.icons8.com/dotty/2x/birthday.png'></img>
                    </div>
                    <div className='info'>
                        Create shopping lists for any occasion. No matter what it is we've got you covered!
                    </div>
                </div>
                <div>
                    <div alt="icon">
                        <img className='apple' src='https://img.icons8.com/carbon-copy/2x/apple.png'></img>
                    </div>
                    <div className='info'>
                        Find food items that you’re looking for using Foodies intiuitive search engine.
                    </div>
                </div>
                <div>
                    <div alt="icon">
                        <img className='share' src='https://img.icons8.com/dotty/2x/left-and-right-arrows.png'></img>
                    </div>
                    <div className='info'>
                        Share your shopping list with your friends and family.
                    </div>
                </div>
            </div>
          
            {!this.props.isLoggedIn && <form onSubmit={this.handleSignUp} id="signup">
                <div className = 'registration'>Register Account For Free</div>
                <div className='form-group'>
                <input type="text" className='form-control' value={this.state.username} onChange={this.handleInput} placeholder="username" id="username"/>
                </div>
                <div className='form-group'>
                <input type="text" className='form-control'  value={this.state.password} onChange={this.handleInput} placeholder="password" id="password"/>
                </div>
                <button type="submit">Sign Up</button> 
                {this.state.error ? <div>Username already exists.</div> : <div></div>}
                <div className='ifMember'>
                    Already a member? <br/>
                    Click <a  className='click' href="/login">here</a> to log in.
                </div>            
            </form>}
        </div>
        )
    }
}

export default Home
