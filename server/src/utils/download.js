const fs = require('fs');
const https = require('https');
const Constants = require('./constants');
const {logger} = require('./logging')(module);

function getDictionaryFile() {
    if (!fs.existsSync(Constants.DICTIONARY_DIRECTORY_NAME)) {
        fs.mkdirSync(Constants.DICTIONARY_DIRECTORY_NAME);
    }
    const file = `${Constants.DICTIONARY_DIRECTORY_NAME}/${Constants.DICTIONARY_FILE_NAME}`;

    let localFile = fs.createWriteStream(file);
    const request = https.get(Constants.DICTIONARY_URL, function (response) {
        const length = parseInt(response.headers['content-length'], 10);
        let current = 0;
        const total = length / 1048576; //1048576 - bytes in 1 Megabyte

        response.on('data', function (chunk) {
            current += chunk.length;
            showProgress(file, current, length, total);
        });

        response.on('end', function () {
            logger.info(`Download complete`);
        });

        response.pipe(localFile);
    });
}

function showProgress(file, current, len, total) {
    const percentage = (100.0 * current / len).toFixed(2);
    const currentSize = (current / 1048576).toFixed(2);
    const totalSize = total.toFixed(2);

    logger.info(`Downloading ${file} - ${percentage} % (${currentSize} MB) of total size: ${totalSize} MB`);
}

module.exports = {
    getDictionaryFile
};
