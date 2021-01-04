import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home'
import Search from './Search'
import Favorites from './Favorites'
import Favorite from './Favorite'


export default function Container() {

    return (
        <div id = "container">
                <Route path = "/" exact render = { () => <Home/>}/>
                <Route path = "/search" exact render = { () => <Search/>}/>
                <Route path = "/favorites" exact render = { () => <Favorites/>}/>
                <Route path = "/favorite/:id" exact render = { ({match}) => <Favorite  match = {match}/>}/>
        </div>
    )
}