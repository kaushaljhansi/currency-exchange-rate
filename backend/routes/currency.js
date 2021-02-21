"use strict";

const express = require('express');
const router = express.Router();
const { currencyService } = require('../services');
const { requestHandler } = require('../utils');

/**
    @param req - request object
    @param res - response object
    @returns result
*/
router.get('/getCurrency', (req, res) => {
    currencyService.getCurrency()
        .then(data => {
                requestHandler.sendSuccess(res, data);
            },
            error => {
                requestHandler.sendError(res, error.sqlMessage);
            });
});

module.exports = router;