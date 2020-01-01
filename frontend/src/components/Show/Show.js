import React, { Component } from 'react'
import axios from 'axios'
import './Show.css'

class Show extends Component {
    state = {
        title: '',
        users: [],
        items: []
    } 

    componentDidMount = () => {
        axios.get('http://localhost:3001/list/id/' + this.findID())
        .then(response => this.setState({
            title: response.data.title,
            users: response.data.users,
            items: response.data.items
        }));
    }

    findID = () => {
        const url = window.location.href
        const splitUrl = url.split('/');
        const listID = splitUrl[splitUrl.length - 1];
        return listID
    }

    //put route
    toggleCross = (index) => {
        const list = this.state;
        list.items[index].crossed = !list.items[index].crossed;
        axios.put('http://localhost:3001/list/id/' + this.findID(), list)
        .then(response => this.setState({items:response.data.items}));
    }

    //put route 
    deleteItem = (index) => {
        const list = this.state;
        list.items = [...list.items.slice(0,index), ...list.items.slice(index + 1)];
        axios.put('http://localhost:3001/list/id/' + this.findID(), list)
        .then(response => this.setState({items:response.data.items}));
    }

    render () {
        return (
            <div>
                <div>
                    <div>{this.state.title}</div>
                    <div>
                        You can manage your list here. <br/>
                        If you want to cross out an item use <span>X</span> <br/>
                        If you need to delete an item use <span>✓</span>
                    </div>
                </div>

                <div>
                    {this.state.items.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={item.crossed ? "test" : ""}>{item.name} — {item.quantity}</div>
                                <div onClick={()=> this.toggleCross(index)}>X</div>
                                <div onClick={()=> this.deleteItem(index)}>✓</div>
                            </div>
                        )
                    })}
                </div>

                <div>
                    <a href={"/share-list/" + this.findID()}>Share Shopping List</a>
                    <a href={"/update-list/" + this.findID()}>Update Shopping List</a>
                    <a href="/shopping-lists/">Back To Shopping Lists</a>
                </div>

            </div>
        )
    }
}

export default Show
