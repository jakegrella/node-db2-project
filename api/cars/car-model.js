const db = require('../../data/dbConfig');

module.exports = {
	getAll() {
		return db('cars');
	},
	getByVIN(VIN) {
		return db('cars').where('VIN', VIN).first();
	},
	add(car) {
		return db('cars')
			.insert(car)
			.then(([VIN]) => {
				return db('cars').where('VIN', VIN).first();
			});
	},
};
