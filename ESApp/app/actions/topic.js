import HttpClient from '../lib/httpClient';
import config from '../config';

export const FETCH_TOPIC_REQUEST = 'FETCH_TOPIC_REQUEST';
export const FETCH_TOPIC_SUCCESS = 'FETCH_TOPIC_SUCCESS';
export const FETCH_TOPIC_FAILED = 'FETCH_TOPIC_FAILED';

export function topic(page, current) {
  const uri = `${config.apiRoot}/topics?page=${page}`;
  return dispatch => {
    dispatch({
      type: "FETCH_TOPIC_REQUEST"
    });
    return HttpClient.get(uri).then(response => {
    	dispatch({
    		type: "FETCH_TOPIC_SUCCESS",
    		payload: {
    			items: current.concat(response),
                page: page+1
    		},
    	})
    })
    .catch(error => {
    	dispatch({
    		type: 'FETCH_TOPIC_FAILED'
    	})
    })
  };
};
