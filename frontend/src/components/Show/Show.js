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
        const target = this.findID();
        const baseURL = `http://localhost:3001/list/id/${target}`;
        const updatedState = {
          ...this.state
        }
        updatedState.items[index].crossed = !updatedState.items[index].crossed;
        this.setState({items: updatedState.items})//inside .then, send updatedState back
        axios.put(`${baseURL}`, this.state)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    deleteItem = (index) => {
        const target = this.findID();
        const baseURL = `http://localhost:3001/list/id/${target}`;        
        const updatedState = {
            items: [
                ...this.state.items.slice(0, index),
                ...this.state.items.slice(index + 1)
            ]
        }
        axios.put(`${baseURL}`, updatedState)
        .then(data => {
            window.location.reload(true)
        })
        // if(this.state.items === 0){
        //     axios.delete(`${baseURL}`)
        //     .then(()=>{
        //         window.location.assign('/shopping-lists')
        //     })
        // }
            //use the index to target the specific item in the model's item array
            // this.findID() will retrieve the model's id for you
            // make it so only the item is removed from the model's item array
            // on the backend you will be dealing with a lot of nesting so make sure to review mongoose notes
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
