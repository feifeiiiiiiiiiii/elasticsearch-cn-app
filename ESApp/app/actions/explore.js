export const FETCH_EXPLORE_REQUEST = 'FETCH_EXPLORE_REQUEST';
export const FETCH_EXPLORE_SUCCESS = 'FETCH_EXPLORE_SUCCESS';
export const FETCH_EXPLORE_FAILED = 'FETCH_EXPLORE_FAILED';

export function getExplore(page) {
  const uri = `http://elasticsearch.cn/topic/page-${page}`;
  return dispatch => {
    dispatch({
      type: "FETCH_EXPLORE_REQUEST"
    });
    dispatch({
      type: "FETCH_EXPLORE_SUCCESS"
    });
  };
};
