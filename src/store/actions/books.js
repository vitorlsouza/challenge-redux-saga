export const searchBooksRequest = query => ({
  type: 'SEARCH_BOOK_REQUEST',
  payload: {
    query,
  },
});

export const searchBooksSuccess = books => ({
  type: 'SEARCH_BOOKS_SUCCESS',
  payload: {
    books,
  },
});

export const searchInput = query => ({
  type: 'SEARCH_INPUT',
  payload: {
    query,
  },
});
