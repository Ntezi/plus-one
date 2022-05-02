const express = require('express');
const router = express.Router()
const {logger} = require('../utils/logging')(module);
const {returnErrorResponse, returnResponse} = require('../utils/status');
const {StatusCodes, ReasonPhrases} = require('http-status-codes');
const authenticate = require('../middlewares/authorization');
const CheckService = require('../services/check_service');

router.post('/', authenticate, async (req, res) => {
    const {text} = req.body;
    console.log("req.text", text)
    try {
        logger.info(`Check Endpoint: POST /check`);
        const searchResults = await CheckService.getNonEnglishWords(text);
        returnResponse(res, {data: searchResults}, StatusCodes.ACCEPTED, ReasonPhrases.ACCEPTED)
    } catch (error) {
        logger.error(`Error in POST /check: ${error.toString()}`);
        returnErrorResponse(res, error, StatusCodes.INTERNAL_SERVER_ERROR);
    }
});

module.exports = router;
