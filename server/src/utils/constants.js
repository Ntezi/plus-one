const path = require("path");

const DICTIONARY_URL = 'https://raw.githubusercontent.com/jeremy-rifkin/Wordlist/master/master.txt';
const DICTIONARY_DIRECTORY_NAME = path.join(__dirname, '../../data')
const DICTIONARY_FILE_NAME = 'dictionary.txt';


module.exports = {
    DICTIONARY_URL,
    DICTIONARY_FILE_NAME,
    DICTIONARY_DIRECTORY_NAME,
};
