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
         .set('items', [{
            img: "http://elasticsearch.cn/uploads/avatar/000/00/00/01_avatar_mid.jpg",
            nickname: "medcl",
            desc: "Elasticsearch资深爱好者",
            prestige: 36,
            score: 2575,
            agree: 67,
            thank: 13,
            topic: "es elasticsearch beats PacketBeat"
         },{
            img: "http://elasticsearch.cn/uploads/avatar/000/00/01/05_avatar_mid.jpg",
            nickname: "三斗室",
            desc: "Elasticsearch资深爱好者",
            prestige: 36,
            score: 2575,
            agree: 67,
            thank: 13,
            topic: "es elasticsearch kibana PacketBeat"
         },{
            img: "http://elasticsearch.cn/uploads/avatar/000/00/01/05_avatar_mid.jpg",
            nickname: "stab",
            desc: "Elasticsearch资深爱好者",
            prestige: 36,
            score: 2575,
            agree: 67,
            thank: 13,
            topic: "es elasticsearch kibana PacketBeat"
         },{
            img: "http://elasticsearch.cn/uploads/avatar/000/00/00/01_avatar_mid.jpg",
            nickname: "medcl",
            desc: "Elasticsearch资深爱好者",
            prestige: 36,
            score: 2575,
            agree: 67,
            thank: 13,
            topic: "es elasticsearch beats PacketBeat"
         },{
            img: "http://elasticsearch.cn/uploads/avatar/000/00/01/05_avatar_mid.jpg",
            nickname: "三斗室",
            desc: "Elasticsearch资深爱好者",
            prestige: 36,
            score: 2575,
            agree: 67,
            thank: 13,
            topic: "es elasticsearch kibana PacketBeat"
         },{
            img: "http://elasticsearch.cn/uploads/avatar/000/00/01/05_avatar_mid.jpg",
            nickname: "stab",
            desc: "Elasticsearch资深爱好者",
            prestige: 36,
            score: 2575,
            agree: 67,
            thank: 13,
            topic: "es elasticsearch kibana PacketBeat"
         }]);
    });
  },
});