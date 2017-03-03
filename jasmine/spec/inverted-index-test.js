/* eslint-disable */
import books from '../books.json';
import adventureBooks from '../adventure-books.json';
import emptyArray from '../empty-array.json';
import invalidContent from '../invalid-content.json';
import invalidFile from '../invalid-file.json';
import invalidKey from '../invalid-key.json';
import scienceFictionBooks from '../science-fiction-books.json';
/* eslint-enable */

const index = new Index();

describe('Read book data', () => {
  it('Should have keys named \'title\' and \'text\' with string for values',
    () => {
      expect(Index.validateFile(invalidContent)).toBe('Invalid file content');
      expect(Index.validateFile(invalidKey)).toBe('Invalid file content');
    });

  it('Should not be empty', () => {
    expect(Index.validateFile(emptyArray)).toBe('File is empty');
  });

  it('Should not be an invalid file', () => {
    expect(Index.validateFile(invalidFile)).toBe('Invalid file');
    expect(Index.validateFile(books)).toBe('Valid file');
  });
});

describe('Populate Index', () => {
  index.createIndex('books.json', books);
  index.createIndex('adventure-books.json', adventureBooks);
  index.createIndex('science-fiction-books.json', scienceFictionBooks);

  it('Should verify that the index is created once the JSON file has been read',
    () => {
      expect(index.getIndex('books.json')).toBeDefined();
    });

  it('Should map the string keys to the correct objects in the JSON array',
    () => {
      expect(index.getIndex('books.json')).toEqual(
        {
          a: [0, 1],
          alice: [0],
          alliance: [1],
          an: [1],
          and: [0, 1],
          destroy: [1],
          dwarf: [1],
          elf: [1],
          enters: [0],
          falls: [0],
          full: [0],
          hobbit: [1],
          hole: [0],
          imagination: [0],
          into: [0],
          man: [1],
          of: [0, 1],
          powerful: [1],
          rabbit: [0],
          ring: [1],
          seek: [1],
          to: [1],
          unusual: [1],
          wizard: [1],
          world: [0]
        }
      );
    });
});

describe('Search Index', () => {
  it(`Should return an array of the indices of the correct objects that contain
    the words in the search query`, () => {
    expect(index.searchIndex('books.json', 'a rabbit')).toEqual({
      'books.json': {
        a: [0, 1],
        rabbit: [0]
      }
    });

    expect(index.searchIndex('adventure-books.json', 'a king billy')).toEqual({
      'adventure-books.json': {
        a: [0, 1],
        billy: [1]
      }
    });
  });

  it('Should handle an array of search terms', () => {
    expect(index.searchIndex('books.json', ['a, rabbit'])).toEqual({
      'books.json': {
        a: [0, 1],
        rabbit: [0]
      }
    });

    expect(index.searchIndex('adventure-books.json', ['a', 'king', 'billy']))
      .toEqual({
        'adventure-books.json': {
          a: [0, 1],
          billy: [1]
        }
      });
  });

  it('Should handle a varied number of search terms', () => {
    expect(index.searchIndex('books.json', 'a', 'rabbit')).toEqual({
      'books.json': {
        a: [0, 1],
        rabbit: [0]
      }
    });
  });

  it('Should return an empty object if no match is found', () => {
    expect(index.searchIndex('adventure-books.json', 'house'))
      .toEqual({
        'adventure-books.json': {}
      });
  });

  it('Should normalize search string before search', () => {
    expect(index.searchIndex(
      'books.json', 'A RABBIT!@#$%^&*()_+=-][}{/?><.,|}]`~€‹›'
    )).toEqual({
      'books.json': {
        a: [0, 1],
        rabbit: [0]
      }
    });
  });

  it('Should have an optional "filename" argument ', () => {
    expect(index.searchIndex(undefined, 'a', 'and', 'of'))
    .toEqual({
      'books.json': {
        a: [0, 1],
        and: [0, 1],
        of: [0, 1]
      },
      'adventure-books.json': {
        a: [0, 1],
        of: [0]
      },
      'science-fiction-books.json': {
        a: [0, 2],
        and: [2],
        of: [2]
      }
    });
  });
});
