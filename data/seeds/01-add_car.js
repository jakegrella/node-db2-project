exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('cars')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('cars').insert([
				// vin, make, model, mileage, transmissionType, titleStatus
				// 1
				{
					VIN: '5NPDH4AE2EH443241',
					make: 'Audi',
					model: 'RS3',
					mileage: 34958,
					transmissionType: 'manual',
					titleStatus: 'clean',
				},
				// 2
				{
					VIN: '1HGCR3F80EA085233',
					make: 'BMW',
					model: '7 Series',
					mileage: 83927,
					transmissionType: 'automatic',
					titleStatus: 'salvage',
				},
				// 3
				{
					VIN: '1FMCU0EG5BKB69733',
					make: 'Ford',
					model: 'F-150',
					mileage: 92617,
					transmissionType: 'automatic',
				},
				// 4
				{
					VIN: '1N4AL11D85C269815',
					make: 'Kia',
					model: 'Optima',
					mileage: 123789,
					transmissionType: 'automatic',
					titleStatus: 'clean',
				},
				// 5
				{
					VIN: '3VWRX7AJ0AM042358',
					make: 'Ford',
					model: 'Mustang',
					mileage: 10,
				},
				// 6
				{
					VIN: '1FTRE14WX6HA28430',
					make: 'Porsche',
					model: 'Panamera',
					mileage: 52677,
					transmissionType: 'manual',
				},
				// 7
				{
					VIN: '5N1AR2MM2DC609769',
					make: 'Chevrolet',
					model: 'Equinox',
					mileage: 73846,
					titleStatus: 'clean',
				},
				// 8
				{
					VIN: '3GNDA23D67S548491',
					make: 'Cadillac',
					model: 'Escalade',
					mileage: 8724,
					transmissionType: 'automatic',
					titleStatus: 'clean',
				},
				// 9
				{
					VIN: '5GAKRBED9BJ389502',
					make: 'Jaguar',
					model: 'E-Pace',
					mileage: 27158,
				},
				// 10
				{
					VIN: '3VWDP7AJ1DM425031',
					make: 'Honda',
					model: 'Civic',
					mileage: 201873,
					titleStatus: 'reconstructed',
				},
			]);
		});
};
