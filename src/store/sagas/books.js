import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { searchBooksSuccess } from '../actions/books';

export function* searchBooksRequest(action) {
  const response = yield call(api.get, `volumes?q=${action.payload.query}&maxResults=40`);

  yield put(searchBooksSuccess(response.data));
}
