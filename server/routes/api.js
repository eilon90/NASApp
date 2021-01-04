const express = require('express');
const router = express.Router();
const axios = require('axios');

router.use(express.json());
router.use(express.urlencoded({extendsd: false}));

const Image = require('../models/Image');

router.get('/day-picture', async function(req, res) {
    const get = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`);
    const dataForSending = [];
    dataForSending.push({
        title: get.data.title,
        imgUrl : get.data.url,
        description: get.data.explanation,
        type: get.data.media_type
    })
    res.send(dataForSending);
})

router.get('/search/:word', async function(req, res) {
    const get = await axios.get(`https://images-api.nasa.gov/search?q=${req.params.word}`);
    const results = [];
    const dataForSending = get.data.collection.items.map(i => {
        if (i.links && i.links[0].render === 'image') {
            results.push({
                title: i.data[0].title, 
                imgUrl: i.links[0].href, 
                description: i.data[0].description
            });
        }});
    res.send(results);
})

router.get('/favorites', async function(req, res ) {
    let results;
    req.query.id ? results = await Image.findById(req.query.id) : results = await Image.find({});
    res.send(results);
})

router.post('/like', async function(req, res) {
    const i1 = await new Image ({...req.body});
    await i1.save();
    res.send(i1);
})

router.delete('/favorites/:id', async function(req, res) {
    const img = await Image.findByIdAndRemove(req.params.id);
    res.end();
})

module.exports = router;