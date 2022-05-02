const Dictionary = require("./dictionary_service");
const {logger} = require('../utils/logging')(module);

async function getDictionary() {
    return await Dictionary.getDictionary();
}

//Search english word in dictionary with Binary Search
function checkWord(dictionary, word) {

    let start = 0, end = dictionary.length - 1;

    while (start <= end) {

        let middle = Math.floor((start + end) / 2);

        if (dictionary[middle] === word) {
            return true;
        } else if (dictionary[middle] < word) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return false;
}

async function getNonEnglishWords(text) {

    const words = text.match(/\b(\w+)\b/g);

    let dictionary = await getDictionary();

    let nonEnglishWords = [];

    for (let index in words) {
        const word = words[index].toLowerCase();
        if (!checkWord(dictionary, word)) {
            nonEnglishWords.push(word);
        }
    }

    logger.info(`Non-English words: ${nonEnglishWords}`);

    // Remove duplicates
    return nonEnglishWords.filter(function(element, pos) {
        return nonEnglishWords.indexOf(element) === pos;
    })
}

module.exports = {
    getNonEnglishWords
};
