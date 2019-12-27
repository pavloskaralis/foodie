import React, { Component } from 'react'
import history from '../../history.js'
import axios from 'axios'
import './Create.css'

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
        // the data is dependant on how many input rows there are;
        // therefor, you will need to define a variable to pass via axios;
        // use a for loop to add properties to this data based on the amount of input rows;
        // look at componentDidMount within the Update.js component on how this would look;
        // there also needs to be a conditional that filters out blank input pairs
        // on the backend you will be dealing with a lot of nesting so make sure to review mongoose notes
        // route to /shoping-lists/:id via history.push('url')
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

    render () {
        const rows = [];
        for(let i = 1; i <= this.state.rows; i ++){
            rows.push(
                <div key={i}>
                    <input type="text" onChange={this.handleInput} value={this.state.item} placeholder="item name" id={"item" + i}/>
                    <input type="text" onChange={this.handleInput} value={this.state.item} placeholder="quantity" id={"quanity" + i}/>
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
                    <input type="text" onChange={this.handleInput} value={this.state.title} placeholder="shopping list title" id="title"/>
                    {rows}
                    <div onClick={this.addInput}>+</div>
                    <button type="submit">Create List</button>
                </form>

            </div>
        )
    }
}

export default Show
