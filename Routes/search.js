const router = require('express').Router();

router.get('/getbyaddress',  require('../getByAddress'));
module.exports = router;