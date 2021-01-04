import React, {component, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Media from './Media';
const axios = require ('axios');



export default function Favorite(props) {
    const [favorite, setFavorite] = useState([]);

    useEffect(async() => {
        const picture = await axios.get(`http://localhost:4000/favorites/?id=${props.match.params.id}`);
        setFavorite(picture.data);
    }, [])

    return (
        <div>
            <Media data = {favorite}/>
        </div>
    )
}