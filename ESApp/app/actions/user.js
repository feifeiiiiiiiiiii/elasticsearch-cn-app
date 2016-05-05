import HttpClient from '../lib/httpClient';
import config from '../config';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export function getUser(page, current) {
  const uri = `${config.apiRoot}/users?page=${page}`;
  return dispatch => {
    dispatch({
      type: "FETCH_USER_REQUEST"
    });
    return HttpClient.get(uri).then(response => {
    	dispatch({
    		type: "FETCH_USER_SUCCESS",
    		payload: {
    			items: current.concat(response),
                page: page+1
    		}
    	})
    })
    .catch(error => {
    	dispatch({
    		type: 'FETCH_USER_FAILED'
    	})
    })
  };
};
