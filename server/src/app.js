const express = require('express');
const bodyParser = require('body-parser');
const {getDictionaryFile} = require('./utils/download');

const serverTerminationHandler = require('./utils/server_exception_handler');
require('http-shutdown').extend();

const {logger} = require('./utils/logging')(module);
const request_error = require('./middlewares/request_error');
const entrypoint = require('./middlewares/entrypoint');
const check = require('./routes/check');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

entrypoint.init(app);

// Download the dictionary
getDictionaryFile()

app.use('/check', check);

app.use(request_error);
const port = process.env.SERVER_PORT || 2205;
const server = app.listen(port, () => {
    logger.info(`The Server listening on port: ${port}`);
}).withShutdown();

serverTerminationHandler(server);
