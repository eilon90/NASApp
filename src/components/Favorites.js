import React, {Component, useState, useEffect} from 'react';
import MediaCard from './MediaCard';
const axios = require ('axios');

export default function Favorites() {
    const [favorImgs, setFavorImgs] = useState([]);

    useEffect(async() => {
        const imgs = await axios.get('http://localhost:4000/favorites');
        // axios.get('http://localhost:4000/favorites').then(imgs => setFavorImgs(imgs.data))
        setFavorImgs(imgs.data);
    }, [])

    const unliKeImg = async img => {
        await axios.delete(`http://localhost:4000/favorites/${img._id}`);
    }

    return (
        <div id = "favorites-div">
            <h2 id = "home-title">Your Favorites Pictures</h2>
            <MediaCard data = {favorImgs} func = {unliKeImg}/>
        </div>
    )
}