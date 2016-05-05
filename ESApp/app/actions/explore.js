import HttpClient from '../lib/httpClient';
import config from '../config';

export const FETCH_EXPLORE_REQUEST = 'FETCH_EXPLORE_REQUEST';
export const FETCH_EXPLORE_SUCCESS = 'FETCH_EXPLORE_SUCCESS';
export const FETCH_EXPLORE_FAILED = 'FETCH_EXPLORE_FAILED';

export function questions(page, current) {
  const uri = `${config.apiRoot}/questions?page=${page}`;
  return dispatch => {
    dispatch({
      type: "FETCH_EXPLORE_REQUEST"
    });
    return HttpClient.get(uri).then(response => {
    	dispatch({
    		type: "FETCH_EXPLORE_SUCCESS",
    		payload: {
    			items: current.concat(response),
          page: page+1
    		},
    	})
    })
    .catch(error => {
    	dispatch({
    		type: 'FETCH_EXPLORE_FAILED',
    	})
    })
  };
};
