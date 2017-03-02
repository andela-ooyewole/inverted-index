/* eslint no-unused-vars: "off"*/

/**
 * Index Class
 *
 * @class
 */
class Index {

  /**
   * Constructor initializes indices to an empty object and keeps track of
   * indexed files
   */
  constructor() {
    this.indexedFiles = {};
  }

  /**
   * Create Index
   *
   * createIndex method takes a single document and builds an index
   * from it
   *
   * @param {String} fileName Name of the document
   * @param {Object} fileContent Contents of the document
   * @returns {Object} Object containing file indices
   */
  createIndex(fileName, fileContent) {
    const indices = {};
    const documentText = [];

    fileContent.forEach((document) => {
      documentText.push(` ${Index.normalizeText(document.text)} `);
    });

    const documentWords = Index.tokenizeText(documentText);
    const uniqueWords = Index.filterUniqueWords(documentWords);
    const sortedUniqueWords = uniqueWords.sort();

    sortedUniqueWords.forEach((word) => {
      indices[word] = [];
      documentText.forEach((document, position) => {
        if (document.includes(` ${word} `)) {
          indices[word].push(position);
        }
      });
    });
    this.indexedFiles[fileName] = indices;
  }

  /**
   * Filter unique words
   *
   * @param {String[]} words an array of individual word strings
   * @returns {String[]} an array of unique strings contained in words
   */
  static filterUniqueWords(words) {
    return words.filter((word, index) => words.indexOf(word) === index);
  }

  /**
   * Get Index
   *
   * getIndex method takes a file name and returns the value of the key in the
   * indexedFiles object that matches the file name
   *
   * @param {String} fileName Name of a file
   * @returns {Object} Object containing individual words contained in the file
   * and their indices
   */
  getIndex(fileName) {
    return this.indexedFiles[fileName];
  }

  /**
   * Normalize string
   *
   * @param {String} text text string that is to be normalized
   * @returns {String} a normalized text string
   */
  static normalizeText(text) {
    return text.toLowerCase().trim().replace(/[^a-zA-Z 0-9]+/g, '');
  }

  /**
   * Search Index
   *
   * @param {string} fileName The name of the file to be searched
   * @param {String[]} phrases String or array of strings
   * @returns {Object} Object containing the indices that match the tokens
   */
  searchIndex(fileName, ...phrases) {
    let bookName = [];
    if (fileName) {
      bookName[0] = fileName;
    } else {
      bookName = Object.keys(this.indexedFiles);
    }
    let searchTokens = [];
    phrases.forEach((tokens) => {
      if (!Array.isArray(tokens)) tokens = [tokens];
      tokens.forEach((token) => {
        searchTokens = searchTokens.concat(token.toLowerCase().match(/\w+/g));
      });
    });
    const searchedIndexedFiles = {};
    bookName.forEach((name) => {
      searchedIndexedFiles[name] = {};
      searchTokens.forEach((token) => {
        if (token in this.indexedFiles[name]) {
          searchedIndexedFiles[name][token] = this.indexedFiles[name][token];
        }
      });
    });
    return searchedIndexedFiles;
  }

  /**
   * Tokenize string
   *
   * @param {String[]} text an array of string values
   * @returns {String[]} an array of individual words contained in the text
   */
  static tokenizeText(text) {
    return text.join(' ').match(/\w+/g);
  }
  /**
   * Validate File
   *
   * @param {Object} file the selected file
   * @returns {String} validation message
   */
  static validateFile(file) {
    let check = 'Valid file';
    try {
      if (typeof file !== 'object' || file.length === 0) {
        check = 'File is empty';
      }
      file.forEach((key) => {
        if (typeof key.title !== 'string' || typeof key.text !== 'string') {
          check = 'Invalid file content';
        }
      });
    } catch (error) {
      check = 'Invalid file';
    }
    return check;
  }
}

