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

    }

    //put route 
    deleteItem = (index) => {
        
    }

    render () {
        return (
            <div>
                <div>
                    <div className='header1'>{this.state.title}</div>
                    <div className='description'>
                        You can manage your list here. <br/>
                        If you want to cross out an item use <span>✓</span> <br/>
                        If you need to delete an item use <span>x</span>
                    </div>
                </div>

                <div className='back'>
                    {this.state.items.map((item, index) => {
                        return (
                            <div className= 'container3' key={index}>
                                <div className={item.crossed ? "test" : ""}>{item.name} — {item.quantity}</div>
                                <div className='complete' onClick={()=> this.toggleCross(index)}>√</div>
                                <div className='delete' onClick={()=> this.deleteItem(index)}>X</div>
                                
                                
                            </div>
                        )
                    })}
                </div>

                <div className='header1'>
                    Return To ...
                </div>
                <div className='container4'>
                    <a className='return' href={"/share-list/" + this.findID()}>Share Shopping List</a>
                    <a className='return' href={"/update-list/" + this.findID()}>Update Shopping List</a>
                    <a className='return' href="/shopping-lists/">Back To Shopping Lists</a>
                </div>

            </div>
        )
    }
}

export default Show
