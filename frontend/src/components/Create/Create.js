import React, { Component } from 'react'
import axios from 'axios'
import './Create.css'

// This component's structure is incomplete and not yet based off the wireframe

class Show extends Component {
    state = {
        title: "",
        rows: 5, 
        item1: "",
        quantity1: "",
        item2: "",
        quantity2: "",
        item3: "",
        quantity3: "",
        item4: "",
        quantity4: "",
        item5: "",
        quantity5: ""
    } 

    //create route
    handleSubmit = (e) => {
        e.preventDefault();
    }
    
    handleInput = (e) => this.setState({[e.target.id]: e.target.value});

    addInput = () => {
        const num = this.state.rows + 1;
        this.setState({
            [`input`+ num]:"",
            [`quantity`+ num]:"",
            rows: num
        })
    }

    render () {
        const rows = [];
        for(let i = 1; i <= this.state.rows; i ++){
            rows.push(
                <div>
                    <input type="text" value={this.state.item} placeholder="item name" id={"item" + i}/>
                    <input type="text" value={this.state.item} placeholder="quantity" id={"quanity" + i}/>
                </div>
            )
        }

        return (
            <div>
                <div>
                    <div>Create New List</div>
                    <div>
                        Give your list a name and add items below. <br/>
                        If you run out of room just use <span>+</span> to add more lines.
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.title} placeholder="shopping list title" id="title"/>
                    {rows}
                    <div onClick={this.addInput}>+</div>
                    <button type="submit">Create List</button>
                </form>

            </div>
        )
    }
}

export default Show
