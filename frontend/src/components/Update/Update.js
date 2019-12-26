import React, { Component } from 'react'
import axios from 'axios'
import './Update.css'

// This component's structure is incomplete and not yet based off the wireframe

class Update extends Component {
    state = {
        list: ''
    } 
    componentDidMount = () => {
        const urlSplit = window.location.href.split('/');
        const listID = urlSplit[urlSplit.length - 1];
        axios.get('http://localhost:3001/list/id/' + listID)
        .then(response => this.setState({list: response.data.list}));
    }

    render () {
        return (
            <div>
                Update
            </div>
        )
    }
}

export default Update