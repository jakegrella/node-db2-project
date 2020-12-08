exports.up = function (knex) {
	return knex.schema.createTable('cars', (table) => {
		// id: primary key, unique, not null, integers that auto-increment
		table.increments();
		// VIN: string, unique, not null
		table.string('VIN', 17).unique().notNullable();
		// make: not null
		table.string('make').notNullable();
		// model: not null
		table.string('model').notNullable();
		// mileage: integer, not null
		table.integer('mileage').notNullable();
		// transmissionType:
		table.string('transmissionType');
		// titleStatus
		table.string('titleStatus');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('cars');
};
