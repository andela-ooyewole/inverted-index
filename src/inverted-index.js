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
    this.indices = {};
    this.indexedFiles = {};
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
  /**
   * Create Index
   *
   * createIndex method takes a single document parameter and builds an index
   * from it
   *
   * @param {String} fileName Name of the document
   * @param {Object} fileContent Contents of the documnet
   * @returns {Object} Object containing index
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
   * @param {String} fileName Name of the document
   * @returns {type} description
   */
  getIndex(fileName) {
    // if (fileName === undefined) {
    //   return this.index;
    // }
    return this.indexedFiles[fileName];
  }

  /**
   * Search Index
   *
   * @param {Any} token description
   * @returns {type} description
   */
  searchIndex(token) {
  }
}

