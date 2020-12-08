const express = require('express');
const router = express.Router();
const Car = require('./car-model');

// middlewares
const validateVIN = require('../middlewares/validateVIN');
const validateCar = require('../middlewares/validateCar');

// 🌕   [GET] /api/cars/    (res = all cars)
router.get('/', async (_, res) => {
	try {
		const cars = await Car.getAll();
		res.status(200).json(cars);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: '500 error' });
	}
});

// 🌕   [GET] /api/cars/:VIN    (res = car w/ specific VIN)
router.get('/:VIN', validateVIN, async (req, res) => {
	res.status(200).json(req.car);
});

// 🌕   [POST] /api/cars/    (res = newly created car)
router.post('/', validateCar, async (req, res) => {
	try {
		const newCar = await Car.add(req.body);
		res.status(201).json(newCar);
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errMessage: '500 error' });
	}
});

module.exports = router;
