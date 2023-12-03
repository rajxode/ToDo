
// express
import express from 'express';

// router
const router = express.Router();

// home route
router.get('/',(req,res) => {
    return res.send('<h1>Please, Visit /api-docs to see the api documentations</h1>');
})

// for api related routes
router.use('/api/v1',require('./api-route'));

// export route
module.exports = router;