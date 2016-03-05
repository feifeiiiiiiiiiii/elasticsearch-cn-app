export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export function getUser(page) {
  const uri = `http://elasticsearch.cn/topic/page-${page}`;
  return dispatch => {
    dispatch({
      type: "FETCH_USER_REQUEST"
    });
    dispatch({
      type: "FETCH_USER_SUCCESS"
    });
  };
};
