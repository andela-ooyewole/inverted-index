// eslint-disable-next-line no-use-before-define
import books from '../books.json';

const index = new Index();

describe('Read book data', () => {
  it('Should be a valid JSON array', () => {
    expect(index.sampleTest).toBe('working');
  });
  it('Should not be empty', () => {
    expect(books[0].title).toBe('Alice in Wonderland');
  });
});
