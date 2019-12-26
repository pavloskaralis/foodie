import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './Index.css'

// This component's structure is incomplete and not yet based off the wireframe

class Index extends Component {
    state = {
        username: this.props.username,
        lists: [],
        formType: "create",
        title: '',
        share: false,
        shareWith: ''
    }
    
    componentDidMount = () => {
        axios.get('http://localhost:3001/list/user/' + this.state.username)
        .then(response => this.setState({lists: response.data.lists}));
    }
    
    render () {
        return (
            <div> 
                
                <div>
                    <div>My Shopping Lists</div>
                    <div>
                        Here are all of your shopping lists. <br/>
                        Click on the individual list to view, update, or share.
                    </div>
                </div>

                <div>
                    {this.state.lists.map(list => {
                        return(
                            <a href={"/shopping-lists/" + list._id} key={list._id}>{list.title}</a>
                        )
                    })}
                </div>

                <a href="/new-list">
                    <div>Create New List</div>
                </a>

            </div>
        )
    }
}

export default Index
