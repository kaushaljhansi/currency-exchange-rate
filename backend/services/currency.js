"use strict";

const db = require('../database');

/**
    @returns all the records from currency table
*/
const getCurrency = () => {
    return new Promise((resolve, reject) => {
        const query = 'select * from currencies';
        db.query(query, (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
};

module.exports = {
    getCurrency
};