import React from 'react';
import {BrowserRouter as Router, Switch, useLocation} from "react-router-dom";
import {Link} from 'react-router-dom';
import Favorite from './Favorite';

export default function MediaCard(props) {
    const location = useLocation().pathname;

    const likeUnlike = () => {
        props.func(props.data)
    }

    return (
        <div id = {location === '/' || location === `/favorite/${props.data._id}` ? "media-one-div" : "media-collection-div"}>
            <h2 className = {location === '/' || location === `/favorite/${props.data._id}` ? "day-picture-title" : "picture-title"}>{props.data.title}</h2>
            {location !== '/favorites' && props.data.type !== 'video' && <img  src = {props.data.imgUrl} className = {location === '/' || location === `/favorite/${props.data._id}` ? "one-img" : "collection-img"}/>}
            {props.data.type === 'video' && <iframe src = {props.data.imgUrl}></iframe >}
            {location === '/favorites' && <Link to = {`/favorite/${props.data._id}`} className = "img-link"><img src = {props.data.imgUrl} className = "collection-img"/></Link>}
            {(location === '/' || location === `/favorite/${props.data._id}`) && <h5 id = "description">{props.data.description}</h5>}
            {location === '/search' && <button className = "like-unlike"><i className="far fa-thumbs-up" onClick = {likeUnlike}></i></button>}
            {location === '/favorites' && <button className = "like-unlike"><i className="far fa-thumbs-down" onClick = {likeUnlike}></i></button>}
            {location === `/favorite/${props.data._id}` && <Link to = '/favorites' id = "back-link"><div id = "back-link-div"><i className="fas fa-long-arrow-alt-left"></i><p id = "back">Back to Favorites Pictures</p></div></Link>}
            {(location === '/search' || location === '/favorites') && <hr></hr>}
        </div>
    )
} 