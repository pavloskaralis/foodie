import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './Index.css'


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

    handleInput = (e) => this.setState({[e.target.id]: e.target.value});

    //create route
    handleSubmit = (e) => {
        e.preventDefault();
    }

    //put route
    renameList = (e) => {
        e.preventDefault();
    }

    //delete route
    deleteList = (e) => {
        e.preventDefault();
    }

    //type must be create or update
    toggleForm = (e) =>  {
        e.preventDefault();
        this.state.formType === "create" ? this.setState({formType: "update"}) : this.setState({formType: "create"});
    }

    toggleShare = (e) =>  {
        e.preventDefault();
        this.setState({share: !this.state.share});
    }

    //put route
    shareList = (e) => {

    }
        

    render () {
        return (
            <div> 
                {this.state.share && 
                    // render as popup with position: absolute
                    <form onSubmit={this.shareList}>
                        <div>
                            <label>Username</label>
                            <input type="text" value={this.state.shareWith} onChange={this.handleInput} id="shareWith"/>
                        </div>
                        <div>
                            <button onClick={this.toggleShare}>Cancel</button>
                            <button type="submit">Share</button>
                        </div>
                    </form>
                }
                
                <form onSubmit={this.state.formType === "create" ? this.handleSubmit : this.renameList}>
                    <div>
                        <label>Title</label>
                        <input type="text" value={this.state.title} onChange={this.handleInput} id="title"/>
                    </div>
                    <button type="submit">{this.state.formType === "create" ? "Create" : "Update" }</button>
                </form>
                
                <div>
                    {this.state.lists.map(list => {
                        return(
                            <a href={"/" + list._id} key={list._id}>
                                <div>{list.title}</div>
                                <div>
                                    <button onClick={this.toggleShare}>Share</button>
                                    {this.state.formType === "create" ? 
                                            <button onClick={this.toggleForm}>Rename</button> : 
                                            <button onClick={this.toggleForm}>Cancel</button>}
                                    <button onClick={this.deleteList}>Delete</button>
                                </div>
                            </a>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Index
