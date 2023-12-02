
import express from 'express';

const router = express.Router();

router.get('/',(req,res) => {
    return res.send('<h1>Please, Visit /api-docs to see the api documentations</h1>');
})

router.use('/api/v1',require('./api-route'));

module.exports = router;