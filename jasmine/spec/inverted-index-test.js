// eslint-disable-next-line no-use-before-define
import books from '../books.json';
import invalidContent from '../invalid-content.json';
import invalidKey from '../invalid-key.json';
import emptyArray from '../empty-array.json';
import invalidFile from '../invalid-file.json';

const index = new Index();

index.createIndex('books.json', books);

describe('Read book data', () => {
  it('Should have keys named \'title\' and \'text\' with string for values',
    () => {
      expect(index.validateFile(invalidContent)).toBe('Invalid file content');
      expect(index.validateFile(invalidKey)).toBe('Invalid file content');
    });
  it('Should not be empty', () => {
    expect(index.validateFile(emptyArray)).toBe('File is empty');
  });
  it('Should not be an invalid file', () => {
    expect(index.validateFile(invalidFile)).toBe('Invalid file');
    expect(index.validateFile(books)).toBe('Valid file');
  });
});

describe('Populate Index', () => {
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
          fellowship: [1],
          full: [0],
          hobbit: [1],
          hole: [0],
          imagination: [0],
          in: [0],
          into: [0],
          lord: [1],
          man: [1],
          of: [0, 1],
          powerful: [1],
          rabbit: [0],
          ring: [1],
          rings: [1],
          seek: [1],
          the: [1],
          to: [1],
          unusual: [1],
          wizard: [1],
          wonderland: [0],
          world: [0]
        }
      );
    });
});
