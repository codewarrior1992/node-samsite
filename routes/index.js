var express = require('express');
var router = express.Router();

const firebaseDB = require('../conections/firebase-main');
const productsRef = firebaseDB.ref('products');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/get-products', function (req, res, next) {
	productsRef.once('value', (snapshot) => {
		res.send({
			responseTxt: 'success',
			result: snapshot.val(),
		});
		res.end();
	});
});

module.exports = router;
