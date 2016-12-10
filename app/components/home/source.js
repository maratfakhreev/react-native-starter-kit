import config from '../../config';
import request from '../../lib/request';

export default class HomeSource {
  static urlRoot = `${config.apiPath}/home`;

  static get(user) {
    return request(this.urlRoot, {
      method: 'GET',
      body: ''
    })
    .then(result => result.json());
  }
}
