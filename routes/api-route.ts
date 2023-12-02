
import express from 'express';

const router = express.Router();

router.get('/',(req,res) => {
    return res.send('Visit api-v1');
})

module.exports = router;