/* eslint no-unused-vars: "off"*/
/* eslint class-methods-use-this: "off"*/

/**
 * Index Class
 *
 * @class
 */
class Index {
  /**
   * Constructor initiallizes indices to an empty object and keeps track of
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
   * @param {Object} fileContent Contents of the documnet
   * @returns {Object} Object containing file indices
   */
  createIndex(fileName, fileContent) {
    const indices = {};
    const documentText = [];
    const searchOptimizedDocText = [];
    fileContent.forEach((document) => {
      // normalize words
      const normalizedText = (`${document.title} ${document.text}`)
        .toLowerCase().trim().replace(/[^a-zA-Z 0-9]+/g, '');
      documentText.push(normalizedText);
      searchOptimizedDocText.push(` ${normalizedText} `);
    });
    // tokenized words
    const documentWords = documentText.join(' ').split(/\s/);
    // filter unique words
    const uniqueWords = documentWords.filter((word, index) =>
      documentWords.indexOf(word) === index);
    const sortedUniqueWords = uniqueWords.sort();

    sortedUniqueWords.forEach((word) => {
      indices[word] = [];
      searchOptimizedDocText.forEach((document, position) => {
        if (document.includes(` ${word} `)) {
          indices[word].push(position);
        }
      });
    });
    this.indexedFiles[fileName] = indices;
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
   * Search Index
   *
   * @param {String} fileName Name of a file defined by a '.json' extension,
   * which is the first parameter of the phrases spread
   * @param {String[]} tokens String or array of strings; which follow a
   * a set fileName, or if no fileName is defined; constitute all parameters
   * @returns {type} description
   */
  searchIndex(...phrases) {
    let fileName = [];
    if (phrases[0].slice(-5) === '.json') {
      fileName[0] = phrases[0];
      phrases.splice(0, 1);
    } else {
      fileName = Object.keys(this.indexedFiles);
    }
    let searchTokens = [];
    phrases.forEach((tokens) => {
      if (!Array.isArray(tokens)) tokens = [tokens];
      tokens.forEach((token) => {
        searchTokens = searchTokens.concat(token.toLowerCase().match(/\w+/g));
      });
    });
    const searchedIndexedFiles = {};
    fileName.forEach((name) => {
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
   * Validate File
   * @param {Object} file the selected file
   * @returns {String} validation message
   */
  validateFile(file) {
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

