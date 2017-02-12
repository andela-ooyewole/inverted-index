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
    this.sampleTest = 'working';
    this.test = false;
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
  }

  /**
   * Get Index
   *
   * @returns {type} description
   */
  getIndex() {
  }

  /**
   * Search Index
   *
   * @param {Any} terms description
   * @returns {type} description
   */
  searchIndex(terms) {
  }
}

