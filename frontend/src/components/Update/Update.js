import React, { Component } from 'react'
import history from '../../history.js'
import axios from 'axios'
import './Update.css'

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
    handleUpdate = (e) => {
    }

    //put route
    deleteList = () => {
    }

    render () {
        const rows = [];
        for(let i = 1; i <= this.state.rows; i ++){
            rows.push(
                <div key={i}>
                    <input type="text" onChange={this.handleInput} value={this.state["name" + i]} placeholder="item name" id={"item" + i} />
                    <input type="text" onChange={this.handleInput} value={this.state["quantity" + i]} placeholder="quantity" id={"quantity" + i} />
                </div>
            )
        }

        return (
            <div>
                <div>
                    <div className='header1'>Update List</div>
                    <div className='description'>
                        Update your list here. <br/>
                        Change the title, items, or quantity that needs to be bought. <br/>
                        You can also add new items to your list. 
                    </div>
                </div>

                <form  onSubmit={this.handleUpdate}>
                    <input type="text" onChange={this.handleInput} value={this.state.title} placeholder="shopping list title" id="title"/>
                    {rows}
                    <div className='form2' onClick={this.addInput}>+</div>
                    <div>
                        <button className='button1' type="submit">Submit Changes</button>
                        <button className='button2' onClick={this.deleteList}>Delete List</button>
                    </div>     
                </form>

                <div className='container4'>
                    <a className='return' href={"/shopping-lists/" + this.findID()}>Return To My List</a>
                    <a className='return' href="/shopping-lists/">Back To Shopping Lists</a>
                </div>
            </div>
        )
    }
}

export default Update
