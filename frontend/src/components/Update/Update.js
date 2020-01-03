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
    handleUpdate = (index) => {
        // index.preventDefault();
        const target = this.findID();
        const list = {
            title: this.state.title,
            users: [this.props.username],
            items: []
        };
    }
    //     // for(let i = 1; i <= this.state.rows; i++){
    //     //     if((this.state['item' + i]) || (this.state['quantity' + i])){
    //     //         const updatedItem = {
    //     //             name: this.state['name' + i],
    //     //             quantity: this.state['quantity' + i],
    //     //             crossed: false
    //     //         }
    //     //     return updatedItem;
    //     //     }
    //     //     list.items.push(updatedItem)
    //     // }
    //     // const updatedState = {
    //     //   ...this.state
    //     // }
    //     const baseURL = `http://localhost:3001/list/id/${target}`
    //     axios.put(`${baseURL}`, updatedState)
    //     .then((res)=> {
    //         window.location.reload(true)
    //     })
    // }

    deleteList = (e) => {
      e.preventDefault();
      const target = this.findID();
      const baseURL = `http://localhost:3001/list/id/${target}`
      axios.delete(`${baseURL}`)
      .then(()=>{
          window.location.assign('/shopping-lists')
      })
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

                <form onSubmit={this.handleUpdate}>
                    <input type="text" onChange={this.handleInput} value={this.state.title} placeholder="shopping list title" id="title"/>
                    {rows}
                    <div onClick={this.addInput}>+</div>
                    <div>
                        <button className='button1' type="submit">Submit Changes</button>
                        <button className='button2' onClick={this.deleteList}>Delete List!!!</button>
                    </div>     
                </form>

                <div>
                    <a href={"/shopping-lists/" + this.findID()}>Return To My List</a>
                    <a href="/shopping-lists/">Back To Shopping Lists</a>
                </div>
            </div>
        )
    }
}


export default Update
