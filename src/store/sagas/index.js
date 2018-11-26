import { all, takeLatest } from 'redux-saga/effects';

import { searchBooksRequest } from './books';

export default function* rootSaga() {
  return yield all([takeLatest('SEARCH_BOOK_REQUEST', searchBooksRequest)]);
}
