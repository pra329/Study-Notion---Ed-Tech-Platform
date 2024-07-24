const mongoose = require("mongoose");
require("dotenv").config();

const { DATABASE_URL } = process.env;

exports.connect = () => {
	mongoose.connect(DATABASE_URL)
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
