import React, { Component } from 'react'
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
            window.location.href = "/shopping-lists";
        }).catch(err => {
            console.log(err);
            this.setState({error: true})
        })
    }

    render () {
        return (
            <div>
                <div alt="banner"></div>

                <div>
                    <div>Grocerie Shopping Made Easy</div>
                    <div>
                        Forget about paper lists. Introducing Foodie an app that makes grocerie shopping convenient and easy.
                    </div>
                    <div>
                        Foodie allows you to create, name, and share your shopping list with familly and friends for any occasion.
                    </div>
                </div>

                <div>
                    <div>
                        <div alt="icon"></div>
                        <div>
                            Create shopping lists for any occasion. No matter what it is we've got you covered!
                        </div>
                    </div>
                    <div>
                        <div alt="icon"></div>
                        <div>
                            Find food items that you’re looking for using Foodies intiuitive search engine.
                        </div>
                    </div>
                    <div>
                        <div alt="icon"></div>
                        <div>
                            Share your shopping list with your friends and family.
                        </div>
                    </div>
                </div>
              
                <form onSubmit={this.handleSignUp} id="signup">
                    <div>Register Account For Free</div>
                    <input type="text" value={this.state.username} onChange={this.handleInput} placeholder="username" id="username"/>
                    <input type="text" value={this.state.password} onChange={this.handleInput} placeholder="password" id="password"/>
                    <button type="submit">Sign Up</button> 
                    {this.state.error ? <div>Username already exists.</div> : <div></div>}
                    <div>
                        Already a member? <br/>
                        Click <a href="/login">here</a> to log in.
                    </div>            
                </form>
            </div>
        )
    }
}

export default Home
