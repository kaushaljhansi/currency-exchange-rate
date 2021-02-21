"use strict";

/**
    @param res - response object
    @param data - result
    @returns success response
*/
const sendSuccess = (res, data) => {
    res.status(200).send({
        success: true,
        time: new Date(),
        data: data
    });
};

/**
    @param res - response object
    @param err - error
    @returns error response
*/
const sendError = (res, err) => {
    res.status(500).send({
        success: false,
        time: new Date(),
        error: err
    });
};

module.exports = {
    sendSuccess,
    sendError
}