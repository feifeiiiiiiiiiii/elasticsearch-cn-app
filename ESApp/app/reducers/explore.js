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
         .set('items', [{
            img: "http://elasticsearch.cn/static/common/avatar-max-img.png",
            question: "列很多怎么办?",
            tag: "Elasticsearch",
            desc: "googlebrain 回复了问题 • 2 人关注 • 2 个回复 • 30 次浏览"
         }, {
            img: "http://elasticsearch.cn/static/common/avatar-max-img.png",
            question: "es搜索报SERVICE_UNAVAILABLE?",
            tag: "Elasticsearch",
            desc: "googlebrain 回复了问题 • 2 人关注 • 2 个回复 • 30 次浏览"
         }, {
            img: "http://elasticsearch.cn/static/common/avatar-max-img.png",
            question: "有没有方法，不指定form，size而是直接返回全部数据。",
            tag: "Elasticsearch",
            desc: "googlebrain 回复了问题 • 2 人关注 • 2 个回复 • 30 次浏览"
         }, {
            img: "http://elasticsearch.cn/uploads/avatar/000/00/01/05_avatar_mid.jpg",
            question: "Shards数量 对 elasticsearch搜素性能的影响",
            tag: "Elasticsearch",
            desc: "googlebrain 回复了问题 • 2 人关注 • 2 个回复 • 30 次浏览"
         }, {
            img: "http://elasticsearch.cn/uploads/avatar/000/00/01/17_avatar_mid.jpg",
            question: "ELK中elasticsearch如何关闭throttling indexing",
            tag: "Elasticsearch",
            desc: "googlebrain 回复了问题 • 2 人关注 • 2 个回复 • 30 次浏览"
         }, {
            img: "http://elasticsearch.cn/uploads/avatar/000/00/07/72_avatar_mid.jpg",
            question: "一个索引中如何同时使用IK、pingyin、stconvert",
            tag: "Elasticsearch",
            desc: "googlebrain 回复了问题 • 2 人关注 • 2 个回复 • 30 次浏览"
         }, {
            img: "http://elasticsearch.cn/uploads/avatar/000/00/01/05_avatar_mid.jpg",
            question: "copy_to这个字段是不是不可以高亮啊",
            tag: "Elasticsearch",
            desc: "googlebrain 回复了问题 • 2 人关注 • 2 个回复 • 30 次浏览"
         }])
    });
  },
});