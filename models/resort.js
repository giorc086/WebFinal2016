const mongoose = require('mongoose');

const resortSchema = mongoose.Schema({
	id: Number,
	resortName: String,
	resortTemp: Number,
	updatedAt: Date,
	createdAt: Date
});

let Resort = mongoose.model('Resort',resortSchema);

module.exports = Resort;