import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, useLocation} from "react-router-dom";
import Media from './Media';

export default function MediaCard(props) {
    const location = useLocation().pathname;

    return(
        <div id = {location === '/' || location === `/favorite/${props.data._id}` ? "media-container" : "media-collection"}>
            {props.data.map(d => <Media data = {d} func = {props.func} key = {props.data.indexOf(d)}/>)}
        </div>
    )
}