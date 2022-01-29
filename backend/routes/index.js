const express = require('express');
const axios   = require('../config/axios');
const router  = express.Router();

router.get('/latest-news', async (req, res, next) => {
    let response

    try {
        response = await axios.get('/top-headlines', {
            params: {
                country : 'gb',
                q       : req.query?.filter,
                pageSize: 30,
            }
        })
    } catch (error) {
        console.log('error', error.message)
    }

    res.json(response.data);
});

module.exports = router;
