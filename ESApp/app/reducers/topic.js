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
         .set('items', [{
            img: "http://elasticsearch.cn/uploads/topic/20151223/4328f7f16900c766e3fa6e8590a4abc2_50_50.png",
            tag: "es",
            talk: "93 个讨论",
            follow: "94 个关注",
            desc: "7 天新增 1 个讨论, 30 天新增 5 个讨论",
            id: 1
         },{
            img: "http://elasticsearch.cn/uploads/topic/20151223/4328f7f16900c766e3fa6e8590a4abc2_50_50.png",
            tag: "elk",
            talk: "93 个讨论",
            follow: "94 个关注",
            desc: "7 天新增 1 个讨论, 30 天新增 5 个讨论",
            id: 2
         },{
            img: "http://elasticsearch.cn/uploads/topic/20151223/4328f7f16900c766e3fa6e8590a4abc2_50_50.png",
            tag: "dsl",
            talk: "93 个讨论",
            follow: "94 个关注",
            desc: "7 天新增 1 个讨论, 30 天新增 5 个讨论",
            id: 3
         },{
            img: "http://elasticsearch.cn/uploads/topic/20151223/4328f7f16900c766e3fa6e8590a4abc2_50_50.png",
            tag: "es",
            talk: "93 个讨论",
            follow: "94 个关注",
            desc: "7 天新增 1 个讨论, 30 天新增 5 个讨论",
            id: 1
         },{
            img: "http://elasticsearch.cn/uploads/topic/20151223/4328f7f16900c766e3fa6e8590a4abc2_50_50.png",
            tag: "elk",
            talk: "93 个讨论",
            follow: "94 个关注",
            desc: "7 天新增 1 个讨论, 30 天新增 5 个讨论",
            id: 2
         },{
            img: "http://elasticsearch.cn/uploads/topic/20151223/4328f7f16900c766e3fa6e8590a4abc2_50_50.png",
            tag: "dsl",
            talk: "93 个讨论",
            follow: "94 个关注",
            desc: "7 天新增 1 个讨论, 30 天新增 5 个讨论",
            id: 3
         }])
    });
  },
});