var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "barry allen"
    }, {
        id: 2,
        username: "wally west"
    }, {
        id: 3,
        username: 'jay garrick'
    }]);
});

module.exports = router;