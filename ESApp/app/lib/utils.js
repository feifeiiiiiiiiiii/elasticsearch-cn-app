export function createReducer(intialState, handlers) {
  return (state = intialState, action) => {
    const handler = handlers[action.type];

    if (!handler) {
      return state;
    }
    return handler(state, action);
  };
}

export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}