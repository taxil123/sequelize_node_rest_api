const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: dbConfig.pool
});


sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.log('Unable to connect to the database:', err);
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('../models/productModel.js')(sequelize, DataTypes)
db.reviews = require('../models/reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: false }');
});

module.exports = db;