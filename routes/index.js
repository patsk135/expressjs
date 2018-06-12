var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('Hello World')
})

router.get('/:i', (req, res) => {
	res.send(req.params.i)
})

module.exports = router
