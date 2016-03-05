import { parseTopics } from '../lib/parse';

export const FETCH_TOPIC_REQUEST = 'FETCH_TOPIC_REQUEST';
export const FETCH_TOPIC_SUCCESS = 'FETCH_TOPIC_SUCCESS';
export const FETCH_TOPIC_FAILED = 'FETCH_TOPIC_FAILED';

export function getList(page) {
  const uri = `http://elasticsearch.cn/topic/page-${page}`;
  return dispatch => {
    dispatch({
      type: "FETCH_TOPIC_REQUEST"
    });
    dispatch({
      type: "FETCH_TOPIC_SUCCESS"
    });
  };
};
