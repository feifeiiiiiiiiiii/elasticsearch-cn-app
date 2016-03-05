import Immutable from 'immutable'
import { combineReducers } from 'redux';
import {
	FETCH_TOPIC_REQUEST,
  FETCH_TOPIC_SUCCESS,
  FETCH_TOPIC_FAILED
} from '../actions/topic';
import { createReducer } from '../lib/utils';

const initialState = Immutable.fromJS({
  items: [],
  isFetching: false,
  infomsg: "",
  page: 1
});

export default createReducer(initialState, {

  [FETCH_TOPIC_REQUEST](state, payload) {
    return state.withMutations(map => {
      map.set('isFetching', true);
    });
  },
  [FETCH_TOPIC_SUCCESS](state, payload) {
    return state.withMutations(map => {
      map.set('isFetching', false)
         .set('items', payload.payload.items);
    });
  },
  [FETCH_TOPIC_FAILED](state, payload) {
    return state.withMutations(map => {
      map.set('isFetching', false)
         .set('infomsg', "数据获取失败");
    });
  },
});