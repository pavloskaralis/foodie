import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './Index.css'


class Index extends Component {
    state = {
        username: this.props.username,
        lists: [],
    }
    
    componentDidMount = () => {
        axios.get('http://localhost:3001/list/' + this.state.username)
        .then(response => this.setState({lists: response.data.lists}));
    }

    render () {
        return (
            <div>
                Index
            </div>
        )
    }
}

export default Index
