require('dotenv').config();
let {createPool} = require('mysql');
let connection = createPool({
    Host: process.env.dbHost,
    Name: process.env.dbName,
    User: process.env.dbUser,
    Pwd: process.env.dbPort,
    multipleStatements: true
})
module.exports = connection