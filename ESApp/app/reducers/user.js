import Immutable from 'immutable'
import { combineReducers } from 'redux';
import {
	FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from '../actions/user';
import { createReducer } from '../lib/utils';

const initialState = Immutable.fromJS({
  items: [],
  isFetching: false,
  infomsg: "",
  page: 1,
});

export default createReducer(initialState, {

  [FETCH_USER_REQUEST](state, payload) {
    return state.withMutations(map => {
      map.set('isFetching', true);
    });
  },
  [FETCH_USER_SUCCESS](state, payload) {
    return state.withMutations(map => {
      map.set('isFetching', false)
         .set('items', payload.payload.items)
        .set('page', payload.payload.page);
    });
  },
  [FETCH_USER_FAILED](state, payload) {
    return state.withMutations(map => {
      map.set('isFetching', false)
         .set('infomsg', "数据加载失败请检查网络");
    });
  },
});