import React, { Component } from 'react'
import axios from 'axios'
import './Show.css'

// This component's structure is incomplete and not yet based off the wireframe

class Show extends Component {
    state = {
        list: ''
    } 
    componentDidMount = () => {
        axios.get('http://localhost:3001/list/id/' + this.props.listID)
        .then(response => this.setState({list: response.data.list}));
    }

    render () {
        return (
            <div>
                Show
            </div>
        )
    }
}

export default Show
