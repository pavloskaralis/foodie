import React, { Component } from 'react'
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

                <div>
                    <a href="/new-list">Create New List</a>
                </div>

            </div>
        )
    }
}

export default Index
