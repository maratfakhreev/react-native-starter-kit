import deepAssign from 'deep-assign';

export default function request(url, params) {
  const defaultParams = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return fetch(url, deepAssign({}, defaultParams, params));
}
