import deepAssign from 'deep-assign';

export function request(url, params) {
  const defaultParams = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return fetch(url, deepAssign({}, defaultParams, params));
}
