"use strict";

const mysql = require('mysql');

// database configuration
const connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (!err) {
        console.log(`database connected - ${process.env.DB_DATABASE}`);
    } else {
        console.error('error connecting: ' + err.stack);
    }
});

module.exports = connection;