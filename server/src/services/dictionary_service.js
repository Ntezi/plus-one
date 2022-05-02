const fs = require('fs')
const readline = require('readline')
const Constants = require("../utils/constants");

function getDictionary() {
    const file = `${Constants.DICTIONARY_DIRECTORY_NAME}/${Constants.DICTIONARY_FILE_NAME}`;

    let dictionary = [];
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: fs.createReadStream(file),
            output: process.stdout,
            terminal: false
        });

        rl.on('line', (line) => {
            line.split('\n').map(word => {
                dictionary.push(word.toLowerCase());
            })
        });

        rl.on('close', async () => {
            resolve(dictionary)
        });
    });
}

module.exports = {
    getDictionary
};
