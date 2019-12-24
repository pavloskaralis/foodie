import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Show from '../Show/Show'
import './Index.css'


class Index extends Component {
    render () {
        return (
            <div>
                Index
            <Switch>
             <Route path={'/:title'} render={()=> <Show/>}/>
             </Switch>
            </div>
        )
    }
}

export default Index
