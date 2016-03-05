import { checkHttpStatus } from '../lib/utils';

export const FETCH_TOPIC_REQUEST = 'FETCH_TOPIC_REQUEST';
export const FETCH_TOPIC_SUCCESS = 'FETCH_TOPIC_SUCCESS';
export const FETCH_TOPIC_FAILED = 'FETCH_TOPIC_FAILED';

export function users(page, current) {
  const uri = `http://proxy.elasticsearch.thnuclub.com/api/topics?page=${page}`;
  return dispatch => {
    dispatch({
      type: "FETCH_TOPIC_REQUEST"
    });
    return fetch(uri, {
    	method: "get"
    }).then(checkHttpStatus)
    .then((res) => {
    	return res.json()
    })
    .then(response => {
    	dispatch({
    		type: "FETCH_TOPIC_SUCCESS",
    		payload: {
    			items: current.concat(response)
    		},
    		page: page+1
    	})
    })
    .catch(error => {
    	dispatch({
    		type: 'FETCH_TOPIC_FAILED'
    	})
    })
  };
};
