import React, {Component, useEffect, useState} from 'react';
import MediaCard from './MediaCard';
const axios = require ('axios');

export default function Search() {
    const [searchWord, setSearchWord] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const newSearchWord = e => setSearchWord(e.target.value);

    const searchNow = async() => {
        const results = await axios.get(`http://localhost:4000/search/${searchWord}`);
        setSearchResults(results.data);
        setSearchWord('');
    }

    const liKeImg = async img => {
        await axios.post('http://localhost:4000/like', img);
    }
    
    return(
            <div>
                <div id = "search-outer-div">
                    <div id = "search-inner-div">
                        <h2 id = "search-title">Search Pictures</h2>
                        <input id = "search-bar" type = "text" value = {searchWord} onChange = {newSearchWord}/>
                        <button id = "search-button" onClick = {searchNow}>Search</button>
                    </div>
                </div>
                <MediaCard data = {searchResults} func = {liKeImg}/>
            </div>
    ) 
}