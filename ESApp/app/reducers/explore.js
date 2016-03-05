import Immutable from 'immutable'
import { combineReducers } from 'redux';
import {
	FETCH_EXPLORE_REQUEST,
  FETCH_EXPLORE_SUCCESS,
  FETCH_EXPLORE_FAILED
} from '../actions/explore';
import { createReducer } from '../lib/utils';

const initialState = Immutable.fromJS({
  items: [],
  isFetching: false,
  infomsg: "",
  page: 1
});

export default createReducer(initialState, {

  [FETCH_EXPLORE_REQUEST](state, payload) {
    return state.withMutations(map => {
      map.set('isFetching', true);
    });
  },
  [FETCH_EXPLORE_SUCCESS](state, payload) {
      return state.withMutations(map => {
      map.set('isFetching', false)
         .set('items', payload.payload.items);
    });
  },
  [FETCH_EXPLORE_FAILED](state, payload) {
    return state.withMutations(map => {
      map.set('isFetching', false)
         .set('infomsg', "数据获取失败");
    });
  },
});