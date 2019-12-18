const Sequelize = require('sequelize');

// Faz a conexão do sequelize com o servidor
module.exports = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
	host : process.env.MYSQL_HOST,
	dialect : 'mysql',
	//logging: false,
	pool : {
		max:30,
		min:0,
		idle: 10000,
	},
});