import { checkHttpStatus } from '../lib/utils';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export function getUser(page, current) {
  const uri = `http://proxy.elasticsearch.thnuclub.com/api/users?page=${page}`;
  return dispatch => {
    dispatch({
      type: "FETCH_USER_REQUEST"
    });
    return fetch(uri, {
    	method: "get"
    }).then(checkHttpStatus)
    .then((res) => {
    	return res.json()
    })
    .then(response => {
    	dispatch({
    		type: "FETCH_USER_SUCCESS",
    		payload: {
    			items: current.concat(response)
    		},
    		page: page+1
    	})
    })
    .catch(error => {
    	dispatch({
    		type: 'FETCH_USER_FAILED'
    	})
    })
  };
};
