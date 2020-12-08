const validateCar = (req, res, next) => {
	const { VIN, make, model, mileage } = req.body;
	if (!VIN || !make || !model || !mileage) {
		res
			.status(400)
			.json({ message: 'missing VIN, make, model, or mileage field' });
	} else {
		next();
	}
};

module.exports = validateCar;
