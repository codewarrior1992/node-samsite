var admin = require('firebase-admin');

var serviceAccount = require('../vue-and-firease-firebase-adminsdk-rtw3i-4dcb9baa6d.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://vue-and-firease.firebaseio.com',
});

const db = admin.database();

module.exports = db;
