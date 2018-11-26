const initialState = {
  query: '',
  books: [],
  loading: true,
};

export default function books(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_BOOKS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload.books,
        loading: false,
      };
    case 'SEARCH_INPUT':
      return {
        ...state,
        query: action.payload.query,
      };
    default:
      return state;
  }
}
