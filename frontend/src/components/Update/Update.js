import React, { Component } from 'react'
import history from '../../history.js'
import axios from 'axios'
import './Update.css'
import { number } from 'prop-types';

class Update extends Component {
    state = {
        title: '',
        users: [],
        items: [],
        rows: ''
    } 

    componentDidMount = () => {
        axios.get('http://localhost:3001/list/id/' + this.findID())
        .then(response => this.setState({
            title: response.data.title,
            users: response.data.users,
            items: response.data.items,
        })).then(() => {
            const rows = this.state.items.length;
            const state = {
                rows: rows
            }
            for(let i = 1; i <= rows; i ++){
                state['name' + i] = this.state.items[i - 1].name;
                state['quantity' + i] = this.state.items[i - 1].quantity;
            }
            this.setState(state)
        })
    }


    findID = () => {
        const url = window.location.href
        const splitUrl = url.split('/');
        const listID = splitUrl[splitUrl.length - 1];
        return listID
    }

    handleInput = (e) => this.setState({[e.target.id]: e.target.value});

    addInput = () => {
        const num = this.state.rows + 1;
        this.setState({
            ['input'+ num]:"",
            ['quantity' + num]:"",
            rows: num
        })
    }

    //put route
    handleSubmit = (index) => {
        const target = this.findID();
        const product = this.state.items[index].name;
        const baseURL = `http://localhost:3001/list/id/${target}`
        axios.put(`${baseURL}`, this.state)
        .then((res)=> {
            this.setState({
                

            })
        })
    }

    //put route
    deleteList = (index) => {
        //use the index to target the specific item in the model's item array
        // this.findID() will retrieve the model's id for you
        // make it so the route removes the user from the model's user array
        // on the back end add a conditional that deletes the model from the data base if the model's user array is empty 
        // on the backend you will be dealing with a lot of nesting so make sure to review mongoose notes
        // route to /shoping-lists via history.push('url')
    }

    render () {
        const rows = [];
        for(let i = 1; i <= this.state.rows; i ++){
            rows.push(
                <div key={i}>
                    <input type="text" onChange={this.handleInput} value={this.state["name" + i]} placeholder="item name" id={"item" + i} />
                    <input type="text" onChange={this.handleInput} value={this.state["quantity" + i]} placeholder="quantity" id={"quanity" + i} />
                </div>
            )
        }

        return (
            <div>
                <div>
                    <div>Update List</div>
                    <div>
                        Update your list here. <br/>
                        Change the title, items, or quantity that needs to be bought. <br/>
                        You can also add new items to your list. 
                    </div>
                </div>

                <form handleSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInput} value={this.state.title} placeholder="shopping list title" id="title"/>
                    {rows}
                    <div onClick={this.addInput}>+</div>
                    <div>
                        <button type="submit">Submit Changes</button>
                        <button onClick={this.deleteList}>Delete List!!!</button>
                    </div>     
                </form>

            </div>
        )
    }
}

export default Update
