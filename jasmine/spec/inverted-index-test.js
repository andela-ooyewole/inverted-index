// eslint-disable-next-line no-use-before-define
import books from '../books.json';
import invalidContent from '../invalid-content.json';
import invalidKey from '../invalid-key.json';
import emptyArray from '../empty-array.json';
import invalidFile from '../invalid-file.json';

const index = new Index();

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
