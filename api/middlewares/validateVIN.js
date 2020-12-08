const Car = require('../cars/car-model');

const validateVIN = async (req, res, next) => {
	const { VIN } = req.params;
	try {
		const car = await Car.getByVIN(VIN);
		if (!car) {
			res.status(404).json({ messsage: `account with VIN ${VIN} not found` });
		} else {
			req.car = car;
			next();
		}
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: '500 error' });
	}
};

module.exports = validateVIN;
