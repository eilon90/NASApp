import React, {Component, useEffect, useState} from 'react';
import MediaCard from './MediaCard';
const axios = require ('axios');

export default function Home() {
    const [dayPIcture, setDayPicture] = useState([]);

    useEffect(async() => {
        const picture = await axios.get('http://localhost:4000/day-picture');
        setDayPicture(picture.data);
    }, [])
    
    return (
        <div id = "home-div">
            <h2 id = "home-title">Astronomy Picture of the Day</h2>
            <MediaCard data = {dayPIcture}/>
        </div>
    )
}